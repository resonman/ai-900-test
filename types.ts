
export type QuestionType = 'single' | 'multiple' | 'yes-no' | 'drag-drop' | 'dropdown';

export interface Question {
  id: number;
  topic: string;
  type: QuestionType;
  text: string;
  explanation: string;
  
  // Single/Multiple Choice
  options?: string[];
  
  // Yes/No (Hotspot)
  statements?: string[];
  
  // Drag & Drop (Matching)
  matchLeft?: string[];  // Items to drag (e.g., "Anomaly Detection")
  matchRight?: string[]; // Targets/Scenarios (e.g., "Detect credit card fraud")
  
  // Dropdown (Hotspot)
  dropdownText?: string; // Text with placeholders like {0}, {1}
  dropdownOptions?: Record<string, string[]>; // keys "0", "1" -> array of options
  
  // Table Data (optional for any question type)
  tableData?: {
    headers: string[];
    rows: string[][];
  };

  // Correct Answers
  correctAnswer: any; 
  // single: "A" (string)
  // multiple: ["A", "C"] (string[])
  // yes-no: ["Yes", "No", "Yes"] (string[]) matching statements index
  // drag-drop: { "0": "1", "1": "0" } (Record<sourceIndex, targetIndex>) - maps Right side index to Left side index (or vice versa)
  // dropdown: { "0": "Option A", "1": "Option B" } (Record<placeholderIndex, correctOption>)
}

export type AppMode = 'menu' | 'practice' | 'test' | 'wrong-book';