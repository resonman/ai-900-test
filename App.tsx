import React, { useState, useEffect } from "react";
import { questions } from "./data";
import { Question, AppMode } from "./types";
import { auth, googleProvider, db } from "./firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { ref, get, set } from "firebase/database";
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  AlertCircle,
  Trophy,
  Play,
  BookX,
  Check,
  GripVertical,
  RotateCcw,
  X,
  Cloud,
  LogOut,
  User as UserIcon,
  Loader2,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

// --- Helper Functions for Test Randomization ---

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const deduplicateQuestions = (allQuestions: Question[]): Question[] => {
  const uniqueMap = new Map<string, Question>();

  allQuestions.forEach((q) => {
    // Create a signature based on content to identify duplicates
    const signature = JSON.stringify({
      text: q.text.trim(),
      type: q.type,
      // Check options/statements to distinguish variants
      options: q.options ? [...q.options].sort() : null,
      statements: q.statements,
    });

    if (!uniqueMap.has(signature)) {
      uniqueMap.set(signature, q);
    }
  });

  return Array.from(uniqueMap.values());
};

const randomizeQuestionOptions = (q: Question): Question => {
  // Deep copy to avoid mutating original data
  const newQ = JSON.parse(JSON.stringify(q));

  // Only randomize Single and Multiple choice
  if (
    (newQ.type !== "single" && newQ.type !== "multiple") ||
    !newQ.options ||
    newQ.options.length === 0
  ) {
    return newQ;
  }

  const prefixes = ["A", "B", "C", "D", "E", "F", "G", "H"];

  // 1. Parse existing options to separate Letter from Content
  const parsedOptions = newQ.options.map((opt: string, index: number) => {
    // Matches "A. Content" or "A) Content"
    const match = opt.match(/^([A-Z])[\.\)]\s+(.*)/);
    if (match) {
      return {
        originalLetter: match[1],
        content: match[2],
        originalIndex: index,
      };
    }
    // Fallback if format is non-standard
    return {
      originalLetter: prefixes[index],
      content: opt.replace(/^[A-Z][\.\)]\s+/, ""),
      originalIndex: index,
    };
  });

  // 2. Shuffle the options
  const shuffledOptions = shuffleArray(parsedOptions);

  // 3. Reconstruct options with new prefixes
  newQ.options = shuffledOptions.map((item: any, index: number) => {
    return `${prefixes[index]}. ${item.content}`;
  });

  // 4. Remap correct answer(s) to new positions
  if (newQ.type === "single") {
    const target = parsedOptions.find(
      (p: any) => p.originalLetter === q.correctAnswer
    );
    if (target) {
      const newIndex = shuffledOptions.indexOf(target);
      newQ.correctAnswer = prefixes[newIndex];
    }
  } else if (newQ.type === "multiple") {
    const originalCorrect = q.correctAnswer as string[];
    const newCorrect = originalCorrect
      .map((letter) => {
        const target = parsedOptions.find(
          (p: any) => p.originalLetter === letter
        );
        if (target) {
          const newIndex = shuffledOptions.indexOf(target);
          return prefixes[newIndex];
        }
        return null;
      })
      .filter(Boolean)
      .sort(); // Sort to keep ["A", "B"] format
    newQ.correctAnswer = newCorrect;
  }

  return newQ;
};

// --- Helper Components ---

const Card = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const Button = ({
  onClick,
  children,
  variant = "primary",
  className = "",
  disabled = false,
}: {
  onClick: () => void;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger" | "success";
  className?: string;
  disabled?: boolean;
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
    outline:
      "border-2 border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600",
    danger: "bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Badge = ({
  children,
  color = "blue",
}: {
  children?: React.ReactNode;
  color?: "blue" | "green" | "red" | "orange";
}) => {
  const colors = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200",
    red: "bg-rose-50 text-rose-700 border-rose-200",
    orange: "bg-amber-50 text-amber-700 border-amber-200",
  };
  return (
    <span
      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colors[color]}`}
    >
      {children}
    </span>
  );
};

// --- Main App Component ---

export default function App() {
  const [mode, setMode] = useState<AppMode>("menu");
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Answers state: Record<QuestionID, AnswerValue>
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<
    Record<number, boolean>
  >({});

  // Lifted state for Drag & Drop to avoid hook violation in conditional render
  const [dragSource, setDragSource] = useState<string | null>(null);

  const [wrongQuestionIds, setWrongQuestionIds] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [savedProgress, setSavedProgress] = useState<any>(null);

  // Firebase State
  const [user, setUser] = useState<User | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [dataLoadedFromCloud, setDataLoadedFromCloud] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // --- Helper to get domain safely ---
  const getSafeDomain = () => {
    try {
      if (window.location.hostname && window.location.hostname !== "") {
        return window.location.hostname;
      }
      if (window.location.host && window.location.host !== "") {
        return window.location.host; // fallback to host (might include port)
      }
      return window.location.href; // last resort
    } catch (e) {
      return "unknown";
    }
  };

  // --- Firebase Auth & Sync Logic ---

  // 1. Listen for Auth Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // User just logged in, fetch data from cloud
        fetchUserData(currentUser.uid);
      } else {
        // User logged out, maybe clear sensitive state or just keep local?
        // Let's keep local state but mark cloud as not loaded
        setDataLoadedFromCloud(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // 2. Load Data from Cloud
  const fetchUserData = async (uid: string) => {
    setIsSyncing(true);
    try {
      const userRef = ref(db, `users/${uid}`);
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const data = snapshot.val();

        // Merge Logic: We prioritize Cloud data, but if we had local data before login,
        // a smarter merge might be needed. For now, Cloud overwrites Local to ensure consistency.
        if (data.wrongQuestionIds) {
          setWrongQuestionIds(data.wrongQuestionIds);
          localStorage.setItem(
            "ai900_wrong_ids",
            JSON.stringify(data.wrongQuestionIds)
          );
        }
        if (data.progress) {
          setSavedProgress(data.progress);
          localStorage.setItem(
            "ai900_practice_progress",
            JSON.stringify(data.progress)
          );
        }
      }
      setDataLoadedFromCloud(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsSyncing(false);
    }
  };

  // 3. Save Data to Cloud (Auto-sync)
  // Triggered whenever wrongQuestionIds or savedProgress changes
  useEffect(() => {
    if (user && dataLoadedFromCloud) {
      const saveData = async () => {
        setIsSyncing(true);
        try {
          const userRef = ref(db, `users/${user.uid}`);
          await set(userRef, {
            wrongQuestionIds,
            progress: savedProgress,
            lastUpdated: new Date().toISOString(),
          });
        } catch (error) {
          console.error("Error saving data:", error);
        } finally {
          setIsSyncing(false);
        }
      };

      // Simple debounce
      const timeoutId = setTimeout(saveData, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [wrongQuestionIds, savedProgress, user, dataLoadedFromCloud]);

  // Handle Login
  const handleGoogleLogin = async () => {
    setLoginError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error("Login failed:", error);

      const currentDomain = getSafeDomain();
      let msg = "An unknown error occurred during login.";

      // Check for specific error codes
      if (
        error.code === "auth/unauthorized-domain" ||
        (error.message && error.message.includes("auth/unauthorized-domain"))
      ) {
        msg = `Access Denied: The domain "${currentDomain}" is not authorized for this Firebase project.\n\nPlease go to Firebase Console -> Authentication -> Settings -> Authorized Domains and add this domain.`;
      } else if (error.code === "auth/popup-closed-by-user") {
        msg = "Login cancelled: The popup was closed before sign-in completed.";
      } else if (error.code === "auth/popup-blocked") {
        msg = "Popup blocked: Please allow popups for this site to sign in.";
      } else {
        msg = `Login failed: ${error.message || error.code}`;
      }

      setLoginError(msg);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMode("menu");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Load wrong questions & saved progress from LOCAL storage on init
  useEffect(() => {
    const savedWrong = localStorage.getItem("ai900_wrong_ids");
    if (savedWrong) {
      setWrongQuestionIds(JSON.parse(savedWrong));
    }

    const savedProg = localStorage.getItem("ai900_practice_progress");
    if (savedProg) {
      try {
        setSavedProgress(JSON.parse(savedProg));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ai900_wrong_ids", JSON.stringify(wrongQuestionIds));
  }, [wrongQuestionIds]);

  // Save progress locally
  useEffect(() => {
    if (mode === "practice" && activeQuestions.length > 0) {
      const progress = {
        currentIndex,
        userAnswers,
        checkedQuestions,
      };
      localStorage.setItem("ai900_practice_progress", JSON.stringify(progress));
      setSavedProgress(progress);
    }
  }, [mode, currentIndex, userAnswers, checkedQuestions, activeQuestions]);

  // Reset drag source when changing questions to prevent sticky selection
  useEffect(() => {
    setDragSource(null);
  }, [currentIndex]);

  const handleStartPractice = (resume = false) => {
    setActiveQuestions([...questions]);

    if (resume && savedProgress) {
      // Resume logic
      setMode("practice");
      // Ensure index is within bounds in case data changed
      const safeIndex =
        savedProgress.currentIndex < questions.length
          ? savedProgress.currentIndex
          : 0;
      setCurrentIndex(safeIndex);
      setUserAnswers(savedProgress.userAnswers || {});
      setCheckedQuestions(savedProgress.checkedQuestions || {});
    } else {
      // Start new
      localStorage.removeItem("ai900_practice_progress");
      setSavedProgress(null);
      resetQuiz("practice");
    }
  };

  const handleStartTest = () => {
    // 1. Deduplicate questions from source to ensure variety
    const distinctQuestions = deduplicateQuestions(questions);

    // 2. Shuffle the questions
    const shuffledQs = shuffleArray(distinctQuestions);

    // 3. Select 50 questions
    const selectedQs = shuffledQs.slice(0, 50);

    // 4. Randomize options for Single/Multiple choice questions within the test
    const finalTestQs = selectedQs.map(randomizeQuestionOptions);

    setActiveQuestions(finalTestQs);
    resetQuiz("test");
  };

  const handleOpenWrongBook = () => {
    // Check if we have progress for the wrong book (optional feature: resume wrong book)
    const wrongQs = questions.filter((q) => wrongQuestionIds.includes(q.id));
    setActiveQuestions(wrongQs);

    // Check if we have a saved index for notebook in local storage
    const savedNotebookProgress = localStorage.getItem(
      "ai900_notebook_progress"
    );
    let startIndex = 0;

    if (savedNotebookProgress) {
      try {
        const parsed = JSON.parse(savedNotebookProgress);
        // Verify if the current list of wrong questions still matches roughly or just clamp index
        if (parsed.currentIndex < wrongQs.length) {
          startIndex = parsed.currentIndex;
        }
      } catch (e) {}
    }

    resetQuiz("wrong-book");
    setCurrentIndex(startIndex);
  };

  // Effect to save Notebook progress
  useEffect(() => {
    if (mode === "wrong-book" && activeQuestions.length > 0) {
      localStorage.setItem(
        "ai900_notebook_progress",
        JSON.stringify({ currentIndex })
      );
    }
  }, [mode, currentIndex, activeQuestions]);

  const resetQuiz = (newMode: AppMode) => {
    setCurrentIndex(0);
    setUserAnswers({});
    setCheckedQuestions({});
    setShowResults(false);
    setMode(newMode);
  };

  const handleBackToMenu = () => {
    setMode("menu");
  };

  const handleRemoveFromWrongBook = (id: number) => {
    setWrongQuestionIds((prev) => prev.filter((qid) => qid !== id));
  };

  // --- Answer Checking Logic ---

  const checkAnswer = (question: Question, answer: any): boolean => {
    if (!answer) return false;

    if (question.type === "single") {
      const selectedLetter = (answer as string).charAt(0);
      return selectedLetter === question.correctAnswer;
    }

    if (question.type === "multiple") {
      const selected = answer as string[];
      const correct = question.correctAnswer as string[];
      if (selected.length !== correct.length) return false;
      const selectedLetters = selected.map((s) => s.charAt(0)).sort();
      const correctLetters = [...correct].sort();
      return selectedLetters.every(
        (val, index) => val === correctLetters[index]
      );
    }

    if (question.type === "yes-no") {
      const userArr = answer as string[];
      const correctArr = question.correctAnswer as string[];
      if (userArr.length !== correctArr.length) return false;
      return userArr.every((val, idx) => val === correctArr[idx]);
    }

    if (question.type === "dropdown") {
      const userObj = answer as Record<string, string>;
      const correctObj = question.correctAnswer as Record<string, string>;
      return Object.keys(correctObj).every(
        (key) => userObj[key] === correctObj[key]
      );
    }

    if (question.type === "drag-drop") {
      const userObj = answer as Record<string, string>; // rightIndex -> leftIndex
      const correctObj = question.correctAnswer as Record<string, string>;

      // Ensure all targets in correctObj match the user's selection
      return Object.keys(correctObj).every(
        (key) => userObj[key] === correctObj[key]
      );
    }

    return false;
  };

  const handleCheck = () => {
    const q = activeQuestions[currentIndex];
    setCheckedQuestions((prev) => ({ ...prev, [q.id]: true }));

    const isCorrect = checkAnswer(q, userAnswers[q.id]);
    if (!isCorrect && mode === "practice") {
      if (!wrongQuestionIds.includes(q.id)) {
        setWrongQuestionIds((prev) => [...prev, q.id]);
      }
    }
  };

  const calculateScore = () => {
    let correct = 0;
    activeQuestions.forEach((q) => {
      if (checkAnswer(q, userAnswers[q.id])) {
        correct++;
      }
    });
    return correct;
  };

  // --- Question Rendering Components ---

  const renderTableData = (q: Question) => {
    if (!q.tableData) return null;
    return (
      <div className="overflow-x-auto mb-6 border rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              {q.tableData.headers.map((header, idx) => (
                <th key={idx} className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {q.tableData.rows.map((row, rIdx) => (
              <tr key={rIdx} className="bg-white border-b last:border-none">
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderSingleChoice = (q: Question, isFeedbackMode: boolean) => {
    return (
      <div className="space-y-3">
        {q.options?.map((option, idx) => {
          const letter = option.charAt(0);
          const isSelected = userAnswers[q.id] === option;

          let styles =
            "border-slate-200 hover:border-blue-300 hover:bg-slate-50";
          if (isFeedbackMode) {
            if (letter === q.correctAnswer)
              styles =
                "bg-emerald-50 border-emerald-200 text-emerald-900 ring-1 ring-emerald-500";
            else if (isSelected)
              styles =
                "bg-rose-50 border-rose-200 text-rose-900 ring-1 ring-rose-500";
            else styles = "opacity-50 border-slate-200";
          } else if (isSelected) {
            styles =
              "bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500 text-blue-900";
          }

          return (
            <button
              key={idx}
              onClick={() => {
                if (isFeedbackMode) return;
                setUserAnswers((prev) => ({ ...prev, [q.id]: option }));
                // Allow immediate feedback in Practice Mode OR Wrong Book Mode
                if (
                  (mode === "practice" || mode === "wrong-book") &&
                  !checkedQuestions[q.id]
                ) {
                  setTimeout(() => {
                    const isCorrect = letter === q.correctAnswer;
                    if (
                      mode === "practice" &&
                      !isCorrect &&
                      !wrongQuestionIds.includes(q.id)
                    ) {
                      setWrongQuestionIds((prev) => [...prev, q.id]);
                    }
                    setCheckedQuestions((prev) => ({ ...prev, [q.id]: true }));
                  }, 0);
                }
              }}
              disabled={isFeedbackMode}
              className={`w-full text-left p-4 rounded-lg border-2 flex items-start gap-3 transition-all duration-200 ${styles}`}
            >
              <div className="shrink-0 mt-0.5 font-bold">{letter}.</div>
              <span className="text-sm md:text-base">
                {option.substring(3)}
              </span>
            </button>
          );
        })}
      </div>
    );
  };

  const renderMultipleChoice = (q: Question, isFeedbackMode: boolean) => {
    const currentAns: string[] = userAnswers[q.id] || [];

    const toggleOption = (option: string) => {
      if (isFeedbackMode) return;
      const letter = option.charAt(0);
      let newAns = [...currentAns];
      if (newAns.includes(option)) {
        newAns = newAns.filter((o) => o !== option);
      } else {
        newAns.push(option);
      }
      setUserAnswers((prev) => ({ ...prev, [q.id]: newAns }));
    };

    return (
      <div className="space-y-3">
        <p className="text-sm text-slate-500 italic mb-2">
          Select all that apply
        </p>
        {q.options?.map((option, idx) => {
          const letter = option.charAt(0);
          const isSelected = currentAns.includes(option);
          const isCorrectAnswer = (q.correctAnswer as string[]).includes(
            letter
          );

          let styles =
            "border-slate-200 hover:border-blue-300 hover:bg-slate-50";
          if (isFeedbackMode) {
            if (isCorrectAnswer)
              styles =
                "bg-emerald-50 border-emerald-200 text-emerald-900 ring-1 ring-emerald-500";
            else if (isSelected)
              styles =
                "bg-rose-50 border-rose-200 text-rose-900 ring-1 ring-rose-500";
            else styles = "opacity-50 border-slate-200";
          } else if (isSelected) {
            styles =
              "bg-blue-50 border-blue-500 shadow-sm ring-1 ring-blue-500 text-blue-900";
          }

          return (
            <button
              key={idx}
              onClick={() => toggleOption(option)}
              disabled={isFeedbackMode}
              className={`w-full text-left p-4 rounded-lg border-2 flex items-start gap-3 transition-all duration-200 ${styles}`}
            >
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center ${
                  isSelected
                    ? "bg-blue-500 border-blue-500"
                    : "border-slate-300 bg-white"
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className="text-sm md:text-base">{option}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const renderYesNo = (q: Question, isFeedbackMode: boolean) => {
    const currentAns: string[] =
      userAnswers[q.id] || Array(q.statements?.length).fill(null);

    const handleSelect = (idx: number, val: string) => {
      if (isFeedbackMode) return;
      const newAns = [...currentAns];
      newAns[idx] = val;
      setUserAnswers((prev) => ({ ...prev, [q.id]: newAns }));
    };

    return (
      <div className="border rounded-xl overflow-hidden">
        <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] bg-slate-100 p-3 text-sm font-semibold text-slate-600 border-b">
          <div>Statement</div>
          <div className="text-center">Yes</div>
          <div className="text-center">No</div>
        </div>
        {q.statements?.map((stmt, idx) => {
          const selected = currentAns[idx];
          const correct = (q.correctAnswer as string[])[idx];
          const isCorrectRow = selected === correct;

          let rowBg = "bg-white";
          if (isFeedbackMode) {
            rowBg = isCorrectRow ? "bg-emerald-50" : "bg-rose-50";
          }

          return (
            <div
              key={idx}
              className={`grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px] p-4 border-b last:border-0 items-center gap-2 ${rowBg}`}
            >
              <div className="text-sm text-slate-800">{stmt}</div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleSelect(idx, "Yes")}
                  disabled={isFeedbackMode}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selected === "Yes"
                      ? "border-blue-600 bg-blue-600"
                      : "border-slate-300"
                  }`}
                >
                  {selected === "Yes" && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleSelect(idx, "No")}
                  disabled={isFeedbackMode}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selected === "No"
                      ? "border-blue-600 bg-blue-600"
                      : "border-slate-300"
                  }`}
                >
                  {selected === "No" && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderDropdown = (q: Question, isFeedbackMode: boolean) => {
    const currentAns: Record<string, string> = userAnswers[q.id] || {};

    const handleChange = (key: string, val: string) => {
      if (isFeedbackMode) return;
      setUserAnswers((prev) => ({
        ...prev,
        [q.id]: { ...currentAns, [key]: val },
      }));
    };

    const textToProcess = q.dropdownText || q.text;
    const parts = textToProcess?.split(/(\{\d+\})/) || [];

    return (
      <div className="text-lg leading-relaxed text-slate-800">
        {parts.map((part, idx) => {
          const match = part.match(/\{(\d+)\}/);
          if (match) {
            const key = match[1];
            const options = q.dropdownOptions?.[key] || [];
            const selected = currentAns[key] || "";
            const correct = (q.correctAnswer as Record<string, string>)[key];

            let style = "border-slate-300 bg-slate-50";
            if (isFeedbackMode) {
              style =
                selected === correct
                  ? "border-emerald-500 bg-emerald-100 text-emerald-900 font-medium"
                  : "border-rose-500 bg-rose-100 text-rose-900 font-medium";
            }

            return (
              <select
                key={idx}
                value={selected}
                onChange={(e) => handleChange(key, e.target.value)}
                disabled={isFeedbackMode}
                className={`mx-2 py-1 px-3 rounded border-2 outline-none focus:border-blue-500 text-base ${style}`}
              >
                <option value="" disabled>
                  Select...
                </option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            );
          }
          return <span key={idx}>{part}</span>;
        })}
      </div>
    );
  };

  const renderDragDrop = (q: Question, isFeedbackMode: boolean) => {
    const currentAns: Record<string, string> = userAnswers[q.id] || {};

    const handleTargetClick = (targetIdx: number) => {
      if (isFeedbackMode) return;

      // Feature: Allow unselecting/changing
      if (dragSource) {
        // Place new item
        setUserAnswers((prev) => {
          const existingAnswers = prev[q.id] || {};
          return {
            ...prev,
            [q.id]: { ...existingAnswers, [targetIdx.toString()]: dragSource },
          };
        });
        setDragSource(null);
      } else {
        // Clear existing item if clicked
        const existingVal = currentAns[targetIdx.toString()];
        if (existingVal) {
          setUserAnswers((prev) => {
            const existingAnswers = { ...(prev[q.id] || {}) };
            delete existingAnswers[targetIdx.toString()];
            return {
              ...prev,
              [q.id]: existingAnswers,
            };
          });
        }
      }
    };

    const handleSourceClick = (sourceIdx: string) => {
      if (isFeedbackMode) return;
      setDragSource(sourceIdx === dragSource ? null : sourceIdx);
    };

    // Track usage count for each source item
    const sourceUsageCount: Record<string, number> = {};
    Object.values(currentAns).forEach((idxStr) => {
      sourceUsageCount[idxStr] = (sourceUsageCount[idxStr] || 0) + 1;
    });

    return (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Source Items
          </h4>
          {q.matchLeft?.map((item, idx) => {
            const idxStr = idx.toString();
            const usageCount = sourceUsageCount[idxStr] || 0;
            const isSelected = dragSource === idxStr;

            return (
              <button
                key={idx}
                onClick={() => handleSourceClick(idxStr)}
                disabled={isFeedbackMode}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all flex items-center justify-between gap-3
                                ${
                                  isSelected
                                    ? "border-blue-600 bg-blue-50 ring-2 ring-blue-200"
                                    : usageCount > 0
                                    ? "border-blue-200 bg-blue-50/50 hover:border-blue-400"
                                    : "bg-white border-slate-200 hover:border-blue-400"
                                }
                            `}
              >
                <div className="flex items-center gap-3">
                  <GripVertical
                    className={`w-4 h-4 ${
                      isSelected ? "text-blue-600" : "text-slate-400"
                    }`}
                  />
                  <span
                    className={`text-sm md:text-base ${
                      isSelected
                        ? "text-blue-900 font-medium"
                        : "text-slate-700"
                    }`}
                  >
                    {item}
                  </span>
                </div>

                {usageCount > 0 && (
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    x{usageCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Targets
          </h4>
          {q.matchRight?.map((item, idx) => {
            const sourceIdx = currentAns[idx.toString()];
            const sourceText = sourceIdx
              ? q.matchLeft?.[parseInt(sourceIdx)]
              : null;
            const correctSourceIdx = (
              q.correctAnswer as Record<string, string>
            )[idx.toString()];

            let style = "border-slate-200 bg-slate-50 border-dashed";
            if (sourceText) style = "border-blue-200 bg-white border-solid";

            // Highlight drop target when dragging
            if (dragSource && !isFeedbackMode) {
              style = "border-blue-400 bg-blue-50 border-dashed";
            }

            if (isFeedbackMode) {
              if (sourceIdx === correctSourceIdx)
                style = "border-emerald-500 bg-emerald-50";
              else if (sourceIdx) style = "border-rose-500 bg-rose-50";
            }

            return (
              <div
                key={idx}
                onClick={() => handleTargetClick(idx)}
                className={`p-4 rounded-lg border-2 min-h-[80px] flex flex-col justify-center cursor-pointer transition-all relative group ${style}`}
              >
                <p className="text-sm text-slate-500 mb-1">{item}</p>
                {sourceText ? (
                  <div className="font-medium text-blue-900 bg-blue-100 px-2 py-1 rounded inline-block self-start pr-8 relative">
                    {sourceText}
                    {!isFeedbackMode && (
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-600">
                        <X className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-xs text-slate-400 italic">
                    {dragSource
                      ? "Click to drop here"
                      : "Select source & click here"}
                  </span>
                )}

                {isFeedbackMode && sourceIdx !== correctSourceIdx && (
                  <div className="mt-2 text-xs text-emerald-600 font-medium">
                    Correct: {q.matchLeft?.[parseInt(correctSourceIdx)]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const currentQ = activeQuestions[currentIndex];

  const isPractice = mode === "practice";
  const isWrongBook = mode === "wrong-book";
  const isTest = mode === "test";

  // Calculate score and percentage for Test mode results
  const score = calculateScore();
  const percentage =
    activeQuestions.length > 0
      ? Math.round((score / activeQuestions.length) * 100)
      : 0;

  const isFeedbackMode =
    (isPractice || isWrongBook) &&
    (!!checkedQuestions[currentQ?.id] ||
      (currentQ?.type === "single" && !!userAnswers[currentQ.id]));
  const isCorrectAnswer =
    currentQ &&
    isFeedbackMode &&
    checkAnswer(currentQ, userAnswers[currentQ.id]);

  // Filter incorrect questions for test review
  const incorrectQuestions =
    mode === "test" && showResults
      ? activeQuestions.filter((q) => !checkAnswer(q, userAnswers[q.id]))
      : [];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative">
      {/* Global Error Modal */}
      {loginError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                  <AlertCircle className="h-5 w-5 text-rose-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900">
                    Sign In Issue
                  </h3>
                  <div className="mt-2 text-sm text-slate-600">
                    <p className="whitespace-pre-wrap">{loginError}</p>
                  </div>

                  {loginError.includes("Authorized Domains") && (
                    <div className="mt-4">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Copy this domain
                      </label>
                      <div className="mt-1 relative">
                        <div className="bg-slate-100 border border-slate-200 rounded-lg max-h-32 overflow-y-auto p-3">
                          <code className="text-xs font-mono text-slate-800 break-all select-all whitespace-pre-wrap block">
                            {getSafeDomain()}
                          </code>
                        </div>
                        <div className="mt-2 text-xs text-slate-500">
                          Make sure to copy the exact domain shown above.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-4 flex justify-end">
              <Button onClick={() => setLoginError(null)}>Dismiss</Button>
            </div>
          </div>
        </div>
      )}

      {mode === "menu" ? (
        <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 relative w-full">
          <div className="absolute top-4 right-4 flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border border-slate-200 shadow-sm">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-blue-600" />
                  </div>
                )}
                <div className="text-xs text-left">
                  <div className="font-semibold text-slate-700">
                    {user.displayName || "User"}
                  </div>
                  <div className="text-slate-400 flex items-center gap-1">
                    {isSyncing ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <Cloud className="w-3 h-3" />
                    )}
                    {isSyncing ? "Syncing..." : "Synced"}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-2 text-slate-400 hover:text-rose-600 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 bg-white px-4 py-2 rounded-lg border border-slate-200 hover:border-blue-300 transition-all shadow-sm group"
              >
                <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                  <UserIcon className="w-2.5 h-2.5" />
                </div>
                Sign in to Sync
              </button>
            )}
          </div>

          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BrainCircuit className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                AI-900 Master
              </h1>
              <p className="mt-2 text-slate-600">
                Ace your Microsoft AI Fundamentals Exam
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-0 hover:shadow-md transition-shadow cursor-pointer group overflow-hidden">
                <div
                  className="p-5 flex items-center gap-4"
                  onClick={() => handleStartPractice(!!savedProgress)}
                >
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
                    <BookOpen className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-slate-900">
                      {savedProgress
                        ? `Continue Practice`
                        : "Sequential Practice"}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {savedProgress
                        ? `Resume at question ${
                            savedProgress.currentIndex + 1
                          } of ${questions.length}`
                        : `Go through ${questions.length} questions in order.`}
                    </p>
                  </div>
                  <ChevronRight className="ml-auto text-slate-400" />
                </div>
                {savedProgress && (
                  <div className="bg-slate-50 px-5 py-2 border-t border-slate-100 flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (
                          confirm(
                            "Restarting will lose your current progress. Continue?"
                          )
                        ) {
                          handleStartPractice(false);
                        }
                      }}
                      className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center gap-1 px-2 py-1 rounded hover:bg-rose-50 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" /> Restart Practice
                    </button>
                  </div>
                )}
              </Card>

              <Card className="p-1 hover:shadow-md transition-shadow cursor-pointer group">
                <button
                  onClick={handleStartTest}
                  className="w-full p-5 text-left flex items-center gap-4"
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Play className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Mock Test</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Random 50 questions with shuffled options. No duplicates.
                    </p>
                  </div>
                  <ChevronRight className="ml-auto text-slate-400" />
                </button>
              </Card>

              <Card className="p-1 hover:shadow-md transition-shadow cursor-pointer group">
                <button
                  onClick={handleOpenWrongBook}
                  className="w-full p-5 text-left flex items-center gap-4"
                  disabled={wrongQuestionIds.length === 0}
                >
                  <div
                    className={`h-12 w-12 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      wrongQuestionIds.length === 0
                        ? "bg-slate-100"
                        : "bg-rose-100 group-hover:bg-rose-200"
                    }`}
                  >
                    <BookX
                      className={`h-6 w-6 ${
                        wrongQuestionIds.length === 0
                          ? "text-slate-400"
                          : "text-rose-700"
                      }`}
                    />
                  </div>
                  <div
                    className={
                      wrongQuestionIds.length === 0 ? "opacity-50" : ""
                    }
                  >
                    <h3 className="font-semibold text-slate-900">
                      Wrong Answer Notebook
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {wrongQuestionIds.length === 0
                        ? "No wrong answers recorded yet."
                        : `Review ${wrongQuestionIds.length} questions you missed.`}
                    </p>
                  </div>
                  {wrongQuestionIds.length > 0 && (
                    <div className="ml-auto bg-rose-100 text-rose-700 text-xs font-bold px-2 py-1 rounded-full">
                      {wrongQuestionIds.length}
                    </div>
                  )}
                </button>
              </Card>
            </div>

            <div className="text-center text-xs text-slate-400 pt-8">
              Designed for Microsoft AI-900 Exam Preparation
            </div>
          </div>
        </div>
      ) : mode === "test" && showResults ? (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 w-full overflow-y-auto">
          <div className="max-w-3xl w-full mx-auto space-y-6 pb-12">
            <div className="flex justify-start">
              <Button variant="secondary" onClick={handleBackToMenu}>
                <ArrowLeft className="w-4 h-4" /> Back to Menu
              </Button>
            </div>

            <Card className="p-8 text-center space-y-6 bg-white border-t-8 border-t-blue-500">
              <div className="mx-auto h-24 w-24 bg-blue-50 rounded-full flex items-center justify-center">
                <Trophy className="h-12 w-12 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Test Complete!
                </h2>
                <p className="text-slate-600 mt-2">Here is how you performed</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-b border-slate-100 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    {activeQuestions.length}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">
                    Total Questions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {score}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">
                    Correct
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold ${
                      percentage >= 70 ? "text-blue-600" : "text-rose-600"
                    }`}
                  >
                    {percentage}%
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">
                    Score
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button onClick={handleStartTest}>Retake Test</Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    const newWrongIds: number[] = [];
                    activeQuestions.forEach((q) => {
                      if (!checkAnswer(q, userAnswers[q.id])) {
                        if (!wrongQuestionIds.includes(q.id))
                          newWrongIds.push(q.id);
                      }
                    });
                    if (newWrongIds.length > 0) {
                      setWrongQuestionIds((prev) => [...prev, ...newWrongIds]);
                      alert(
                        `Added ${newWrongIds.length} incorrect answers to your notebook.`
                      );
                    }
                    handleBackToMenu();
                  }}
                >
                  Save Mistakes & Exit
                </Button>
              </div>
            </Card>

            {/* Detailed Wrong Answer Review */}
            {incorrectQuestions.length > 0 && (
              <div className="space-y-6 mt-8">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-rose-500" />
                  Review Incorrect Answers ({incorrectQuestions.length})
                </h3>

                {incorrectQuestions.map((q, idx) => (
                  <Card key={q.id} className="p-6 border-l-4 border-rose-500">
                    <div className="flex justify-between items-start mb-4">
                      <Badge color="red">
                        Question {activeQuestions.indexOf(q) + 1}
                      </Badge>
                      <span className="text-xs text-slate-400">ID: {q.id}</span>
                    </div>

                    <h4 className="text-lg font-medium text-slate-800 mb-6">
                      {q.text}
                    </h4>
                    {renderTableData(q)}

                    {/* Render the actual question interactive component in feedback mode so users can see option text */}
                    <div className="mb-6 pointer-events-none opacity-90">
                      {q.type === "single" && renderSingleChoice(q, true)}
                      {q.type === "multiple" && renderMultipleChoice(q, true)}
                      {q.type === "yes-no" && renderYesNo(q, true)}
                      {q.type === "dropdown" && renderDropdown(q, true)}
                      {q.type === "drag-drop" && renderDragDrop(q, true)}
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 text-sm leading-relaxed text-slate-700">
                      <span className="font-bold block text-slate-900 mb-1">
                        Explanation:
                      </span>
                      {q.explanation}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : activeQuestions.length === 0 ? (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 w-full">
          <div className="text-center">
            <p className="text-slate-500 mb-4">No questions available.</p>
            <Button onClick={handleBackToMenu}>Go Back</Button>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleBackToMenu}
                  className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="font-semibold text-slate-900 truncate max-w-[150px] sm:max-w-none">
                  {isPractice && "Practice Mode"}
                  {isTest && "Mock Test"}
                  {isWrongBook && "Notebook"}
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    Progress
                  </span>
                  <span className="text-sm font-bold text-slate-700">
                    {currentIndex + 1} / {activeQuestions.length}
                  </span>
                </div>
                <div className="w-24 sm:w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-500"
                    style={{
                      width: `${
                        ((currentIndex + 1) / activeQuestions.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 space-y-6">
            {/* Question Card */}
            <Card className="p-6 md:p-8">
              <div className="flex justify-between items-start gap-4 mb-6">
                <div className="flex gap-2">
                  <Badge color="blue">{currentQ.topic}</Badge>
                  {currentQ.type !== "single" && (
                    <Badge color="orange">
                      {currentQ.type.toUpperCase().replace("-", " ")}
                    </Badge>
                  )}
                </div>
                {isWrongBook && (
                  <button
                    onClick={() => handleRemoveFromWrongBook(currentQ.id)}
                    className="text-xs text-rose-600 hover:text-rose-800 font-medium flex items-center gap-1 px-2 py-1 bg-rose-50 rounded"
                  >
                    <Check className="w-3 h-3" /> Mastered
                  </button>
                )}
              </div>

              {renderTableData(currentQ)}

              {(currentQ.type !== "dropdown" || !!currentQ.dropdownText) && (
                <h2 className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
                  {currentQ.text}
                </h2>
              )}

              {currentQ.type === "single" &&
                renderSingleChoice(currentQ, isFeedbackMode)}
              {currentQ.type === "multiple" &&
                renderMultipleChoice(currentQ, isFeedbackMode)}
              {currentQ.type === "yes-no" &&
                renderYesNo(currentQ, isFeedbackMode)}
              {currentQ.type === "dropdown" &&
                renderDropdown(currentQ, isFeedbackMode)}
              {currentQ.type === "drag-drop" &&
                renderDragDrop(currentQ, isFeedbackMode)}

              {/* Check Button for complex types in Practice/WrongBook */}
              {!isTest && currentQ.type !== "single" && !isFeedbackMode && (
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleCheck}>Check Answer</Button>
                </div>
              )}
            </Card>

            {/* Feedback Card */}
            {isFeedbackMode && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div
                  className={`rounded-xl p-6 border-l-4 shadow-sm ${
                    isCorrectAnswer
                      ? "bg-emerald-50 border-emerald-500"
                      : "bg-white border-rose-500"
                  }`}
                >
                  <h3
                    className={`font-bold text-lg flex items-center gap-2 mb-2 ${
                      isCorrectAnswer ? "text-emerald-800" : "text-rose-800"
                    }`}
                  >
                    {isCorrectAnswer ? (
                      <>
                        <CheckCircle2 className="w-6 h-6" /> Correct!
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-6 h-6" /> Incorrect
                      </>
                    )}
                  </h3>
                  <div className="text-slate-700 leading-relaxed">
                    <span className="font-semibold block text-sm text-slate-500 uppercase mb-1">
                      Explanation
                    </span>
                    {currentQ.explanation}
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Footer Controls */}
          <footer className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-20">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentIndex((prev) => Math.max(0, prev - 1));
                }}
                disabled={currentIndex === 0}
              >
                Previous
              </Button>

              <div className="text-sm text-slate-400 hidden sm:block">
                {isTest && (
                  <span>
                    Answered: {Object.keys(userAnswers).length}/
                    {activeQuestions.length}
                  </span>
                )}
              </div>

              {currentIndex === activeQuestions.length - 1 ? (
                isTest ? (
                  <Button
                    onClick={() => setShowResults(true)}
                    variant="success"
                  >
                    Submit Test
                  </Button>
                ) : (
                  <Button onClick={handleBackToMenu} variant="secondary">
                    Finish
                  </Button>
                )
              ) : (
                <Button
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      Math.min(activeQuestions.length - 1, prev + 1)
                    )
                  }
                >
                  Next Question <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </footer>
        </>
      )}

      {/* Render Test Result Mode Helper: Calculate score for test mode rendering above */}
      {/* Note: The rendering logic above handles the modes. This block just ensures variables like score/percentage are available if needed, but they are calculated inside the render block. */}
      {(() => {
        // Helper to calculate score for the test result view which is rendered inside the ternary above
        if (mode === "test" && showResults) {
          // Score logic is duplicated visually in the JSX above, but the function calculateScore exists in scope.
        }
        return null;
      })()}
    </div>
  );
}
