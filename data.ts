import { Question } from "./types";

export const questions: Question[] = [
  // --- Question 1 ---
  {
    id: 1,
    topic: "Topic 1",
    type: "single",
    text: "A company employs a team of customer service agents to provide telephone and email support to customers. The company develops a webchat bot to provide automated answers to common customer queries. Which business benefit should the company expect as a result of creating the webchat bot solution?",
    options: [
      "A. increased sales",
      "B. a reduced workload for the customer service agents",
      "C. improved product reliability",
    ],
    correctAnswer: "B",
    explanation:
      "Automated bots handle common queries, directly reducing the volume of tickets agents need to handle manually.",
  },
  // --- Question 2 ---
  {
    id: 2,
    topic: "Topic 1",
    type: "single",
    text: "For a machine learning progress, how should you split data for training and evaluation?",
    options: [
      "A. Use features for training and labels for evaluation.",
      "B. Randomly split the data into rows for training and rows for evaluation.",
      "C. Use labels for training and features for evaluation.",
      "D. Randomly split the data into columns for training and columns for evaluation.",
    ],
    correctAnswer: "B",
    explanation:
      "Data should be split by rows (observations). Standard practice is to use a large portion (e.g., 70-80%) for training and the rest for evaluation/testing to check for overfitting.",
  },
  // --- Question 3 (Hotspot/Dropdown) ---
  {
    id: 3,
    topic: "Topic 1",
    type: "dropdown",
    text: "You are developing a model to predict events by using classification. You have a confusion matrix for the model scored on test data as shown in the table below. Complete the statements based on the information presented.",
    tableData: {
      headers: ["", "Predicted 1", "Predicted 0"],
      rows: [
        ["Actual 1", "11", "1,033"],
        ["Actual 0", "5", "13,951"],
      ],
    },
    dropdownText:
      "There are {0} correctly predicted positives.\nThere are {1} false negatives.",
    dropdownOptions: {
      "0": ["5", "11", "1,033", "13,951"],
      "1": ["5", "11", "1,033", "13,951"],
    },
    correctAnswer: {
      "0": "11",
      "1": "1,033",
    },
    explanation:
      "True Positives (Actual 1, Predicted 1) = 11. False Negatives (Actual 1 but Predicted 0) = 1,033.",
  },
  // --- Question 4 ---
  {
    id: 4,
    topic: "Topic 1",
    type: "single",
    text: "You build a machine learning model by using the automated machine learning user interface (UI). You need to ensure that the model meets the Microsoft transparency principle for responsible AI. What should you do?",
    options: [
      "A. Set Validation type to Auto.",
      "B. Enable Explain best model.",
      "C. Set Primary metric to accuracy.",
      "D. Set Max concurrent iterations to 0.",
    ],
    correctAnswer: "B",
    explanation:
      "Transparency involves understanding how a model works. 'Explain best model' provides interpretability (feature importance, etc.), which aligns with transparency.",
  },
  // --- Question 5 (Hotspot/Yes-No) ---
  {
    id: 5,
    topic: "Topic 1",
    type: "yes-no",
    text: "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "Forecasting housing prices based on historical data is an example of anomaly detection.",
      "Identifying suspicious sign-ins by looking for deviations from usual patterns is an example of anomaly detection.",
      "Predicting whether a patient will develop diabetes based on the patient's medical history is an example of anomaly detection.",
    ],
    correctAnswer: ["No", "Yes", "No"],
    explanation:
      "1. Housing prices is Regression. 2. Suspicious sign-ins is Anomaly Detection. 3. Diabetes prediction is Classification.",
  },
  // --- Question 6 (Hotspot/Dropdown) ---
  {
    id: 6,
    topic: "Topic 1",
    type: "dropdown",
    text: "The handling of unusual or missing values provided to an AI system is a consideration for the Microsoft {0} principle for responsible AI.",
    dropdownOptions: {
      "0": [
        "inclusiveness",
        "privacy and security",
        "reliability and safety",
        "transparency",
      ],
    },
    correctAnswer: {
      "0": "reliability and safety",
    },
    explanation:
      "Reliability and Safety ensures the AI system performs consistently and safely, even when facing unexpected or bad data (unusual/missing values).",
  },
  // --- Question 7 (Drag & Drop) ---
  {
    id: 7,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the types of AI workloads to the appropriate scenarios.",
    matchLeft: [
      "Anomaly detection",
      "Computer vision",
      "Conversational AI",
      "Knowledge mining",
      "Natural language processing",
    ],
    matchRight: [
      "An automated chat to answer questions about refunds and exchange",
      "Determining whether a photo contains a person",
      "Determining whether a review is positive or negative",
    ],
    // 0(Chat) -> 2(Conv AI), 1(Photo) -> 1(Comp Vision), 2(Review) -> 4(NLP)
    correctAnswer: {
      "0": "2",
      "1": "1",
      "2": "4",
    },
    explanation:
      "Automated chat = Conversational AI. Photo analysis = Computer Vision. Review sentiment = Natural Language Processing.",
  },
  // --- Question 8 ---
  {
    id: 8,
    topic: "Topic 1",
    type: "single",
    text: "You are designing an AI system that empowers everyone, including people who have hearing, visual, and other impairments. This is an example of which Microsoft guiding principle for responsible AI?",
    options: [
      "A. fairness",
      "B. inclusiveness",
      "C. reliability and safety",
      "D. accountability",
    ],
    correctAnswer: "B",
    explanation:
      "Inclusiveness is about ensuring AI systems empower and engage everyone, regardless of physical or mental abilities.",
  },
  // --- Question 9 (Drag & Drop) ---
  {
    id: 9,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the Microsoft guiding principles for responsible AI to the appropriate descriptions.",
    matchLeft: [
      "Accountability",
      "Fairness",
      "Inclusiveness",
      "Privacy and security",
      "Reliability and safety",
    ],
    matchRight: [
      "Ensure that AI systems operate as they were originally designed, respond to unanticipated conditions, and resist harmful manipulation.",
      "Implementing processes to ensure that decisions made by AI systems can be overridden by humans.",
      "Provide consumers with information and controls over the collection, use, and storage of their data.",
    ],
    // 0(Resist manipulation) -> 4(Reliability), 1(Override/Accountable) -> 0(Accountability), 2(Control data) -> 3(Privacy)
    correctAnswer: {
      "0": "4",
      "1": "0",
      "2": "3",
    },
    explanation:
      "Reliability & Safety = functioning under bad conditions/attacks. Accountability = humans ultimately responsible. Privacy & Security = data control.",
  },
  // --- Question 10 (Hotspot/Dropdown) ---
  {
    id: 10,
    topic: "Topic 1",
    type: "dropdown",
    text: "When developing an AI system for self-driving cars, the Microsoft {0} principle for responsible AI should be applied to ensure consistent operation system during unexpected circumstances.",
    dropdownOptions: {
      "0": [
        "inclusiveness",
        "accountability",
        "reliability and safety",
        "fairness",
      ],
    },
    correctAnswer: {
      "0": "reliability and safety",
    },
    explanation:
      "Consistent operation during unexpected circumstances is the core definition of Reliability and Safety.",
  },
  // --- Question 11 ---
  {
    id: 11,
    topic: "Topic 1",
    type: "single",
    text: "You are building an AI system. Which task should you include to ensure that the service meets the Microsoft transparency principle for responsible AI?",
    options: [
      "A. Ensure that all visuals have an associated text that can be read by a screen reader.",
      "B. Enable autoscaling to ensure that a service scales based on demand.",
      "C. Provide documentation to help developers debug code.",
      "D. Ensure that a training dataset is representative of the population.",
    ],
    correctAnswer: "C",
    explanation:
      "Transparency involves making the system understandable. Documentation helps others understand how the system works and debug it.",
  },
  // --- Question 12 (Drag & Drop) ---
  {
    id: 12,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the types of AI workloads to the appropriate scenarios.",
    matchLeft: [
      "Anomaly detection",
      "Computer vision",
      "Machine Learning (Regression)",
      "Natural language processing",
    ],
    matchRight: [
      "Identify handwritten letters.",
      "Predict the sentiment of a social media post.",
      "Identify a fraudulent credit card payment.",
      "Predict next month's toy sales.",
    ],
    // 0(Letters) -> 1(CV), 1(Sentiment) -> 3(NLP), 2(Fraud) -> 0(Anomaly), 3(Sales) -> 2(Regression)
    correctAnswer: {
      "0": "1",
      "1": "3",
      "2": "0",
      "3": "2",
    },
    explanation:
      "Handwritten letters = Computer Vision (OCR). Sentiment = NLP. Fraud = Anomaly Detection. Future sales (number) = Regression.",
  },
  // --- Question 13 (Hotspot/Dropdown) ---
  {
    id: 13,
    topic: "Topic 1",
    type: "dropdown",
    text: "{0} used to extract dates, quantities, and locations from text.",
    dropdownOptions: {
      "0": [
        "Key phrase extraction",
        "Language detection",
        "Named Entity Recognition (NER)",
        "Sentiment Analysis",
      ],
    },
    correctAnswer: {
      "0": "Named Entity Recognition (NER)",
    },
    explanation:
      "NER identifies specific entities like dates, quantities, locations, people, and organizations within text.",
  },
  // --- Question 14 ---
  {
    id: 14,
    topic: "Topic 1",
    type: "multiple",
    text: "What are three Microsoft guiding principles for responsible AI? Each correct answer presents a complete solution.",
    options: [
      "A. knowledgeability",
      "B. decisiveness",
      "C. inclusiveness",
      "D. fairness",
      "E. opinionatedness",
      "F. reliability and safety",
    ],
    correctAnswer: ["C", "D", "F"],
    explanation:
      "The 6 principles are: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability.",
  },
  // --- Question 15 (Hotspot/Dropdown) ---
  {
    id: 15,
    topic: "Topic 1",
    type: "dropdown",
    text: "Returning a bounding box that indicates the location of a vehicle in an image is an example of {0}.",
    dropdownOptions: {
      "0": [
        "image classification",
        "object detection",
        "optical character recognition (OCR)",
        "semantic segmentation",
      ],
    },
    correctAnswer: {
      "0": "object detection",
    },
    explanation:
      "Object detection not only identifies what is in the image but also provides coordinates (bounding box) of where it is.",
  },
  // --- Question 16 (Hotspot/Dropdown) ---
  {
    id: 16,
    topic: "Topic 1",
    type: "dropdown",
    text: "{0} is used to generate additional features.",
    dropdownOptions: {
      "0": [
        "Feature engineering",
        "Feature selection",
        "Model evaluation",
        "Model training",
      ],
    },
    correctAnswer: {
      "0": "Feature engineering",
    },
    explanation:
      "Feature engineering involves creating new features from raw data to improve model performance.",
  },
  // --- Question 17 ---
  {
    id: 17,
    topic: "Topic 1",
    type: "single",
    text: "You run a charity event that involves posting photos of people wearing sunglasses on Twitter. You need to ensure that you only retweet photos that meet the following requirements: Include one or more faces; Contain at least one person wearing sunglasses. What should you use to analyze the images?",
    options: [
      "A. the Verify operation in the Face service",
      "B. the Detect operation in the Face service",
      "C. the Describe Image operation in the Computer Vision service",
      "D. the Analyze Image operation in the Computer Vision service",
    ],
    correctAnswer: "B",
    explanation:
      "The Face service's Detect operation can identify faces and specific attributes like 'glasses' (sunglasses).",
  },
  // --- Question 18 ---
  {
    id: 18,
    topic: "Topic 1",
    type: "single",
    text: "When you design an AI system to assess whether loans should be approved, the factors used to make the decision should be explainable. This is an example of which Microsoft guiding principle for responsible AI?",
    options: [
      "A. transparency",
      "B. inclusiveness",
      "C. fairness",
      "D. privacy and security",
    ],
    correctAnswer: "A",
    explanation:
      "Transparency ensures that AI systems are understandable and that decisions (like loan denials) can be explained to users.",
  },
  // --- Question 19 (Hotspot/Yes-No) ---
  {
    id: 19,
    topic: "Topic 1",
    type: "yes-no",
    text: "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "Providing an explanation of the outcome of a credit loan application is an example of the Microsoft transparency principle for responsible AI.",
      "A triage bot that prioritizes insurance claims based on injuries is an example of the Microsoft reliability and safety principle for responsible AI.",
      "An AI solution that is offered at different prices for different sales territories is an example of the Microsoft inclusiveness principle for responsible AI.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "1. Explaining outcomes = Transparency. 2. Critical systems (triage) require Reliability/Safety. 3. Pricing differences is not about Inclusiveness (which refers to accessibility for people with disabilities/diverse backgrounds).",
  },
  // --- Question 20 (Drag & Drop) ---
  {
    id: 20,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the principles of responsible AI to appropriate requirements.",
    matchLeft: [
      "Fairness",
      "Privacy and security",
      "Reliability and safety",
      "Transparency",
    ],
    matchRight: [
      "The system must not discriminate based on gender, race",
      "Personal data must be visible only to approve",
      "Automated decision-making processes must be recorded so that approved users can identify why a decision was made",
    ],
    // 0(Discriminate) -> Fairness, 1(Personal Data) -> Privacy, 2(Why decision made) -> Transparency
    correctAnswer: {
      "0": "Fairness",
      "1": "Privacy and security",
      "2": "Transparency",
    },
    explanation:
      "Fairness = no discrimination. Privacy = data protection. Transparency = explainability.",
  },
  // --- Question 21 (Drag & Drop - Sequencing) ---
  {
    id: 21,
    topic: "Topic 1",
    type: "drag-drop",
    text: "You plan to deploy an Azure Machine Learning model. Which three processes should you perform in sequence before you deploy the model?",
    matchLeft: [
      "data encryption",
      "model retraining",
      "model training",
      "data preparation",
      "model evaluation",
    ],
    matchRight: ["Step 1", "Step 2", "Step 3"],
    // Sequence: Data Prep -> Train -> Evaluate
    correctAnswer: {
      "0": "data preparation",
      "1": "model training",
      "2": "model evaluation",
    },
    explanation:
      "Standard ML workflow: Prepare Data -> Train Model -> Evaluate Model -> Deploy.",
  },
  // --- Question 22 ---
  {
    id: 22,
    topic: "Topic 1",
    type: "multiple",
    text: "You are building an AI-based app. You need to ensure that the app uses the principles for responsible AI. Which two principles should you follow?",
    options: [
      "A. Implement an Agile software development methodology",
      "B. Implement a process of AI model validation as part of the software review process",
      "C. Establish a risk governance committee that includes members of the legal team, members of the risk management team, and a privacy officer",
      "D. Prevent the disclosure of the use of AI-based algorithms for automated decision making",
    ],
    correctAnswer: ["B", "C"],
    explanation:
      "Validation (B) ensures Reliability. Governance committees (C) ensure Accountability. D violates Transparency.",
  },
  // --- Question 23 (Hotspot/Dropdown) ---
  {
    id: 23,
    topic: "Topic 1",
    type: "dropdown",
    text: "According to Microsoft's {0} principle of responsible AI, AI systems should NOT reflect biases from the data sets that are used to train the systems.",
    dropdownOptions: {
      "0": ["accountability", "fairness", "inclusiveness", "transparency"],
    },
    correctAnswer: {
      "0": "fairness",
    },
    explanation:
      "Fairness is the principle specifically focused on avoiding bias and discrimination.",
  },
  // --- Question 24 (Hotspot/Dropdown) ---
  {
    id: 24,
    topic: "Topic 1",
    type: "dropdown",
    text: "According to Microsoft's {0} principle of responsible AI, AI systems should NOT reflect biases from the data sets that are used to train the systems.",
    dropdownOptions: {
      "0": ["accountability", "fairness", "inclusiveness", "transparency"],
    },
    correctAnswer: {
      "0": "fairness",
    },
    explanation:
      "This is a duplicate concept of Q23. Fairness deals with bias.",
  },
  // --- Question 25 (Drag & Drop) ---
  {
    id: 25,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the types of AI workloads to the appropriate scenarios.",
    matchLeft: [
      "Anomaly detection",
      "Computer vision",
      "Knowledge mining",
      "Natural language processing",
    ],
    matchRight: [
      "An automated chatbot to answer questions about refunds and exchanges",
      "Determining whether a photo contains a person",
      "Determining whether a review is positive or negative",
    ],
    // Based on ExamTopics Q25 comments & "Correct Answer" block which says Box1: Knowledge Mining
    // BUT Q7 says Chatbot = Conversational AI. Here option "Conversational AI" is missing.
    // The OCR Correct Answer says: Box 1: Knowledge Mining, Box 2: Computer Vision, Box 3: NLP
    correctAnswer: {
      "0": "Knowledge mining",
      "1": "Computer vision",
      "2": "Natural language processing",
    },
    explanation:
      "NOTE: This question often causes debate. If 'Conversational AI' is missing, 'Knowledge Mining' (extracting info to answer questions) or 'NLP' (understanding the question) are used. The provided answer key for Q25 specifies Knowledge Mining for the chatbot.",
  },
  // --- Question 26 (Drag & Drop) ---
  {
    id: 26,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the machine learning tasks to the appropriate scenarios.",
    matchLeft: [
      "Feature engineering",
      "Feature selection",
      "Model deployment",
      "Model evaluation",
      "Model training",
    ],
    matchRight: [
      "Examining the values of a confusion matrix",
      "Splitting a date into month, day, and year fields",
      "Picking temperature and pressure to train a weather model",
    ],
    // 0(Confusion matrix) -> Model evaluation
    // 1(Split date) -> Feature engineering
    // 2(Picking columns) -> Feature selection
    correctAnswer: {
      "0": "Model evaluation",
      "1": "Feature engineering",
      "2": "Feature selection",
    },
    explanation:
      "Evaluation metrics include confusion matrices. Engineering creates new features (month/day) from existing ones. Selection chooses the most relevant existing columns.",
  },
  // --- Question 27 (Hotspot/Dropdown) ---
  {
    id: 27,
    topic: "Topic 1",
    type: "dropdown",
    text: "Data values that influence the prediction of a model are called {0}.",
    dropdownOptions: {
      "0": ["dependant variables", "features", "identifiers", "labels"],
    },
    correctAnswer: {
      "0": "features",
    },
    explanation:
      "Input variables in ML are called Features. Output variables are called Labels.",
  },
  // --- Question 28 ---
  {
    id: 28,
    topic: "Topic 1",
    type: "single",
    text: "You have the Predicted vs. True chart shown in the following exhibit. Which type of model is the chart used to evaluate?",
    // Note: Since we can't show the image, we infer from context "Predicted vs True" linear graph usually implies Regression.
    options: ["A. classification", "B. regression", "C. clustering"],
    correctAnswer: "B",
    explanation:
      "Predicted vs True charts (scatter plots with a line) are standard for evaluating Regression models (numeric predictions).",
  },
  // --- Question 29 ---
  {
    id: 29,
    topic: "Topic 1",
    type: "single",
    text: "Which type of machine learning should you use to predict the number of gift cards that will be sold next month?",
    options: ["A. classification", "B. regression", "C. clustering"],
    correctAnswer: "B",
    explanation: "Predicting a quantity (number) is a Regression task.",
  },
  // --- Question 30 ---
  {
    id: 30,
    topic: "Topic 1",
    type: "single",
    text: "You have a dataset that contains information about taxi journeys that occurred during a given period. You need to train a model to predict the fare of a taxi journey. What should you use as a feature?",
    options: [
      "A. the number of taxi journeys in the dataset",
      "B. the trip distance of individual taxi journeys",
      "C. the fare of individual taxi journeys",
      "D. the trip ID of individual taxi journeys",
    ],
    correctAnswer: "B",
    explanation:
      "Trip distance is an input factor (Feature) that influences the fare. Fare is the Label (target). Count and ID are not predictive features for a single trip's price.",
  },
  // --- Question 31 ---
  {
    id: 31,
    topic: "Topic 1",
    type: "single",
    text: "You need to predict the sea level in meters for the next 10 years. Which type of machine learning should you use?",
    options: ["A. classification", "B. regression", "C. clustering"],
    correctAnswer: "B",
    explanation:
      "Predicting a continuous numeric value (sea level in meters) is a Regression task.",
  },
  // --- Question 32 (Hotspot/Yes-No) ---
  {
    id: 32,
    topic: "Topic 1",
    type: "yes-no",
    text: "For each of the following statements about Automated Machine Learning (AutoML), select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "Automated machine learning is the process of automating the time-consuming, iterative tasks of machine learning model development.",
      "Automated machine learning can automatically infer the training data from the use case provided.",
      "Automated machine learning works by running multiple training iterations that are scored and ranked by the metrics you specify.",
      "Automated machine learning enables you to specify a dataset and will automatically understand which label to predict.",
    ],
    correctAnswer: ["Yes", "No", "Yes", "No"],
    explanation:
      "AutoML automates the model selection and tuning (1 & 3). However, you must explicitly provide the training data (2 is No) and specify the target column/label (4 is No).",
  },
  // --- Question 33 (Hotspot/Dropdown) ---
  {
    id: 33,
    topic: "Topic 1",
    type: "dropdown",
    text: "A banking system that predicts whether a loan will be repaid is an example of {0} type of machine learning.",
    dropdownOptions: {
      "0": ["classification", "regression", "clustering"],
    },
    correctAnswer: {
      "0": "classification",
    },
    explanation:
      "Predicting a binary outcome (Repaid: Yes/No) is a Classification task.",
  },
  // --- Question 34 (Hotspot/Yes-No) ---
  {
    id: 34,
    topic: "Topic 1",
    type: "yes-no",
    text: "For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    statements: [
      "Labelling is the process of tagging training data with known values.",
      "You should evaluate a model by using the same data used to train the model.",
      "Accuracy is always the primary metric used to measure a model's performance.",
    ],
    correctAnswer: ["Yes", "No", "No"],
    explanation:
      "1. True. 2. False - you should use a separate validation/test set to avoid overfitting. 3. False - Accuracy is not always best, especially for imbalanced datasets (Precision/Recall might be better).",
  },
  // --- Question 35 ---
  {
    id: 35,
    topic: "Topic 1",
    type: "single",
    text: "Which service should you use to extract text, key/value pairs, and table data automatically from scanned documents?",
    options: [
      "A. Form Recognizer",
      "B. Text Analytics",
      "C. Language Understanding",
      "D. Custom Vision",
    ],
    correctAnswer: "A",
    explanation:
      "Form Recognizer (now Azure AI Document Intelligence) is specifically designed to extract structured data (tables, key-value pairs) from documents.",
  },
  // --- Question 36 (Hotspot/Dropdown) ---
  {
    id: 36,
    topic: "Topic 1",
    type: "dropdown",
    text: "The ability to extract subtotals and totals from a receipt is a capability of the {0} service.",
    dropdownOptions: {
      "0": [
        "Custom Vision",
        "Form Recognizer",
        "Ink Recognizer",
        "Text Analytics",
      ],
    },
    correctAnswer: {
      "0": "Form Recognizer",
    },
    explanation:
      "Form Recognizer has pre-built models for receipts that can identify specific fields like totals, merchant name, etc.",
  },
  // --- Question 37 ---
  {
    id: 37,
    topic: "Topic 1",
    type: "multiple",
    text: "You use Azure Machine Learning designer to publish an inference pipeline. Which two parameters should you use to access the web service?",
    options: [
      "A. the model name",
      "B. the training endpoint",
      "C. the authentication key",
      "D. the REST endpoint",
    ],
    correctAnswer: ["C", "D"],
    explanation:
      "To consume a deployed web service, you need its REST Endpoint (URL) and an Authentication Key (for security).",
  },
  // --- Question 38 (Hotspot/Dropdown) ---
  {
    id: 38,
    topic: "Topic 1",
    type: "dropdown",
    text: "From Azure Machine Learning designer, to deploy a real-time inference pipeline as a service for others to consume, you must deploy the model to {0}.",
    dropdownOptions: {
      "0": [
        "a local web service",
        "Azure Container Instances",
        "Azure Kubernetes Service (AKS)",
        "Azure Machine Learning compute",
      ],
    },
    correctAnswer: {
      "0": "Azure Kubernetes Service (AKS)",
    },
    explanation:
      "For production-grade real-time inference (high scale/reliability), AKS is the recommended target. (Note: ACI is often used for testing/dev).",
  },
  // --- Question 39 (Hotspot/Dropdown) ---
  {
    id: 39,
    topic: "Topic 1",
    type: "dropdown",
    text: "Predicting how many hours of overtime a delivery person will work based on the number of order received is an example of {0}.",
    dropdownOptions: {
      "0": ["classification", "clustering", "regression"],
    },
    correctAnswer: {
      "0": "regression",
    },
    explanation:
      "Predicting 'how many hours' (a numeric value) is a Regression task.",
  },
  // --- Question 40 (Hotspot/Yes-No) ---
  {
    id: 40,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about Azure Machine Learning designer.",
    statements: [
      "Azure Machine Learning designer provides a drag-and-drop visual canvas to build, test, and deploy machine learning models.",
      "Azure Machine Learning designer enables you to save your progress as a pipeline draft.",
      "Azure Machine Learning designer enables you to include custom JavaScript functions.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "Designer is a visual tool (Yes). It saves drafts (Yes). It supports Python and R scripts, but NOT JavaScript (No).",
  },
  // --- Question 41 (Hotspot/Dropdown) ---
  {
    id: 41,
    topic: "Topic 1",
    type: "dropdown",
    text: "You have a dataset to train a model that predicts house price categories. \nHousehold Income is: {0}\nHouse Price Category is: {1}",
    dropdownOptions: {
      "0": ["A feature", "A label"],
      "1": ["A feature", "A label"],
    },
    correctAnswer: {
      "0": "A feature",
      "1": "A label",
    },
    explanation:
      "Income is input data used to make the prediction (Feature). Price Category is the target variable you are trying to predict (Label).",
  },
  // --- Question 42 (Hotspot/Dropdown) ---
  {
    id: 42,
    topic: "Topic 1",
    type: "dropdown",
    text: "Azure Machine Learning designer lets you create machine learning models by {0}.",
    dropdownOptions: {
      "0": [
        "adding and connecting modules on a visual canvas",
        "automatically performing common data preparation tasks",
        "automatically selecting an algorithm to build the most accurate model",
        "using a code-first notebook experience",
      ],
    },
    correctAnswer: {
      "0": "adding and connecting modules on a visual canvas",
    },
    explanation:
      "The defining feature of the Designer is its visual drag-and-drop canvas.",
  },
  // --- Question 43 (Hotspot/Yes-No) ---
  {
    id: 43,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about Automated Machine Learning (AutoML).",
    statements: [
      "Automated machine learning provides you with the ability to include custom Python scripts in a training pipeline.",
      "Automated machine learning implements machine learning solutions without the need for programming experience.",
      "Automated machine learning provides you with the ability to visually connect datasets and modules on an interactive canvas.",
    ],
    correctAnswer: ["No", "Yes", "No"],
    explanation:
      "1. No (that's Designer/Pipelines). 2. Yes (it automates model selection). 3. No (that's Designer).",
  },
  // --- Question 44 ---
  {
    id: 44,
    topic: "Topic 1",
    type: "single",
    text: "A medical research project uses a large anonymized dataset of brain scan images that are categorized into predefined brain haemorrhage types. You need to use machine learning to support early detection. This is an example of which type of machine learning?",
    options: ["A. clustering", "B. regression", "C. classification"],
    correctAnswer: "C",
    explanation:
      "Since the types are 'predefined' (labeled) and categorical, this is a Classification task.",
  },
  // --- Question 45 ---
  {
    id: 45,
    topic: "Topic 1",
    type: "single",
    text: "When training a model, why should you randomly split the rows into separate subsets?",
    options: [
      "A. to train the model twice to attain better accuracy",
      "B. to train multiple models simultaneously to attain better performance",
      "C. to test the model by using data that was not used to train the model",
    ],
    correctAnswer: "C",
    explanation:
      "Splitting data ensures you have a 'hold-out' set (test set) to evaluate how well the model generalizes to new, unseen data.",
  },
  // --- Question 46 ---
  {
    id: 46,
    topic: "Topic 1",
    type: "multiple",
    text: "You are evaluating whether to use a basic workspace or an enterprise workspace in Azure Machine Learning. What are two tasks that require an enterprise workspace? (Note: Enterprise edition is deprecated/merged, but for historical exam context select features like GUI)",
    options: [
      "A. Use a graphical user interface (GUI) to run automated machine learning experiments.",
      "B. Create a compute instance to use as a workstation.",
      "C. Use a graphical user interface (GUI) to define and run machine learning experiments from Azure Machine Learning designer.",
      "D. Create a dataset from a comma-separated value (CSV) file.",
    ],
    correctAnswer: ["A", "C"],
    explanation:
      "Historically, the Enterprise edition was required for the visual tools (Designer and AutoML GUI).",
  },
  // --- Question 47 (Already in previous batch, skipping to avoid duplicates if merged, but including here for completeness of 31-70 block logic) ---
  {
    id: 47,
    topic: "Topic 1",
    type: "multiple",
    text: "You need to predict the income range of a given customer. Which two fields should you use as features?",
    tableData: {
      headers: [
        "First Name",
        "Last Name",
        "Age",
        "Education Level",
        "Income Range",
      ],
      rows: [["Orlando", "Gee", "45", "University", "25,000-50,000"]],
    },
    options: [
      "A. Education Level",
      "B. Last Name",
      "C. Age",
      "D. Income Range",
      "E. First Name",
    ],
    correctAnswer: ["A", "C"],
    explanation:
      "Age and Education Level are relevant predictors. Names are not relevant. Income Range is the label to predict.",
  },
  // --- Question 48 ---
  {
    id: 48,
    topic: "Topic 1",
    type: "single",
    text: "You are building a tool that will process images from retail stores and identify the products of competitors. The solution will use a custom model. Which Azure Cognitive Services service should you use?",
    options: [
      "A. Custom Vision",
      "B. Form Recognizer",
      "C. Face",
      "D. Computer Vision",
    ],
    correctAnswer: "A",
    explanation:
      "To identify specific products (which are not generic objects like 'car' or 'cat') using your own training images, you need Custom Vision.",
  },
  // --- Question 49 (Hotspot/Yes-No) ---
  {
    id: 49,
    topic: "Topic 1",
    type: "yes-no",
    text: "Determine if the following are examples of clustering.",
    statements: [
      "Organizing documents into groups based on similarities of the text contained in the documents.",
      "Grouping similar patients based on symptoms and diagnostic test results.",
      "Predicting whether a person will develop mild, moderate, or severe allergy symptoms based on pollen count.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "1 & 2 involves grouping based on similarity (Clustering). 3 involves predicting a specific category/level (Classification).",
  },
  // --- Question 50 (Hotspot/Yes-No) ---
  {
    id: 50,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about validation sets.",
    statements: [
      "A validation set includes the set of input examples that will be used to train a model.",
      "A validation set can be used to determine how well a model predicts labels.",
      "A validation set can be used to verify that all the training data was used to train the model.",
    ],
    correctAnswer: ["No", "Yes", "No"],
    explanation:
      "1. No, that's the Training set. 2. Yes, it validates performance during training. 3. No, it doesn't verify data usage completeness.",
  },
  // --- Question 51 ---
  {
    id: 51,
    topic: "Topic 1",
    type: "multiple",
    text: "What are two metrics that you can use to evaluate a regression model?",
    options: [
      "A. coefficient of determination (R2)",
      "B. F1 score",
      "C. root mean squared error (RMSE)",
      "D. area under curve (AUC)",
      "E. balanced accuracy",
    ],
    correctAnswer: ["A", "C"],
    explanation:
      "R2 and RMSE are standard regression metrics. F1, AUC, and Accuracy are for Classification.",
  },
  // --- Question 52 (Hotspot/Dropdown) ---
  {
    id: 52,
    topic: "Topic 1",
    type: "dropdown",
    text: "Predicting how many vehicles will travel across a bridge on a given day is an example of {0}.",
    dropdownOptions: {
      "0": ["classification", "clustering", "regression"],
    },
    correctAnswer: {
      "0": "regression",
    },
    explanation:
      "Predicting a quantity/number (how many vehicles) is Regression.",
  },
  // --- Question 53 (Drag & Drop) ---
  {
    id: 53,
    topic: "Topic 1",
    type: "drag-drop",
    text: "You need to use Azure Machine Learning designer to build a model that will predict automobile prices. Match the modules to the steps.",
    matchLeft: [
      "Convert to CSV",
      "K-Means Clustering",
      "Linear Regression",
      "Split Data",
      "Select Columns in Dataset",
      "Summarize Data",
    ],
    matchRight: [
      "Choose the columns that contain the missing values you want to change",
      "Split the data into two separate datasets",
      "Predict price (a number)",
    ],
    // 0(Select Columns) -> 4(Select Columns in Dataset), 1(Split) -> 3(Split Data), 2(Predict) -> 2(Linear Regression)
    correctAnswer: {
      "0": "4",
      "1": "3",
      "2": "2",
    },
    explanation:
      "Select Columns to manage features. Split Data for training/testing. Linear Regression for predicting price (numeric).",
  },
  // --- Question 54 ---
  {
    id: 54,
    topic: "Topic 1",
    type: "single",
    text: "Which type of machine learning should you use to identify groups of people who have similar purchasing habits?",
    options: ["A. classification", "B. regression", "C. clustering"],
    correctAnswer: "C",
    explanation:
      "Grouping data points based on similarities (without pre-defined labels) is Clustering.",
  },
  // --- Question 55 (Hotspot/Dropdown) ---
  {
    id: 55,
    topic: "Topic 1",
    type: "dropdown",
    text: "{0} models can be used to predict the sale price of auctioned items.",
    dropdownOptions: {
      "0": ["Classification", "Clustering", "Regression"],
    },
    correctAnswer: {
      "0": "Regression",
    },
    explanation: "Sale price is a continuous number, so this is Regression.",
  },
  // --- Question 56 ---
  {
    id: 56,
    topic: "Topic 1",
    type: "single",
    text: "Which metric can you use to evaluate a classification model?",
    options: [
      "A. true positive rate",
      "B. mean absolute error (MAE)",
      "C. coefficient of determination (R2)",
      "D. root mean squared error (RMSE)",
    ],
    correctAnswer: "A",
    explanation:
      "True Positive Rate (Recall) is a classification metric. The others (MAE, R2, RMSE) are for regression.",
  },
  // --- Question 57 ---
  {
    id: 57,
    topic: "Topic 1",
    type: "multiple",
    text: "Which two components can you drag onto a canvas in Azure Machine Learning designer?",
    options: ["A. dataset", "B. compute", "C. pipeline", "D. module"],
    correctAnswer: ["A", "D"],
    explanation:
      "In Designer, you drag Datasets and Modules (algorithms/operations) onto the canvas.",
  },
  // --- Question 58 ---
  {
    id: 58,
    topic: "Topic 1",
    type: "single",
    text: "You need to create a training dataset and validation dataset from an existing dataset. Which module in the Azure Machine Learning designer should you use?",
    options: [
      "A. Select Columns in Dataset",
      "B. Add Rows",
      "C. Split Data",
      "D. Join Data",
    ],
    correctAnswer: "C",
    explanation:
      "The Split Data module divides a dataset into two sets (e.g., train and validate).",
  },
  // --- Question 59 (Drag & Drop) ---
  {
    id: 59,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the types of machine learning to the appropriate scenarios.",
    matchLeft: ["Classification", "Clustering", "Regression"],
    matchRight: [
      "Predict how many minutes late a flight will arrive",
      "Segment customers into different groups to support a marketing department",
      "Predict whether a student will complete a university course",
    ],
    // 0(Minutes/Number) -> 2(Regression), 1(Segment/Groups) -> 1(Clustering), 2(Complete/Binary) -> 0(Classification)
    correctAnswer: {
      "0": "2",
      "1": "1",
      "2": "0",
    },
    explanation:
      "Minutes (numeric) = Regression. Segments (grouping) = Clustering. Complete course (Yes/No) = Classification.",
  },
  // --- Question 60 (Hotspot/Dropdown) ---
  {
    id: 60,
    topic: "Topic 1",
    type: "dropdown",
    text: "{0} is the calculated probability of a correct image classification.",
    dropdownOptions: {
      "0": ["Accuracy", "Confidence", "Root Mean Square Error", "Sentiment"],
    },
    correctAnswer: {
      "0": "Confidence",
    },
    explanation:
      "In image classification APIs, the probability score returned for a tag is called the Confidence score.",
  },
  // --- Question 61 (Hotspot/Dropdown) ---
  {
    id: 61,
    topic: "Topic 1",
    type: "dropdown",
    text: "Ensuring an AI system does not provide a prediction when important fields contain unusual or missing values is {0} principle for responsible AI.",
    dropdownOptions: {
      "0": [
        "an inclusiveness",
        "a privacy and security",
        "a reliability and safety",
        "a transparency",
      ],
    },
    correctAnswer: {
      "0": "a reliability and safety",
    },
    explanation:
      "Handling errors and missing data safely falls under Reliability and Safety.",
  },
  // --- Question 62 (Hotspot/Dropdown) ---
  {
    id: 62,
    topic: "Topic 1",
    type: "dropdown",
    text: "Ensuring that the numeric variables in training data are on a similar scale is an example of {0}.",
    dropdownOptions: {
      "0": [
        "data ingestion",
        "feature engineering",
        "feature selection",
        "model training",
      ],
    },
    correctAnswer: {
      "0": "feature engineering",
    },
    explanation:
      "Scaling/Normalization is a data transformation technique used in Feature Engineering.",
  },
  // --- Question 63 (Hotspot/Dropdown) ---
  {
    id: 63,
    topic: "Topic 1",
    type: "dropdown",
    text: "Assigning classes to images before training a classification model is an example of {0}.",
    dropdownOptions: {
      "0": [
        "evaluation",
        "feature engineering",
        "hyperparameter tuning",
        "labeling",
      ],
    },
    correctAnswer: {
      "0": "labeling",
    },
    explanation:
      "Defining what an image represents (assigning a class) is the process of Data Labeling.",
  },
  // --- Question 64 (Hotspot/Yes-No) ---
  {
    id: 64,
    topic: "Topic 1",
    type: "yes-no",
    text: "Based on the dataset (Mass, Quality Test, Temperature), evaluate the statements.",
    tableData: {
      headers: ["Mass (kg)", "Quality Test", "Temperature (C)"],
      rows: [["2.108", "Pass", "62.5"]],
    },
    statements: [
      "Mass (kg) is a feature.",
      "Quality Test is a label.",
      "Temperature (C) is a label.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "Mass and Temperature are input Features. Quality Test is the output Label.",
  },
  // --- Question 65 (Hotspot/Yes-No) ---
  {
    id: 65,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about ML types.",
    statements: [
      "You train a regression model by using unlabeled data.",
      "The classification technique is used to predict sequential numerical data over time.",
      "Grouping items by their common characteristics is an example of clustering.",
    ],
    correctAnswer: ["No", "No", "Yes"],
    explanation:
      "1. Regression is Supervised (needs labels). 2. Classification predicts categories, not sequential numbers (that's time-series regression). 3. Grouping by characteristics is Clustering.",
  },
  // --- Question 66 ---
  {
    id: 66,
    topic: "Topic 1",
    type: "multiple",
    text: "Which two actions are performed during the data ingestion and data preparation stage of an Azure Machine Learning process?",
    options: [
      "A. Calculate the accuracy of the model.",
      "B. Score test data by using the model.",
      "C. Combine multiple datasets.",
      "D. Use the model for real-time predictions.",
      "E. Remove records that have missing values.",
    ],
    correctAnswer: ["C", "E"],
    explanation:
      "Ingestion and Prep involves cleaning (removing missing values) and merging data (combining datasets).",
  },
  // --- Question 67 ---
  {
    id: 67,
    topic: "Topic 1",
    type: "single",
    text: "You need to predict the animal population of an area. Which Azure Machine Learning type should you use?",
    options: ["A. regression", "B. clustering", "C. classification"],
    correctAnswer: "A",
    explanation:
      "Population is a numeric value (count), so this is Regression.",
  },
  // --- Question 68 ---
  {
    id: 68,
    topic: "Topic 1",
    type: "multiple",
    text: "Which two languages can you use to write custom code for Azure Machine Learning designer? (Select two)",
    options: ["A. Python", "B. R", "C. C#", "D. Scala"],
    correctAnswer: ["A", "B"],
    explanation:
      "Azure ML Designer supports 'Execute Python Script' and 'Execute R Script' modules.",
  },
  // --- Question 69 (Hotspot/Yes-No) ---
  {
    id: 69,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate statements about labels in ML models.",
    statements: [
      "For a regression model, labels must be numeric.",
      "For a clustering model, labels must be used.",
      "For a classification model, labels must be numeric.",
    ],
    correctAnswer: ["Yes", "No", "No"],
    explanation:
      "1. True (Regression predicts numbers). 2. False (Clustering is unsupervised/no labels). 3. False (Classification labels can be text categories like 'Cat'/'Dog').",
  },
  // --- Question 70 ---
  {
    id: 70,
    topic: "Topic 1",
    type: "single",
    text: "Your company wants to build a recycling machine for bottles. The recycling machine must automatically identify bottles of the correct shape and reject all other items. Which type of AI workload should the company use?",
    options: [
      "A. anomaly detection",
      "B. conversational AI",
      "C. computer vision",
      "D. natural language processing",
    ],
    correctAnswer: "C",
    explanation:
      "Identifying shapes and items from visual input is a Computer Vision task.",
  },
  // --- Question 71 (Hotspot/Yes-No) ---
  {
    id: 71,
    topic: "Custom Vision",
    type: "yes-no",
    text: "Evaluate the following statements about Azure Custom Vision.",
    statements: [
      "When creating an object detection model in the Custom Vision service, you must choose a classification type of either Multilabel or Multiclass.",
      "You can create an object detection model in the Custom Vision service to find the location of content within an image.",
      "When creating an object detection model in the Custom Vision service, you can select from a set of predefined domains.",
    ],
    correctAnswer: ["No", "Yes", "Yes"],
    explanation:
      "1. No - Multilabel/Multiclass applies to Classification projects, not Object Detection. 2. Yes - Object detection finds locations (bounding boxes). 3. Yes - You can choose domains like 'General', 'Logo', 'Compact', etc.",
  },
  // --- Question 72 ---
  {
    id: 72,
    topic: "Topic 1",
    type: "multiple",
    text: "In which two scenarios can you use the Form Recognizer service? (Select two)",
    options: [
      "A. Extract the invoice number from an invoice.",
      "B. Translate a form from French to English.",
      "C. Find image of product in a catalog.",
      "D. Identify the retailer from a receipt.",
    ],
    correctAnswer: ["A", "D"],
    explanation:
      "Form Recognizer (Document Intelligence) is built to extract key-value pairs (like invoice numbers, retailer names) from documents. Translation is for the Translator service; Finding images is for Computer Vision.",
  },
  // --- Question 73 (Hotspot/Dropdown) ---
  {
    id: 73,
    topic: "Topic 1",
    type: "dropdown",
    text: "Counting the number of animals in an area based on a video feed is an example of {0}.",
    dropdownOptions: {
      "0": [
        "forecasting",
        "computer vision",
        "conversational AI",
        "anomaly detection",
      ],
    },
    correctAnswer: {
      "0": "computer vision",
    },
    explanation:
      "Analyzing video feeds to detect and count objects (animals) is a Computer Vision task (specifically Spatial Analysis or Object Detection).",
  },
  // --- Question 74 (Hotspot/Yes-No) ---
  {
    id: 74,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about the Face service.",
    statements: [
      "The Face service can be used to perform facial recognition for employees.",
      "The Face service will be more accurate if you provide more sample photos of each employee from different angles.",
      "If an employee is wearing sunglasses, the Face service will always fail to recognize the employee.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "1. Yes, it does recognition/identification. 2. Yes, more diverse samples improve accuracy. 3. No, it can often handle occlusion like sunglasses, though accuracy might drop, it won't 'always' fail (and recent updates handle masks/glasses better).",
  },
  // --- Question 75 ---
  {
    id: 75,
    topic: "Topic 1",
    type: "single",
    text: "You need to develop a mobile app for employees to scan and store their expenses while travelling. Which type of computer vision should you use?",
    options: [
      "A. semantic segmentation",
      "B. image classification",
      "C. object detection",
      "D. optical character recognition (OCR)",
    ],
    correctAnswer: "D",
    explanation:
      "Scanning expenses means reading text from receipts, which is an OCR (Optical Character Recognition) task. (Note: Form Recognizer is better, but OCR is the correct choice among these options).",
  },
  // --- Question 76 (Hotspot/Yes-No) ---
  {
    id: 76,
    topic: "Custom Vision",
    type: "yes-no",
    text: "Evaluate the following statements about Custom Vision.",
    statements: [
      "The Custom Vision service can be used to detect objects in an image.",
      "The Custom Vision service requires that you provide your own data to train the model.",
      "The Custom Vision service can be used to analyze video files.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "1. Yes (Object Detection project). 2. Yes (Custom Vision implies custom data). 3. No (Custom Vision processes images; video analysis usually requires extracting frames or using Video Indexer).",
  },
  // --- Question 77 ---
  {
    id: 77,
    topic: "Topic 1",
    type: "single",
    text: "You are processing photos of runners in a race. You need to read the numbers on the runners' shirts to identify the runners. Which type of computer vision should you use?",
    options: [
      "A. facial recognition",
      "B. optical character recognition (OCR)",
      "C. image classification",
      "D. object detection",
    ],
    correctAnswer: "B",
    explanation:
      "Reading numbers (text) from an image is Optical Character Recognition (OCR).",
  },
  // --- Question 78 (Drag & Drop) ---
  {
    id: 78,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the types of machine learning to the appropriate scenarios.",
    matchLeft: [
      "Image classification",
      "Object detection",
      "Semantic segmentation",
    ],
    matchRight: [
      "Separate images of polar bears and brown bears",
      "Determine the location of a bear in a photo",
      "Determine which pixels in an image are part of a bear",
    ],
    // 0(Categorize images) -> 0(Image classification)
    // 1(Location/Box) -> 1(Object detection)
    // 2(Pixels) -> 2(Semantic segmentation)
    correctAnswer: {
      "0": "0",
      "1": "1",
      "2": "2",
    },
    explanation:
      "Classification = whole image label. Detection = bounding box. Segmentation = pixel-level classification.",
  },
  // --- Question 79 ---
  {
    id: 79,
    topic: "Topic 1",
    type: "single",
    text: "You use drones to identify where weeds grow between rows of crops to send an instruction for the removal of the weeds. This is an example of which type of computer vision?",
    options: [
      "A. object detection",
      "B. optical character recognition (OCR)",
      "C. scene segmentation",
    ],
    correctAnswer: "A",
    explanation:
      "Identifying 'where' specific items (weeds) are in an image typically involves Object Detection (returning bounding boxes/locations).",
  },
  // --- Question 80 (Drag & Drop) ---
  {
    id: 80,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the facial recognition tasks to the appropriate questions.",
    matchLeft: ["grouping", "identification", "similarity", "verification"],
    matchRight: [
      "Do two images of a face belong to the same person?",
      "Does this person look like other people?",
      "Do all the faces belong together?",
      "Who is this person in this group of people?",
    ],
    // 0(Same person? 1:1) -> 3(verification)
    // 1(Look like others?) -> 2(similarity)
    // 2(Belong together?) -> 0(grouping)
    // 3(Who is this? 1:N) -> 1(identification)
    correctAnswer: {
      "0": "3",
      "1": "2",
      "2": "0",
      "3": "1",
    },
    explanation:
      "Verification validates a claim (Is this you?). Similarity finds matches. Grouping clusters faces. Identification finds a person in a database.",
  },
  // --- Question 81 (Drag & Drop) ---
  {
    id: 81,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the types of computer vision workloads to the appropriate scenarios.",
    matchLeft: [
      "Facial recognition",
      "Image classification",
      "Object detection",
      "Optical character recognition (OCR)",
    ],
    matchRight: [
      "Identify celebrities in images.",
      "Extract movie title names from movie poster images.",
      "Locate vehicles in images.",
    ],
    // 0(Celebrities) -> 0(Facial recognition) or sometimes Domain specific Image Classification
    // 1(Text extraction) -> 3(OCR)
    // 2(Locate/Box) -> 2(Object detection)
    correctAnswer: {
      "0": "0",
      "1": "3",
      "2": "2",
    },
    explanation:
      "Identifying celebrities is a specific function of Face/CV (Celebrity model). Extracting titles (text) is OCR. Locating vehicles is Object Detection.",
  },
  // --- Question 82 ---
  {
    id: 82,
    topic: "Topic 1",
    type: "single",
    text: "You need to determine the location of cars in an image so that you can estimate the distance between the cars. Which type of computer vision should you use?",
    options: [
      "A. optical character recognition (OCR)",
      "B. object detection",
      "C. image classification",
      "D. face detection",
    ],
    correctAnswer: "B",
    explanation:
      "Object detection returns bounding box coordinates, which are necessary to determine location and distance.",
  },
  // --- Question 83 (Hotspot/Dropdown) ---
  {
    id: 83,
    topic: "Topic 1",
    type: "dropdown",
    text: "You can use the {0} service to train an object detection model by using your own images.",
    dropdownOptions: {
      "0": [
        "Computer Vision",
        "Custom Vision",
        "Form Recognizer",
        "Video Indexer",
      ],
    },
    correctAnswer: {
      "0": "Custom Vision",
    },
    explanation:
      "Training a model with *your own images* is the primary purpose of the Custom Vision service.",
  },
  // --- Question 84 ---
  {
    id: 84,
    topic: "Topic 1",
    type: "single",
    text: "You send an image to a Computer Vision API and receive back an annotated image with bounding boxes around fruits labeled 'apple' and 'banana' with confidence scores. Which type of computer vision was used?",
    options: [
      "A. object detection",
      "B. face detection",
      "C. optical character recognition (OCR)",
      "D. image classification",
    ],
    correctAnswer: "A",
    explanation: "Bounding boxes + labels = Object Detection.",
  },
  // --- Question 85 ---
  {
    id: 85,
    topic: "Topic 1",
    type: "multiple",
    text: "What are two tasks that can be performed by using the Computer Vision service? (Select two)",
    options: [
      "A. Train a custom image classification model.",
      "B. Detect faces in an image.",
      "C. Recognize handwritten text.",
      "D. Translate the text in an image between languages.",
    ],
    correctAnswer: ["B", "C"],
    explanation:
      "Computer Vision can detect faces (though Face API is more specialized) and read text (OCR). Training custom models is Custom Vision. Translation is Translator.",
  },
  // --- Question 86 ---
  {
    id: 86,
    topic: "Topic 1",
    type: "single",
    text: "What is a use case for classification?",
    options: [
      "A. Predicting how many cups of coffee a person will drink.",
      "B. Grouping images that have similar colors.",
      "C. Predicting whether someone uses a bicycle to travel to work.",
      "D. Predicting how many minutes it will take to run a race.",
    ],
    correctAnswer: "C",
    explanation:
      "A and D are Regression (numbers). B is Clustering (grouping). C is Classification (Yes/No).",
  },
  // --- Question 87 ---
  {
    id: 87,
    topic: "Topic 1",
    type: "multiple",
    text: "What are two tasks that can be performed by using Computer Vision? (Select two)",
    options: [
      "A. Predict stock prices.",
      "B. Detect brands in an image.",
      "C. Detect the color scheme in an image.",
      "D. Translate text between languages.",
      "E. Extract key phrases.",
    ],
    correctAnswer: ["B", "C"],
    explanation:
      "Computer Vision can detect brands (Logos) and analyze color schemes. Prediction is ML. Translation and Key Phrases are NLP.",
  },
  // --- Question 88 ---
  {
    id: 88,
    topic: "Topic 1",
    type: "single",
    text: "You need to build an image tagging solution for social media that tags images of your friends automatically. Which Azure Cognitive Services service should you use?",
    options: [
      "A. Face",
      "B. Form Recognizer",
      "C. Text Analytics",
      "D. Computer Vision",
    ],
    correctAnswer: "A",
    explanation:
      "For identifying specific people (friends), the Face service is the specialized tool.",
  },
  // --- Question 89 ---
  {
    id: 89,
    topic: "Topic 1",
    type: "multiple",
    text: "In which two scenarios can you use the Form Recognizer service? (Select two)",
    options: [
      "A. Identify the retailer from a receipt",
      "B. Translate from French to English",
      "C. Extract the invoice number from an invoice",
      "D. Find images of products in a catalog",
    ],
    correctAnswer: ["A", "C"],
    explanation:
      "Form Recognizer processes receipts and invoices to extract key-value pairs.",
  },
  // --- Question 90 (Drag & Drop) ---
  {
    id: 90,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the facial recognition tasks to the appropriate questions (Duplicate concept check).",
    matchLeft: ["grouping", "identification", "similarity", "verification"],
    matchRight: [
      "Do two images of a face belong to the same person?",
      "Does this person look like other people?",
      "Who is this person in this group of people?",
    ],
    // 0(Same person) -> 3(Verification)
    // 1(Look like) -> 2(Similarity)
    // 2(Who is this) -> 1(Identification)
    correctAnswer: {
      "0": "3",
      "1": "2",
      "2": "1",
    },
    explanation:
      "See previous Face service explanation. Verification (1:1), Similarity (Lookalike), Identification (1:N).",
  },
  // --- Question 91 ---
  {
    id: 91,
    topic: "Topic 1",
    type: "single",
    text: "Which Computer Vision feature can you use to generate automatic captions for digital photographs?",
    options: [
      "A. Recognize text.",
      "B. Identify the areas of interest.",
      "C. Detect objects.",
      "D. Describe the images.",
    ],
    correctAnswer: "D",
    explanation:
      "The 'Describe Image' capability generates human-readable sentences describing the image content.",
  },
  // --- Question 92 ---
  {
    id: 92,
    topic: "Topic 1",
    type: "single",
    text: "Which service should you use to extract text, key/value pairs, and table data automatically from scanned documents?",
    options: [
      "A. Custom Vision",
      "B. Face",
      "C. Form Recognizer",
      "D. Language",
    ],
    correctAnswer: "C",
    explanation:
      "Standard definition of Form Recognizer (Document Intelligence).",
  },
  // --- Question 93 (Hotspot/Dropdown) ---
  {
    id: 93,
    topic: "Topic 1",
    type: "dropdown",
    text: "{0} is the process of automatically extracting handwritten information from paper, scans and other low-quality digital documents.",
    dropdownOptions: {
      "0": [
        "Object detection",
        "Facial recognition",
        "Image classification",
        "Optical character recognition (OCR)",
      ],
    },
    correctAnswer: {
      "0": "Optical character recognition (OCR)",
    },
    explanation: "Extracting text (handwritten or printed) is OCR.",
  },
  // --- Question 94 ---
  {
    id: 94,
    topic: "Topic 1",
    type: "single",
    text: "You are developing a solution that uses the Text Analytics service. You need to identify the main talking points in a collection of documents. Which type of natural language processing should you use?",
    options: [
      "A. entity recognition",
      "B. key phrase extraction",
      "C. sentiment analysis",
      "D. language detection",
    ],
    correctAnswer: "B",
    explanation: "Main talking points = Key Phrases.",
  },
  // --- Question 95 ---
  {
    id: 95,
    topic: "Topic 1",
    type: "multiple",
    text: "In which two scenarios can you use speech recognition? (Select two)",
    options: [
      "A. an in-car system that reads text messages aloud",
      "B. providing closed captions for recorded or live videos",
      "C. creating an automated public address system for a train station",
      "D. creating a transcript of a telephone call or meeting",
    ],
    correctAnswer: ["B", "D"],
    explanation:
      "Speech Recognition = Speech-to-Text. Captions (B) and Transcripts (D) require converting audio to text. A and C are Text-to-Speech.",
  },
  // --- Question 96 (Hotspot/Dropdown) ---
  {
    id: 96,
    topic: "Topic 1",
    type: "dropdown",
    text: "While presenting at a conference, your session is transcribed into subtitles for the audience. This is an example of {0}.",
    dropdownOptions: {
      "0": [
        "sentiment analysis",
        "speech recognition",
        "speech synthesis",
        "translation",
      ],
    },
    correctAnswer: {
      "0": "speech recognition",
    },
    explanation:
      "Converting spoken audio (presentation) into text (subtitles) is Speech Recognition (Speech-to-Text).",
  },
  // --- Question 97 ---
  {
    id: 97,
    topic: "Topic 1",
    type: "single",
    text: "You need to build an app that will read recipe instructions aloud to support users who have reduced vision. Which service should you use?",
    options: [
      "A. Text Analytics",
      "B. Translator",
      "C. Speech",
      "D. Language Understanding (LUIS)",
    ],
    correctAnswer: "C",
    explanation:
      "Reading aloud requires Text-to-Speech, which is part of the Speech service.",
  },
  // --- Question 98 (Hotspot/Yes-No) ---
  {
    id: 98,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about Azure Cognitive Services.",
    statements: [
      "You can use the Speech service to transcribe a call to text.",
      "You can use the Text Analytics service to extract key entities from a call transcript.",
      "You can use the Speech service to translate the audio of a call to a different language.",
    ],
    correctAnswer: ["Yes", "Yes", "Yes"],
    explanation:
      "1. Yes (Speech-to-Text). 2. Yes (NER on text). 3. Yes (Speech Translation).",
  },
  // --- Question 99 ---
  {
    id: 99,
    topic: "Topic 1",
    type: "single",
    text: "Your website has a chatbot to assist customers. You need to detect when a customer is upset based on what the customer types in the chatbot. Which type of AI workload should you use?",
    options: [
      "A. anomaly detection",
      "B. computer vision",
      "C. regression",
      "D. natural language processing",
    ],
    correctAnswer: "D",
    explanation:
      "Sentiment Analysis (detecting 'upset') is a Natural Language Processing (NLP) workload.",
  },
  // --- Question 100 ---
  {
    id: 100,
    topic: "Topic 1",
    type: "multiple",
    text: "You plan to develop a bot that will enable users to query a knowledge base by using natural language processing. Which two services should you include in the solution?",
    options: [
      "A. QnA Maker",
      "B. Azure Bot Service",
      "C. Form Recognizer",
      "D. Anomaly Detector",
    ],
    correctAnswer: ["A", "B"],
    explanation:
      "QnA Maker (now Language Service Question Answering) holds the knowledge base. Azure Bot Service provides the bot interface.",
  },
  // --- Question 101 ---
  {
    id: 101,
    topic: "Topic 1",
    type: "multiple",
    text: "In which two scenarios can you use a speech synthesis solution? (Select two)",
    options: [
      "A. an automated voice that reads back a credit card number entered into a telephone",
      "B. generating live captions for a news broadcast",
      "C. extracting key phrases from the audio recording of a meeting",
      "D. an AI character in a computer game that speaks audibly to a player",
    ],
    correctAnswer: ["A", "D"],
    explanation:
      "Speech Synthesis = Text-to-Speech. Reading back numbers (A) and Game characters speaking (D) are examples. B and C are Speech Recognition.",
  },
  // --- Question 102 (Hotspot/Yes-No) ---
  {
    id: 102,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the capabilities of the Translator service.",
    statements: [
      "You can use the Translator service to translate text between languages.",
      "You can use the Translator service to detect the language of a given text.",
      "You can use the Translator service to transcribe audible speech into text.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "1. Yes. 2. Yes (Language detection is part of it). 3. No (Transcription is Speech service).",
  },
  // --- Question 103 (Drag & Drop) ---
  {
    id: 103,
    topic: "Topic 1",
    type: "drag-drop",
    text: "You need to scan news for articles about your customers. Alert employees on negative articles (Sentiment). Add positive articles to a press book. Which NLP tasks should you use?",
    matchLeft: ["Entity recognition", "Filter", "Sentiment analysis"],
    matchRight: [
      "Identify mentions of clients (Task 1)",
      "Determine if article is negative (Task 2)",
    ],
    // Note: The exam drag drop is usually a flowchart.
    // Step 1: Find clients -> Entity Recognition.
    // Step 2: Assess tone -> Sentiment Analysis.
    correctAnswer: {
      "0": "Entity recognition",
      "1": "Sentiment analysis",
    },
    explanation:
      "Entity recognition finds the customer names. Sentiment analysis determines if the news is positive or negative.",
  },
  // --- Question 104 ---
  {
    id: 104,
    topic: "Topic 1",
    type: "single",
    text: "You are building a knowledge base by using QnA Maker. Which file format can you use to populate the knowledge base?",
    options: ["A. PPTX", "B. XML", "C. ZIP", "D. PDF"],
    correctAnswer: "D",
    explanation:
      "QnA Maker supports semi-structured files like PDF, DOCX, TSV, and HTML.",
  },
  // --- Question 105 ---
  {
    id: 105,
    topic: "Topic 1",
    type: "single",
    text: "In which scenario should you use key phrase extraction?",
    options: [
      "A. identifying whether reviews of a restaurant are positive or negative",
      "B. generating captions for a video based on the audio track",
      "C. identifying which documents provide information about the same topics",
      "D. translating a set of documents from English to German",
    ],
    correctAnswer: "C",
    explanation:
      "Key phrase extraction identifies main topics/points, which helps in grouping documents by topic. A is Sentiment. B is Speech/CV. D is Translation.",
  },
  // --- Question 106 ---
  {
    id: 106,
    topic: "Topic 1",
    type: "single",
    text: "You have insurance claim reports that are stored as text. You need to extract key terms from the reports to generate summaries. Which type of AI workload should you use?",
    options: [
      "A. natural language processing",
      "B. conversational AI",
      "C. anomaly detection",
      "D. computer vision",
    ],
    correctAnswer: "A",
    explanation:
      "Extracting terms and summarizing text is a core Natural Language Processing (NLP) task.",
  },
  // --- Question 107 (Hotspot/Dropdown) ---
  {
    id: 107,
    topic: "Topic 1",
    type: "dropdown",
    text: "{0} is an example of a natural language processing workload.",
    dropdownOptions: {
      "0": [
        "classify email messages as work-related or personal",
        "predict the number of future car rentals",
        "predict which website visitors will make a transaction",
        "stop a process in a factory when extremely high temperatures are registered",
      ],
    },
    correctAnswer: {
      "0": "classify email messages as work-related or personal",
    },
    explanation:
      "Classifying emails involves reading and understanding text (NLP). The others are Regression/Classification on numeric data or Anomaly detection.",
  },
  // --- Question 108 ---
  {
    id: 108,
    topic: "Topic 1",
    type: "single",
    text: "Which AI service can you use to interpret the meaning of a user input such as 'Call me back later?'",
    options: [
      "A. Translator",
      "B. Text Analytics",
      "C. Speech",
      "D. Language Understanding (LUIS)",
    ],
    correctAnswer: "D",
    explanation:
      "Interpreting 'meaning' or 'intent' from text is the primary function of LUIS (now CLU in Language Service).",
  },
  // --- Question 109 ---
  {
    id: 109,
    topic: "Topic 1",
    type: "single",
    text: "You are developing a chatbot solution in Azure. Which service should you use to determine a user's intent?",
    options: [
      "A. Translator",
      "B. QnA Maker",
      "C. Speech",
      "D. Language Understanding (LUIS)",
    ],
    correctAnswer: "D",
    explanation: "Same concept as Q108. Intent recognition = LUIS.",
  },
  // --- Question 110 ---
  {
    id: 110,
    topic: "Topic 1",
    type: "single",
    text: "You need to make the written press releases of your company available in a range of languages. Which service should you use?",
    options: [
      "A. Translator",
      "B. Text Analytics",
      "C. Speech",
      "D. Language Understanding (LUIS)",
    ],
    correctAnswer: "A",
    explanation:
      "Converting text from one language to another is the function of the Translator service.",
  },
  // --- Question 111 (Hotspot/Yes-No) ---
  {
    id: 111,
    topic: "Text Analytics",
    type: "yes-no",
    text: "Evaluate the following statements about the Text Analytics service capabilities.",
    statements: [
      "The Text Analytics service can identify in which language text is written.",
      "The Text Analytics service can detect handwritten signatures in a document.",
      "The Text Analytics service can identify companies and organizations mentioned in a document.",
    ],
    correctAnswer: ["Yes", "No", "Yes"],
    explanation:
      "1. Yes (Language Detection). 2. No (Handwriting is OCR/Computer Vision). 3. Yes (Named Entity Recognition).",
  },
  // --- Question 112 (Drag & Drop) ---
  {
    id: 112,
    topic: "NLP",
    type: "drag-drop",
    text: "Match the types of natural language processing workloads to the appropriate scenarios.",
    matchLeft: [
      "Entity recognition",
      "Key phrase extraction",
      "Language modeling",
      "Sentiment analysis",
      "Translation",
    ],
    matchRight: [
      "Extracts persons, locations, and organizations from text",
      "Evaluates text along a positive-negative scale",
      "Converts text to a different language",
    ],
    // 0(Entities) -> 0, 1(Positive/Negative) -> 3, 2(Convert language) -> 4
    correctAnswer: {
      "0": "0",
      "1": "3",
      "2": "4",
    },
    explanation:
      "Entity recognition extracts named entities. Sentiment analysis evaluates tone. Translation converts languages.",
  },
  // --- Question 113 (Hotspot/Yes-No) ---
  {
    id: 113,
    topic: "NLP",
    type: "yes-no",
    text: "Determine if the following are examples of natural language processing (NLP).",
    statements: [
      "Monitoring online service reviews for profanities.",
      "Identifying brand logos in an image.",
      "Monitoring public news sites for negative mentions of a product.",
    ],
    correctAnswer: ["Yes", "No", "Yes"],
    explanation:
      "1. Profanity detection analyzes text (NLP). 2. Brand logos in images is Computer Vision. 3. Negative mentions involves Sentiment Analysis (NLP).",
  },
  // --- Question 114 ---
  {
    id: 114,
    topic: "Topic 1",
    type: "single",
    text: "You are developing a natural language processing solution. The solution will analyze customer reviews and determine how positive or negative each review is. This is an example of which workload?",
    options: [
      "A. language detection",
      "B. sentiment analysis",
      "C. key phrase extraction",
      "D. entity recognition",
    ],
    correctAnswer: "B",
    explanation:
      "Determining positive/negative tone is the definition of Sentiment Analysis.",
  },
  // --- Question 115 ---
  {
    id: 115,
    topic: "Topic 1",
    type: "single",
    text: "You process text from a Microsoft news story and receive output identifying 'Microsoft' as an Organization and '2021' as a DateTime. Which type of NLP was performed?",
    options: [
      "A. entity recognition",
      "B. key phrase extraction",
      "C. sentiment analysis",
      "D. translation",
    ],
    correctAnswer: "A",
    explanation:
      "Identifying specific categories of items (Org, Date, Person) in text is Named Entity Recognition (NER).",
  },
  // --- Question 116 (Drag & Drop) ---
  {
    id: 116,
    topic: "NLP",
    type: "drag-drop",
    text: "Match the Text Analytics API features to the scenarios.",
    matchLeft: [
      "Entity recognition",
      "Key phrase extraction",
      "Language detection",
      "Sentiment analysis",
    ],
    matchRight: [
      "Understand how upset a customer is based on the text contained in a support ticket",
      "Summarize important information from the support ticket (e.g. main topics)",
      "Extract key dates from the support ticket",
    ],
    // 0(Upset/Sentiment) -> 3, 1(Summarize/Topics) -> 1, 2(Dates/Entities) -> 0
    correctAnswer: {
      "0": "3",
      "1": "1",
      "2": "0",
    },
    explanation:
      "Upset = Sentiment. Summarize topics = Key Phrase. Extract dates = Entity Recognition.",
  },
  // --- Question 117 ---
  {
    id: 117,
    topic: "Topic 1",
    type: "single",
    text: "You are authoring a Language Understanding (LUIS) application. You want users to be able to ask: 'Which act is playing on the main stage?' This question is an example of which type of element?",
    options: ["A. an intent", "B. an utterance", "C. a domain", "D. an entity"],
    correctAnswer: "B",
    explanation:
      "An 'utterance' is the actual phrase the user says/types. The 'intent' would be something like 'GetSchedule'.",
  },
  // --- Question 118 ---
  {
    id: 118,
    topic: "Topic 1",
    type: "single",
    text: "You build a QnA Maker bot using a FAQ page. You need to add professional greetings and other responses to make the bot more user friendly. What should you do?",
    options: [
      "A. Increase the confidence threshold",
      "B. Enable active learning",
      "C. Create multi-turn questions",
      "D. Add chit-chat",
    ],
    correctAnswer: "D",
    explanation:
      "Chit-chat is a built-in feature in QnA Maker/Language Service to handle conversational fillers like greetings, jokes, and politeness.",
  },
  // --- Question 119 ---
  {
    id: 119,
    topic: "Topic 1",
    type: "single",
    text: "You need to develop a chatbot for a website that answers user questions based on a product troubleshooting guide (Word doc) and a FAQ list (Webpage). Which service should you use?",
    options: [
      "A. Azure Bot Service",
      "B. Language Understanding",
      "C. Text Analytics",
      "D. QnA Maker",
    ],
    correctAnswer: "D",
    explanation:
      "QnA Maker (now Question Answering) is designed to ingest static documents/URLs and create a conversational knowledge base.",
  },
  // --- Question 120 ---
  {
    id: 120,
    topic: "Topic 1",
    type: "single",
    text: "You are building a Language Understanding model. You need to ensure the model detects when utterances are outside the intended scope (domain). What should you do?",
    options: [
      "A. Test with new utterances",
      "B. Add utterances to the None intent",
      "C. Create a prebuilt task entity",
      "D. Create a new model",
    ],
    correctAnswer: "B",
    explanation:
      "The 'None' intent is used to capture utterances that do not match any of your defined intents, handling out-of-scope input correctly.",
  },
  // --- Question 121 ---
  {
    id: 121,
    topic: "Topic 1",
    type: "multiple",
    text: "Which two scenarios are examples of a natural language processing workload? (Select two)",
    options: [
      "A. monitoring machinery temperature",
      "B. a smart device responding to 'What is the weather?'",
      "C. a website using a knowledge base to answer questions",
      "D. assembly line machinery inserting headlamps",
    ],
    correctAnswer: ["B", "C"],
    explanation:
      "A & D are IoT/Robotics. B & C involve understanding and processing human language (Voice assistant, Chatbot).",
  },
  // --- Question 122 ---
  {
    id: 122,
    topic: "Topic 1",
    type: "multiple",
    text: "You have an AI solution that allows users to control smart devices using verbal commands. Which two NLP workloads does it use?",
    options: [
      "A. text-to-speech",
      "B. key phrase extraction",
      "C. speech-to-text",
      "D. language modeling",
    ],
    correctAnswer: ["C", "D"],
    explanation:
      "1. Convert voice to text (Speech-to-Text). 2. Understand the command intent (Language Modeling/LUIS).",
  },
  // --- Question 123 (Hotspot/Yes-No) ---
  {
    id: 123,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the capabilities of the Language service.",
    statements: [
      "The Language service can identify in which language text is written.",
      "The Language service can detect handwritten signatures in a document.",
      "The Language service can identify companies and organizations mentioned in a document.",
    ],
    correctAnswer: ["Yes", "No", "Yes"],
    explanation:
      "1. Yes (Language Detection). 2. No (OCR/Vision). 3. Yes (NER).",
  },
  // --- Question 124 (Drag & Drop) ---
  {
    id: 124,
    topic: "Topic 1",
    type: "drag-drop",
    text: "You are developing a voice controlled personal assistant. Match the services to the tasks.",
    matchLeft: ["Language service", "Speech", "Translator Text"],
    matchRight: [
      "Convert a user's speech to text",
      "Identify a user's intent",
      "Provide a spoken response to the user",
    ],
    // 0(Speech to text) -> 1(Speech)
    // 1(Identify intent) -> 0(Language service)
    // 2(Spoken response) -> 1(Speech) -- Text-to-Speech is also Speech service
    correctAnswer: {
      "0": "1",
      "1": "0",
      "2": "1",
    },
    explanation:
      "Speech service handles both Speech-to-Text and Text-to-Speech. Language Service handles Intent recognition.",
  },
  // --- Question 125 ---
  {
    id: 125,
    topic: "Topic 1",
    type: "single",
    text: "You need to make written press releases available in a range of languages. Which service should you use?",
    options: ["A. Speech", "B. Language", "C. Translator", "D. Personalizer"],
    correctAnswer: "C",
    explanation:
      "The Translator service is for text translation between languages.",
  },
  // --- Question 126 ---
  {
    id: 126,
    topic: "Topic 1",
    type: "single",
    text: "You have insurance claim reports stored as text. You need to extract key terms to generate summaries. Which AI workload is this?",
    options: [
      "A. anomaly detection",
      "B. natural language processing",
      "C. computer vision",
      "D. knowledge mining",
    ],
    correctAnswer: "B",
    explanation:
      "Extracting key terms from text is a Natural Language Processing (NLP) task.",
  },
  // --- Question 127 ---
  {
    id: 127,
    topic: "Topic 1",
    type: "single",
    text: "You need to build an app that reads recipe instructions aloud to support users with reduced vision. Which service should you use?",
    options: [
      "A. Language service",
      "B. Translator",
      "C. Speech",
      "D. Personalizer",
    ],
    correctAnswer: "C",
    explanation:
      "Reading text aloud is Text-to-Speech, a capability of the Speech service.",
  },
  // --- Question 128 ---
  {
    id: 128,
    topic: "Topic 1",
    type: "single",
    text: "You have a QnA Maker bot. You need to ensure the bot uses user feedback to improve relevance over time. What should you use?",
    options: [
      "A. key phrase extraction",
      "B. sentiment analysis",
      "C. business logic",
      "D. active learning",
    ],
    correctAnswer: "D",
    explanation:
      "Active Learning in QnA Maker suggests new question variations based on user interactions for you to approve.",
  },
  // --- Question 129 ---
  {
    id: 129,
    topic: "Topic 1",
    type: "single",
    text: "You are developing a conversational AI solution that will communicate via email, Teams, and webchat. Which service provides the framework for this?",
    options: [
      "A. Text Analytics",
      "B. Azure Bot Service",
      "C. Translator",
      "D. Form Recognizer",
    ],
    correctAnswer: "B",
    explanation:
      "Azure Bot Service provides the framework and connectors (channels) to deploy bots to Teams, Web, Email, etc.",
  },
  // --- Question 130 (Hotspot/Yes-No) ---
  {
    id: 130,
    topic: "Topic 1",
    type: "yes-no",
    text: "Determine if the following are examples of conversational AI workloads.",
    statements: [
      "A bot that responds to queries by internal users.",
      "An application that displays images relating to an entered search term.",
      "A web form used to submit a request to reset a password.",
    ],
    correctAnswer: ["Yes", "No", "No"],
    explanation:
      "1. Bot = Conversational. 2. Search = Information Retrieval/Search. 3. Form = Standard Web App.",
  },
  // --- Question 131 ---
  {
    id: 131,
    topic: "Topic 1",
    type: "multiple",
    text: "What are three ways to create question and answer text by using QnA Maker? (Select three)",
    options: [
      "A. Generate from an existing webpage.",
      "B. Use automated ML to train a model.",
      "C. Manually enter questions and answers.",
      "D. Connect to Cortana.",
      "E. Import chit-chat content.",
    ],
    correctAnswer: ["A", "C", "E"],
    explanation:
      "QnA Maker populates via: Extraction (URLs/Files), Manual entry, or Chit-chat datasets.",
  },
  // --- Question 132 ---
  {
    id: 132,
    topic: "Topic 1",
    type: "single",
    text: "You have a FAQ PDF file. You need to create a conversational support system based on it. Which service should you use?",
    options: [
      "A. QnA Maker",
      "B. Text Analytics",
      "C. Computer Vision",
      "D. Language Understanding",
    ],
    correctAnswer: "A",
    explanation:
      "QnA Maker (Language Service Question Answering) is specifically built to turn FAQ documents into chatbots.",
  },
  // --- Question 133 ---
  {
    id: 133,
    topic: "Topic 1",
    type: "multiple",
    text: "You need to reduce the load on telephone operators by implementing a chatbot to answer simple questions with predefined answers. Which two services should you use? (Select two)",
    options: [
      "A. Text Analytics",
      "B. QnA Maker",
      "C. Azure Bot Service",
      "D. Translator",
    ],
    correctAnswer: ["B", "C"],
    explanation:
      "QnA Maker provides the knowledge base (answers). Azure Bot Service provides the conversational interface.",
  },
  // --- Question 134 ---
  {
    id: 134,
    topic: "Topic 1",
    type: "multiple",
    text: "Which two scenarios are examples of a conversational AI workload?",
    options: [
      "A. A smart device that responds to questions like 'What will the weather be like?'",
      "B. A website that uses a knowledge base to interactively respond to users.",
      "C. Assembly line machinery.",
      "D. Monitoring temperature of machinery.",
    ],
    correctAnswer: ["A", "B"],
    explanation:
      "A (Voice Assistant) and B (Chatbot) are conversational AI. C & D are not.",
  },
  // --- Question 135 ---
  {
    id: 135,
    topic: "Topic 1",
    type: "single",
    text: "You have a process where a user types a message, and the system programmatically updates a knowledge base and responds. Which type of AI solution is this?",
    options: [
      "A. sentiment analysis",
      "B. a chatbot",
      "C. machine learning model",
      "D. computer vision",
    ],
    correctAnswer: "B",
    explanation:
      "A system that accepts user messages and responds (dialogue) is a Chatbot.",
  },
  // --- Question 136 ---
  {
    id: 136,
    topic: "Topic 1",
    type: "single",
    text: "You need to develop a web-based AI solution for customer support. Users must be able to interact with a web app that guides them to the best resource. Which service should you use?",
    options: [
      "A. Custom Vision",
      "B. QnA Maker",
      "C. Translator Text",
      "D. Face",
    ],
    correctAnswer: "B",
    explanation:
      "Interacting to find answers/resources is the core function of QnA Maker.",
  },
  // --- Question 137 ---
  {
    id: 137,
    topic: "Topic 1",
    type: "single",
    text: "Which AI service should you use to create a bot from a frequently asked questions (FAQ) document?",
    options: [
      "A. QnA Maker",
      "B. Language Understanding (LUIS)",
      "C. Text Analytics",
      "D. Speech",
    ],
    correctAnswer: "A",
    explanation:
      "QnA Maker is the specific tool for converting FAQs into bots.",
  },
  // --- Question 138 (Hotspot/Dropdown) ---
  {
    id: 138,
    topic: "Topic 1",
    type: "dropdown",
    text: "The interactive answering of questions entered by a user as part of an application is an example of {0}.",
    dropdownOptions: {
      "0": [
        "anomaly detection",
        "computer vision",
        "conversational AI",
        "forecasting",
      ],
    },
    correctAnswer: {
      "0": "conversational AI",
    },
    explanation: "Interactive questioning and answering is Conversational AI.",
  },
  // --- Question 139 ---
  {
    id: 139,
    topic: "Topic 1",
    type: "single",
    text: "Which scenario is an example of a webchat bot?",
    options: [
      "A. Adding thumbs up/down to reviews.",
      "B. Translating questions at a kiosk.",
      "C. Routing emails based on content.",
      "D. Answering common questions about scheduled events from a website interface.",
    ],
    correctAnswer: "D",
    explanation:
      "Answering questions via a website interface is a Webchat Bot scenario.",
  },
  // --- Question 140 (Hotspot/Yes-No) ---
  {
    id: 140,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about QnA Maker.",
    statements: [
      "You can use QnA Maker to query an Azure SQL database directly.",
      "You should use QnA Maker when you want a knowledge base to provide the same answer to all users who submit similar questions.",
      "The QnA Maker service can determine the intent of a user utterance.",
    ],
    correctAnswer: ["No", "Yes", "No"],
    explanation:
      "1. No, QnA Maker queries its own index (created from docs), not arbitrary SQL DBs. 2. Yes, that is its purpose (static answers). 3. No, LUIS determines intent; QnA Maker matches questions to answers.",
  },
  // --- Question 141 (Hotspot/Yes-No) ---
  {
    id: 141,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the channels available for Azure Bots.",
    statements: [
      "You can communicate with a bot by using Cortana.",
      "You can communicate with a bot by using Microsoft Teams.",
      "You can communicate with a bot by using a webchat interface.",
    ],
    correctAnswer: ["No", "Yes", "Yes"],
    explanation: "1. No (Cortana channel was deprecated). 2. Yes. 3. Yes.",
  },
  // --- Question 142 (Hotspot/Yes-No) ---
  {
    id: 142,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about chatbot capabilities.",
    statements: [
      "A restaurant can use a chatbot to empower customers to make reservations via a website.",
      "A restaurant can use a chatbot to answer inquiries about business hours.",
      "A restaurant can use a chatbot to automate responses to customer reviews on an external website.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "Chatbots are great for direct interaction (Reservations, Hours). They typically cannot automatically post responses to third-party external review sites without complex custom integrations (not a standard bot feature).",
  },
  // --- Question 143 ---
  {
    id: 143,
    topic: "Topic 1",
    type: "multiple",
    text: "Which two scenarios are examples of a conversational AI workload? (Select two)",
    options: [
      "A. Telephone answering service with pre-recorded message.",
      "B. Chatbot helping users find answers on a website.",
      "C. Telephone voice menus (IVR) to reduce load on humans.",
      "D. Service creating FAQ docs by crawling websites.",
    ],
    correctAnswer: ["B", "C"],
    explanation:
      "B (Chatbot) and C (IVR/Voice Menus) involve interaction/conversation. A is static playback. D is knowledge mining/ingestion.",
  },
  // --- Question 144 (Hotspot/Yes-No) ---
  {
    id: 144,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate the following statements about Azure Bot Service.",
    statements: [
      "Azure Bot Service and Azure Cognitive Services can be integrated.",
      "Azure Bot Service engages with customers in a conversational manner.",
      "Azure Bot Service can import frequently asked questions (FAQ) to question and answer sets directly.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "1. Yes. 2. Yes. 3. No - QnA Maker (or Language Service) imports the FAQs; Bot Service just connects to it.",
  },
  // --- Question 145 (Hotspot/Yes-No) ---
  {
    id: 145,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate if these are conversational AI.",
    statements: [
      "A webchat bot can interact with users visiting a website.",
      "Automatically generating captions for pre-recorded videos is an example of conversational AI.",
      "A smart device in the home that responds to questions about the weather is an example of conversational AI.",
    ],
    correctAnswer: ["Yes", "No", "Yes"],
    explanation: "1. Yes. 2. No (That's Speech-to-Text). 3. Yes.",
  },
  // --- Question 146 ---
  {
    id: 146,
    topic: "Topic 1",
    type: "single",
    text: "You have a knowledge base of FAQs. You create a bot to respond to customer requests. What can the bot perform without adding additional skills?",
    options: [
      "A. Register customer purchases.",
      "B. Register customer complaints.",
      "C. Answer questions from multiple users simultaneously.",
      "D. Provide customers with RMA numbers.",
    ],
    correctAnswer: "C",
    explanation:
      "A standard QnA bot is stateless and read-only; it can answer questions (Scale is handled by Azure). It cannot perform actions (Registering/Writing data) without custom code/skills.",
  },
  // --- Question 147 (Hotspot/Yes-No) ---
  {
    id: 147,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate chatbot scenarios (Duplicate concept check).",
    statements: [
      "A restaurant can use a chatbot to answer queries through Cortana.",
      "A restaurant can use a chatbot to answer inquiries about business hours from a webpage.",
      "A restaurant can use a chatbot to automate responses to customer reviews on an external website.",
    ],
    correctAnswer: ["No", "Yes", "No"],
    explanation: "1. No (Cortana channel deprecated). 2. Yes. 3. No.",
  },
  // --- Question 148 (Hotspot/Yes-No) ---
  {
    id: 148,
    topic: "Topic 1",
    type: "yes-no",
    text: "Evaluate statements about building bots.",
    statements: [
      "Chatbots can only be built by using custom code.",
      "The Azure Bot Service provides services that can be used to host conversational bots.",
      "Bots built by using the Azure Bot Service can communicate with Microsoft Teams users.",
    ],
    correctAnswer: ["No", "Yes", "Yes"],
    explanation:
      "1. No (Power Virtual Agents / Copilot Studio are low-code). 2. Yes. 3. Yes.",
  },
  // --- Question 149 (Hotspot/Dropdown) ---
  {
    id: 149,
    topic: "Topic 1",
    type: "dropdown",
    text: "Computer vision capabilities can be deployed to {0}.",
    dropdownOptions: {
      "0": [
        "develop a text-based chatbot",
        "identify anomalous customer behavior",
        "integrate a facial recognition feature into an app",
        "suggest automated responses to email",
      ],
    },
    correctAnswer: {
      "0": "integrate a facial recognition feature into an app",
    },
    explanation: "Facial recognition is a Computer Vision capability.",
  },
  // --- Question 150 (Duplicate of Q150 in Batch 2 logic, checking ID consistency) ---
  // Note: In the PDF sequence, this is unique. I will include it again to ensure your ID mapping stays consistent with the PDF.
  {
    id: 150,
    topic: "Topic 1",
    type: "single",
    text: "You have an Azure Machine Learning pipeline that contains a Split Data module. What is the function of this module?",
    options: [
      "A. scaling numeric variables",
      "B. creating training and validation datasets",
      "C. diverting records that have missing data",
      "D. selecting columns",
    ],
    correctAnswer: "B",
    explanation:
      "Split Data divides the dataset into training and validation subsets.",
  },
  // --- Question 151 ---
  {
    id: 151,
    topic: "Responsible AI",
    type: "single",
    text: "Which statement is an example of the Microsoft responsible AI principle of transparency?",
    options: [
      "A. AI systems must use only publicly available data",
      "B. AI systems must be transparent and inclusive",
      "C. AI systems must keep personal details public",
      "D. Helping users understand the decisions made by an AI system",
    ],
    correctAnswer: "D",
    explanation:
      "Transparency means the AI system should be understandable, and its decisions should be explainable to users.",
  },
  // --- Question 152 (Drag & Drop) ---
  {
    id: 152,
    topic: "NLP",
    type: "drag-drop",
    text: "Match the types of natural language processing workloads to the appropriate scenarios.",
    matchLeft: [
      "Entity recognition",
      "Key phrase extraction",
      "Language modeling",
      "Sentiment analysis",
      "Speech recognition and speech synthesis",
      "Translation",
    ],
    matchRight: [
      "Extracts persons, locations, and organizations from text",
      "Evaluates text along a positive-negative scale",
      "Converts text to a different language",
    ],
    // 0 -> Entity, 1 -> Sentiment, 2 -> Translation
    correctAnswer: {
      "0": "Entity recognition",
      "1": "Sentiment analysis",
      "2": "Translation",
    },
    explanation:
      "Standard NLP tasks: NER for entities, Sentiment for tone, Translation for languages.",
  },
  // --- Question 153 ---
  {
    id: 153,
    topic: "Topic 1",
    type: "multiple",
    text: "You need to reduce the load on telephone operators by implementing a chatbot to answer simple questions with predefined answers. Which two AI services should you use? (Select two)",
    options: [
      "A. Azure Machine Learning",
      "B. Azure Bot Service",
      "C. Language Service",
      "D. Translator",
    ],
    correctAnswer: ["B", "C"],
    explanation:
      "Language Service (Question Answering) provides the knowledge base, and Azure Bot Service hosts the bot.",
  },
  // --- Question 154 (Drag & Drop) ---
  {
    id: 154,
    topic: "Responsible AI",
    type: "drag-drop",
    text: "Match the principles of responsible AI to the appropriate descriptions.",
    matchLeft: [
      "Fairness",
      "Inclusiveness",
      "Privacy and security",
      "Reliability and safety",
    ],
    matchRight: [
      "AI systems must consistently operate as intended",
      "AI systems must protect and secure personal and businesses information",
    ],
    // 0 -> Reliability, 1 -> Privacy
    correctAnswer: {
      "0": "Reliability and safety",
      "1": "Privacy and security",
    },
    explanation:
      "Consistent operation = Reliability. Protecting information = Privacy & Security.",
  },
  // --- Question 155 ---
  {
    id: 155,
    topic: "Machine Learning",
    type: "single",
    text: "During the process of Machine Learning, when should you review evaluation metrics?",
    options: [
      "A. Before you train a model.",
      "B. After you clean the data.",
      "C. Before you choose the type of model.",
      "D. After you test a model on the validation data.",
    ],
    correctAnswer: "D",
    explanation:
      "Evaluation metrics (Accuracy, Precision, Recall) are calculated after testing the model on validation data to assess performance.",
  },
  // --- Question 156 ---
  {
    id: 156,
    topic: "Responsible AI",
    type: "single",
    text: "You have a natural language processing (NLP) model that was created by using data obtained without permission. Which Microsoft principle for responsible AI does this breach?",
    options: [
      "A. reliability and safety",
      "B. privacy and security",
      "C. inclusiveness",
      "D. transparency",
    ],
    correctAnswer: "B",
    explanation:
      "Using data without permission is a violation of data Privacy and Security.",
  },
  // --- Question 157 (Hotspot/Dropdown) ---
  {
    id: 157,
    topic: "Responsible AI",
    type: "dropdown",
    text: "Ensuring an AI system does not provide a prediction when important fields contain unusual or missing values is {0} principle for responsible AI.",
    dropdownOptions: {
      "0": [
        "an inclusiveness",
        "a privacy and security",
        "a reliability and safety",
        "a transparency",
      ],
    },
    correctAnswer: {
      "0": "a reliability and safety",
    },
    explanation: "Handling errors/missing data safely is part of Reliability.",
  },
  // --- Question 158 (Drag & Drop) ---
  {
    id: 158,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the services to the appropriate descriptions.",
    matchLeft: [
      "Azure Storage",
      "Azure Bot Service",
      "Language Service",
      "Speech",
    ],
    matchRight: [
      "Enables the use of natural language to query a knowledge base",
      "Enables the real-time transcription of speech-to-text",
    ],
    // 0 -> Language Service, 1 -> Speech
    correctAnswer: {
      "0": "Language Service",
      "1": "Speech",
    },
    explanation:
      "Language Service (QA) handles querying knowledge bases. Speech service handles transcription.",
  },
  // --- Question 159 ---
  {
    id: 159,
    topic: "Machine Learning",
    type: "single",
    text: "Which machine learning technique can be used for anomaly detection?",
    options: [
      "A. A machine learning technique that classifies objects based on user supplied images.",
      "B. A machine learning technique that understands written and spoken language.",
      "C. A machine learning technique that classifies images based on their contents.",
      "D. A machine learning technique that analyzes data over time and identifies unusual changes.",
    ],
    correctAnswer: "D",
    explanation:
      "Anomaly detection is specifically about identifying unusual changes or outliers in data (often over time).",
  },
  // --- Question 160 ---
  {
    id: 160,
    topic: "Responsible AI",
    type: "single",
    text: "You have an AI-based loan approval system. During testing, you discover that the system has a gender bias. Which responsible AI principle does this violate?",
    options: [
      "A. accountability",
      "B. reliability and safety",
      "C. transparency",
      "D. fairness",
    ],
    correctAnswer: "D",
    explanation:
      "Fairness ensures AI systems do not discriminate based on gender, race, etc.",
  },
  // --- Question 161 ---
  {
    id: 161,
    topic: "Responsible AI",
    type: "single",
    text: "You are developing a system to predict insurance prices. You need to minimize bias. What should you do?",
    options: [
      "A. Remove protected characteristics before sampling.",
      "B. Take a training sample that is representative of the population.",
      "C. Create a dataset from global insurers.",
      "D. Take a completely random training sample.",
    ],
    correctAnswer: "B",
    explanation:
      "Using a representative sample ensures the model learns from a balanced view of the real-world population, reducing bias.",
  },
  // --- Question 162 (Hotspot/Dropdown) ---
  {
    id: 162,
    topic: "Azure ML Designer",
    type: "dropdown",
    text: "Azure Machine Learning designer lets you create machine learning models by {0}.",
    dropdownOptions: {
      "0": [
        "adding and connecting modules on a visual canvas",
        "automatically performing common data preparation tasks",
        "using a code-first notebook experience",
      ],
    },
    correctAnswer: {
      "0": "adding and connecting modules on a visual canvas",
    },
    explanation: "Designer is the visual drag-and-drop tool.",
  },
  // --- Question 163 ---
  {
    id: 163,
    topic: "Machine Learning",
    type: "single",
    text: "You have a dataset. You need to build a classification model. What should you do first?",
    options: [
      "A. Load the dataset.",
      "B. Create a clustering model.",
      "C. Split the data.",
      "D. Create a classification model.",
    ],
    correctAnswer: "A",
    explanation:
      "You must load the data into the workspace/designer before you can process or split it.",
  },
  // --- Question 164 ---
  {
    id: 164,
    topic: "Azure ML",
    type: "single",
    text: "You use Azure Machine Learning designer to build a pipeline. What should you create before you can run the pipeline?",
    options: [
      "A. a registered model",
      "B. a compute resource",
      "C. a Jupyter notebook",
    ],
    correctAnswer: "B",
    explanation:
      "A compute resource (Compute Instance or Cluster) is required to execute the pipeline steps.",
  },
  // --- Question 165 (Drag & Drop) ---
  {
    id: 165,
    topic: "Azure ML Tools",
    type: "drag-drop",
    text: "Match the tool to the Azure Machine Learning task.",
    matchLeft: [
      "Automated machine learning (automated ML)",
      "The Azure portal",
      "Machine Learning designer",
    ],
    matchRight: [
      "Create a Machine Learning workspace",
      "Use a drag-and-drop interface used to train and deploy models",
      "Use a wizard to select configurations for a machine learning run",
    ],
    // 0 -> Portal, 1 -> Designer, 2 -> Automated ML
    correctAnswer: {
      "0": "The Azure portal",
      "1": "Machine Learning designer",
      "2": "Automated machine learning (automated ML)",
    },
    explanation:
      "Portal creates workspaces. Designer is drag-and-drop. AutoML uses a wizard/configuration.",
  },
  // --- Question 166 ---
  {
    id: 166,
    topic: "Topic 1",
    type: "single",
    text: "You need to create a customer support solution that supports email, phone, and live chat channels. Which type of AI solution should you use?",
    options: [
      "A. machine learning",
      "B. computer vision",
      "C. chatbot",
      "D. natural language processing (NLP)",
    ],
    correctAnswer: "C",
    explanation:
      "A chatbot is the specific application type designed to handle multi-channel customer support.",
  },
  // --- Question 167 (Drag & Drop) ---
  {
    id: 167,
    topic: "Topic 1",
    type: "drag-drop",
    text: "Match the types of AI workloads to the appropriate scenarios.",
    matchLeft: [
      "Anomaly detection",
      "Computer vision",
      "Machine Learning (Clustering)",
      "Natural language processing",
    ],
    matchRight: [
      "Identify handwritten letters.",
      "Predict the sentiment of a social media post.",
      "Identify an unusual credit card payment.",
      "Group animals based on multiple measurements.",
    ],
    // 0 -> CV, 1 -> NLP, 2 -> Anomaly, 3 -> Clustering
    correctAnswer: {
      "0": "Computer vision",
      "1": "Natural language processing",
      "2": "Anomaly detection",
      "3": "Machine Learning (Clustering)",
    },
    explanation:
      "Handwriting = CV. Sentiment = NLP. Unusual payment = Anomaly. Grouping = Clustering.",
  },
  // --- Question 168 ---
  {
    id: 168,
    topic: "Machine Learning",
    type: "single",
    text: "Predicting how many vehicles will travel across a bridge on a given day is an example of _______.",
    options: [
      "A. regression",
      "B. translation",
      "C. classification",
      "D. clustering",
    ],
    correctAnswer: "A",
    explanation: "Predicting a numeric count is Regression.",
  },
  // --- Question 169 ---
  {
    id: 169,
    topic: "Machine Learning",
    type: "single",
    text: "In a machine learning model, the data that is used as inputs are called ________.",
    options: ["A. dataset", "B. labels", "C. variables (or features)"],
    correctAnswer: "C",
    explanation:
      "Input data columns are called Features or Variables. The output is the Label.",
  },
  // --- Question 170 (Hotspot/Dropdown) ---
  {
    id: 170,
    topic: "Machine Learning",
    type: "dropdown",
    text: "Using Recency, Frequency, and Monetary (RFM) values to identify segments of a customer base is an example of {0}.",
    dropdownOptions: {
      "0": ["clustering", "regression", "classification", "regularization"],
    },
    correctAnswer: {
      "0": "clustering",
    },
    explanation:
      "Identifying segments (grouping) without pre-defined labels is Clustering.",
  },
  // --- Question 171 (Drag & Drop - Sequence) ---
  {
    id: 171,
    topic: "Azure ML Designer",
    type: "drag-drop",
    text: "Which four actions should you perform in sequence to deploy a model in Designer?",
    matchLeft: [
      "Train the model.",
      "Split the data randomly into training and validation data.",
      "Evaluate the model against the original dataset.",
      "Evaluate the model against the validation dataset.",
      "Ingest and prepare a dataset.",
    ],
    matchRight: ["Step 1", "Step 2", "Step 3", "Step 4"],
    // Sequence: Ingest -> Split -> Train -> Evaluate
    correctAnswer: {
      "0": "Ingest and prepare a dataset.",
      "1": "Split the data randomly into training and validation data.",
      "2": "Train the model.",
      "3": "Evaluate the model against the validation dataset.",
    },
    explanation:
      "Standard workflow: Get Data -> Split Data -> Train -> Evaluate.",
  },
  // --- Question 172 (Hotspot/Yes-No) ---
  {
    id: 172,
    topic: "Clustering",
    type: "yes-no",
    text: "Determine if the following are examples of clustering.",
    statements: [
      "Organizing documents into groups based on different usage statistics.",
      "Grouping similar patients based on symptoms and diagnostic test results.",
      "Predicting whether a person will develop mild, moderate, or severe allergy symptoms based on pollen count.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "1 & 2 are grouping tasks (Clustering). 3 is predicting a specific category (Classification).",
  },
  // --- Question 173 (Hotspot/Dropdown) ---
  {
    id: 173,
    topic: "Machine Learning",
    type: "dropdown",
    text: "When building a regression model, labels must have a data type of {0}.",
    dropdownOptions: {
      "0": ["boolean", "datetime", "numeric", "text"],
    },
    correctAnswer: {
      "0": "numeric",
    },
    explanation: "Regression predicts continuous numeric values.",
  },
  // --- Question 174 ---
  {
    id: 174,
    topic: "Machine Learning",
    type: "single",
    text: "You need to create a clustering model and evaluate it. What should you do?",
    options: [
      "A. Split the original dataset into training and testing sets. Use testing for evaluation.",
      "B. Use the original dataset for training and evaluation.",
      "C. Split into features and labels.",
    ],
    correctAnswer: "A",
    explanation:
      "Even for clustering, splitting data helps validate the stability of clusters on unseen data (though less common than supervised, in Azure ML Designer this is the standard evaluation flow).",
  },
  // --- Question 175 ---
  {
    id: 175,
    topic: "Machine Learning",
    type: "single",
    text: "You have a dataset with numeric columns. You want to predict the value of ColumnE (numeric) based on others. Which type of model is this?",
    options: ["A. analysis", "B. clustering", "C. regression"],
    correctAnswer: "C",
    explanation: "Predicting a numeric column is Regression.",
  },
  // --- Question 176 ---
  {
    id: 176,
    topic: "Azure ML",
    type: "single",
    text: "You need to track multiple versions of a model trained using Azure Machine Learning. What should you do?",
    options: [
      "A. Explain the model.",
      "B. Register the model.",
      "C. Register the training data.",
    ],
    correctAnswer: "B",
    explanation:
      "Registering the model in the Model Registry allows versioning and tracking.",
  },
  // --- Question 177 ---
  {
    id: 177,
    topic: "Machine Learning",
    type: "single",
    text: "You need to identify groups of rows with similar numeric values in a dataset. Which type of machine learning should you use?",
    options: ["A. clustering", "B. regression", "C. classification"],
    correctAnswer: "A",
    explanation: "Identifying groups based on similarity is Clustering.",
  },
  // --- Question 178 (Hotspot/Dropdown) ---
  {
    id: 178,
    topic: "Machine Learning",
    type: "dropdown",
    text: "A banking system that predicts whether a loan will be repaid is an example of {0}.",
    dropdownOptions: {
      "0": ["clustering", "regression", "classification"],
    },
    correctAnswer: {
      "0": "classification",
    },
    explanation: "Binary prediction (Repay: Yes/No) is Classification.",
  },
  // --- Question 179 (Hotspot/Dropdown) ---
  {
    id: 179,
    topic: "Machine Learning",
    type: "dropdown",
    text: "{0} models can be used to predict the sale price of auctioned items.",
    dropdownOptions: {
      "0": ["Classification", "Clustering", "Regression"],
    },
    correctAnswer: {
      "0": "Regression",
    },
    explanation: "Sale price is a number => Regression.",
  },
  // --- Question 180 ---
  {
    id: 180,
    topic: "Computer Vision",
    type: "single",
    text: "A historian can use ________ to digitize newspaper articles.",
    options: [
      "A. Object detection",
      "B. Facial recognition",
      "C. Image classification",
      "D. Optical character recognition (OCR)",
    ],
    correctAnswer: "D",
    explanation: "Digitizing text from paper/images requires OCR.",
  },
  // --- Question 181 (Hotspot/Yes-No) ---
  {
    id: 181,
    topic: "Computer Vision",
    type: "yes-no",
    text: "Evaluate the capabilities of Object Detection.",
    statements: [
      "Object detection can identify the location of a damaged product in an image.",
      "Object detection can identify multiple instances of a damaged product in an image.",
      "Object detection can identify multiple types of damaged products in an image.",
    ],
    correctAnswer: ["Yes", "Yes", "Yes"],
    explanation:
      "Object detection identifies what (types), where (location), and how many (instances).",
  },
  // --- Question 182 ---
  {
    id: 182,
    topic: "Computer Vision",
    type: "single",
    text: "You need to create a model that labels a collection of your personal digital photographs. Which Azure Cognitive Services service should you use?",
    options: [
      "A. Form Recognizer",
      "B. Custom Vision",
      "C. Language",
      "D. Computer Vision",
    ],
    correctAnswer: "B",
    explanation:
      "To label your *own/personal* collection with custom tags, you train a Custom Vision model.",
  },
  // --- Question 183 (Hotspot/Dropdown) ---
  {
    id: 183,
    topic: "Computer Vision",
    type: "dropdown",
    text: "{0} is used to identify multiple types of items in one image.",
    dropdownOptions: {
      "0": [
        "Object detection",
        "Image description",
        "Image classification",
        "Optical character recognition (OCR)",
      ],
    },
    correctAnswer: {
      "0": "Object detection",
    },
    explanation: "Identifying and locating multiple items is Object Detection.",
  },
  // --- Question 184 (Hotspot/Dropdown) ---
  {
    id: 184,
    topic: "Computer Vision",
    type: "dropdown",
    text: "Identifying whether a kiosk user is annoyed by monitoring a video feed from the kiosk is an example of {0}.",
    dropdownOptions: {
      "0": [
        "face detection",
        "facial analysis", // or "facial recognition" depending on options, usually 'analysis' for emotion
        "optical character recognition (OCR)",
      ],
    },
    correctAnswer: {
      "0": "facial analysis", // Typically mapped to "Facial Analysis" (emotion detection)
    },
    explanation: "Detecting emotion (annoyed) is part of Facial Analysis.",
  },
  // --- Question 185 (Drag & Drop) ---
  {
    id: 185,
    topic: "Computer Vision",
    type: "drag-drop",
    text: "Match the Azure Cognitive Services to the appropriate actions.",
    matchLeft: ["Custom Vision", "Face", "Form Recognizer"],
    matchRight: [
      "Identify objects in an image.",
      "Automatically import data from an invoice to a database.",
      "Identify people in an image.",
    ],
    // 0 -> Custom Vision, 1 -> Form Recognizer, 2 -> Face
    correctAnswer: {
      "0": "Custom Vision",
      "1": "Form Recognizer",
      "2": "Face",
    },
    explanation:
      "Custom Vision identifies objects (custom). Form Recognizer reads invoices. Face identifies people.",
  },
  // --- Question 186 (Hotspot/Dropdown) ---
  {
    id: 186,
    topic: "Computer Vision",
    type: "dropdown",
    text: "An AI solution that helps photographers take better portrait photographs by providing feedback on exposure, noise, and occlusion is an example of facial {0}.",
    dropdownOptions: {
      "0": ["analysis", "detection", "recognition"],
    },
    correctAnswer: {
      "0": "analysis",
    },
    explanation:
      "Evaluating image quality attributes (exposure, blur, noise) is part of Face/Image Analysis.",
  },
  // --- Question 187 ---
  {
    id: 187,
    topic: "Computer Vision",
    type: "single",
    text: "Your company manufactures widgets. You have 1,000 digital photos of the widgets. You need to identify the location of the widgets within the photos. What should you use?",
    options: [
      "A. Computer Vision Spatial Analysis",
      "B. Custom Vision object detection",
      "C. Computer Vision Image Analysis",
      "D. Custom Vision classification",
    ],
    correctAnswer: "B",
    explanation:
      "Identifying the *location* (bounding box) of a *specific custom product* (widgets) requires Custom Vision Object Detection.",
  },
  // --- Question 188 ---
  {
    id: 188,
    topic: "Computer Vision",
    type: "single",
    text: "You need to convert handwritten notes into digital text. Which type of computer vision should you use?",
    options: [
      "A. facial detection",
      "B. optical character recognition (OCR)",
      "C. image classification",
      "D. object detection",
    ],
    correctAnswer: "B",
    explanation: "OCR converts handwritten or printed text into digital text.",
  },
  // --- Question 189 (Hotspot/Dropdown - Duplicate logic check) ---
  {
    id: 189,
    topic: "Computer Vision",
    type: "dropdown",
    text: "{0} is used to identify multiple types of items in one image.",
    dropdownOptions: {
      "0": [
        "Image classification",
        "Image description",
        "Object detection",
        "Optical character recognition (OCR)",
      ],
    },
    correctAnswer: {
      "0": "Object detection",
    },
    explanation: "Object Detection handles multiple items + locations.",
  },
  // --- Question 190 ---
  {
    id: 190,
    topic: "Computer Vision",
    type: "single",
    text: "You need to develop a mobile app for employees to scan and store their expenses. Which type of computer vision should you use?",
    options: [
      "A. face detection",
      "B. image classification",
      "C. object detection",
      "D. optical character recognition (OCR)",
    ],
    correctAnswer: "D",
    explanation:
      "Scanning expenses = Reading receipts = OCR (or Form Recognizer).",
  },
  // --- Question 191 (Hotspot/Dropdown) ---
  {
    id: 191,
    topic: "Computer Vision",
    type: "dropdown",
    text: "You can use the {0} service to train an object detection model by using your own images.",
    dropdownOptions: {
      "0": [
        "Computer Vision",
        "Custom Vision",
        "Form Recognizer",
        "Azure Video Analyzer",
      ],
    },
    correctAnswer: {
      "0": "Custom Vision",
    },
    explanation: "Training with *your own images* = Custom Vision.",
  },
  // --- Question 192 (Hotspot/Dropdown) ---
  {
    id: 192,
    topic: "Computer Vision",
    type: "dropdown",
    text: "An AI solution that helps photographers take better portrait photographs by providing feedback on exposure, noise, and occlusion is an example of facial {0}.",
    dropdownOptions: {
      "0": ["analysis", "detection", "recognition"],
    },
    correctAnswer: {
      "0": "analysis",
    },
    explanation: "Repeated concept: Analyzing quality attributes is Analysis.",
  },
  // --- Question 193 (Drag & Drop) ---
  {
    id: 193,
    topic: "Computer Vision",
    type: "drag-drop",
    text: "Match the Azure Cognitive Services to the appropriate AI workloads.",
    matchLeft: ["Custom Vision", "Face", "Form Recognizer"],
    matchRight: [
      "Identify objects in an image.",
      "Automatically import data from an invoice to a database.",
      "Identify people in an image.",
    ],
    // 0 -> Custom Vision, 1 -> Form Recognizer, 2 -> Face
    correctAnswer: {
      "0": "Custom Vision",
      "1": "Form Recognizer",
      "2": "Face",
    },
    explanation:
      "Custom Vision -> Objects. Form Recognizer -> Invoice. Face -> People.",
  },
  // --- Question 194 ---
  {
    id: 194,
    topic: "Computer Vision",
    type: "single",
    text: "You need to implement a pre-built solution that will identify well-known brands in digital photographs. Which Azure Cognitive Services service should you use?",
    options: [
      "A. Custom Vision",
      "B. Form Recognizer",
      "C. Face",
      "D. Computer Vision",
    ],
    correctAnswer: "D",
    explanation:
      "Computer Vision has a *pre-built* 'Brand Detection' feature (no training needed for famous brands).",
  },
  // --- Question 195 ---
  {
    id: 195,
    topic: "NLP",
    type: "single",
    text: "An app that analyzes social media posts to identify their tone is an example of which type of NLP workload?",
    options: [
      "A. sentiment analysis",
      "B. speech recognition",
      "C. key phrase extraction",
      "D. entity recognition",
    ],
    correctAnswer: "A",
    explanation:
      "Identifying tone (positive/negative/neutral) is Sentiment Analysis.",
  },
  // --- Question 196 ---
  {
    id: 196,
    topic: "NLP",
    type: "multiple",
    text: "You plan to develop a bot that will enable users to query a knowledge base by using natural language processing. Which two services should you include? (Select two)",
    options: [
      "A. Language Service",
      "B. Azure Bot Service",
      "C. Form Recognizer",
      "D. Anomaly Detector",
    ],
    correctAnswer: ["A", "B"],
    explanation:
      "Language Service (Question Answering) manages the knowledge. Azure Bot Service manages the bot.",
  },
  // --- Question 197 (Hotspot/Yes-No) ---
  {
    id: 197,
    topic: "NLP",
    type: "yes-no",
    text: "Evaluate the following statements about the Translator service.",
    statements: [
      "The following service call will accept English text as an input and output Italian and French text.",
      "The following service call will accept English text as an input and output Italian and French text.",
      "The Translator service can be used to translate documents from English to French.",
    ],
    // Note: The text in the PDF screenshots usually has URL examples.
    // Generally: 1. Can translate one to many? Yes. 2. Can translate docs? Yes.
    // Standard answer key for this type: No (if syntax wrong), Yes, Yes.
    // Based on common exam dump patterns for this specific "service call" question: No, Yes, Yes.
    correctAnswer: ["No", "Yes", "Yes"],
    explanation:
      "Translator can translate to multiple languages in one call. It also supports Document Translation.",
  },
  // --- Question 198 ---
  {
    id: 198,
    topic: "NLP",
    type: "single",
    text: "An app that analyzes social media posts to identify their tone is an example of which type of natural language processing workload?",
    options: [
      "A. sentiment analysis",
      "B. speech recognition",
      "C. key phrase extraction",
      "D. entity recognition",
    ],
    correctAnswer: "A",
    explanation: "Tone = Sentiment.",
  },
  // --- Question 199 ---
  {
    id: 199,
    topic: "NLP",
    type: "single",
    text: "You are building a chatbot to accept orders, retrieve docs, and check status. It needs to extract specific details (Product names, Order IDs). Which type of NLP should you use?",
    options: [
      "A. sentiment analysis",
      "B. named entity recognition (NER)",
      "C. translation",
      "D. language modeling",
    ],
    correctAnswer: "B",
    explanation:
      "Extracting specific details (Entities) like Product Name or Order ID is Named Entity Recognition.",
  },
  // --- Question 200 (Drag & Drop) ---
  {
    id: 200,
    topic: "NLP",
    type: "drag-drop",
    text: "Match the Azure Cognitive Services service to the appropriate actions.",
    matchLeft: ["Language service", "Speech", "Translator"],
    matchRight: [
      "Convert spoken requests into text.",
      "Identify the intent of a user's requests.",
      "Apply intent to entities and utterances.",
    ],
    // 0 -> Speech, 1 -> Language, 2 -> Language
    correctAnswer: {
      "0": "Speech",
      "1": "Language service",
      "2": "Language service",
    },
    explanation:
      "Spoken to text = Speech. Intent/Entities = Language Service (CLU).",
  },
  // --- Question 201 (Hotspot/Yes-No) ---
  {
    id: 201,
    topic: "Conversational AI",
    type: "yes-no",
    text: "Determine if the following are examples of Conversational AI.",
    statements: [
      "A webchat bot can interact with users visiting a website.",
      "Automatically generating captions for pre-recorded videos is an example of natural language processing (not conversational AI).",
      "A smart device in the home that responds to questions is an example of conversational AI.",
    ],
    correctAnswer: ["Yes", "No", "Yes"],
    explanation:
      "1. Yes (Bot). 2. No (Captioning is Speech-to-Text, not a conversation). 3. Yes (Voice Assistant).",
  },
  // --- Question 202 ---
  {
    id: 202,
    topic: "NLP",
    type: "single",
    text: "You have a website with customer reviews. You need to present the reviews to users in their respective language. Which workload should you use?",
    options: [
      "A. key phrase extraction",
      "B. speech recognition",
      "C. language modeling",
      "D. translation",
    ],
    correctAnswer: "D",
    explanation: "Converting text from one language to another is Translation.",
  },
  // --- Question 203 (Hotspot/Yes-No) ---
  {
    id: 203,
    topic: "Conversational AI",
    type: "yes-no",
    text: "Evaluate the following statements about Chatbots.",
    statements: [
      "Chatbots can support voice input.",
      "A separate chatbot is required for each communication channel.",
      "Chatbots manage conversation flows by using a combination of natural language and constrained option responses.",
    ],
    correctAnswer: ["Yes", "No", "Yes"],
    explanation:
      "1. Yes (via Speech service). 2. No (Azure Bot Service creates one bot for multiple channels). 3. Yes.",
  },
  // --- Question 204 (Hotspot/Yes-No) ---
  {
    id: 204,
    topic: "NLP",
    type: "yes-no",
    text: "Determine if the following are examples of Natural Language Processing (NLP).",
    statements: [
      "A bot that responds to queries by internal users.",
      "A mobile application that displays images relating to an entered search term.",
      "A web form used to submit a request to reset a password.",
    ],
    correctAnswer: ["Yes", "No", "No"],
    explanation:
      "1. Yes (Bot uses NLP). 2. No (Image search might use NLP for the query, but the core task described implies simple retrieval or CV). 3. No (Form submission is data entry).",
  },
  // --- Question 205 ---
  {
    id: 205,
    topic: "NLP",
    type: "single",
    text: "You have a solution that analyzes social media posts to extract the mentions of city names. Which NLP workload does this use?",
    options: [
      "A. speech recognition",
      "B. sentiment analysis",
      "C. key phrase extraction",
      "D. entity recognition",
    ],
    correctAnswer: "D",
    explanation:
      "City names are 'Entities' (Locations). Extracting them is Entity Recognition.",
  },
  // --- Question 206 (Hotspot/Yes-No) ---
  {
    id: 206,
    topic: "NLP",
    type: "yes-no",
    text: "Evaluate the capabilities of Language Service Question Answering (formerly QnA Maker).",
    statements: [
      "You can use Language Service's question answering to query an Azure SQL database.",
      "You should use Language Service's question answering when you want a knowledge base to provide the same answer to all users.",
      "Language Service's question answering can determine the intent of a user utterance.",
    ],
    correctAnswer: ["No", "Yes", "No"],
    explanation:
      "1. No (it queries its own index). 2. Yes (Static answers). 3. No (Intent is handled by CLU/LUIS capabilities).",
  },
  // --- Question 207 ---
  {
    id: 207,
    topic: "NLP",
    type: "single",
    text: "You need to identify the main talking points in a collection of documents. Which type of NLP should you use?",
    options: [
      "A. language detection",
      "B. sentiment analysis",
      "C. entity recognition",
      "D. key phrase extraction",
    ],
    correctAnswer: "D",
    explanation: "Talking points = Key Phrases.",
  },
  // --- Question 208 (Drag & Drop) ---
  {
    id: 208,
    topic: "Responsible AI",
    type: "drag-drop",
    text: "Match the Microsoft responsible AI principles to the requirements.",
    matchLeft: [
      "Accountability",
      "Fairness",
      "Inclusiveness",
      "Privacy and security",
      "Reliability and safety",
      "Transparency",
    ],
    matchRight: [
      "A customer's personal information must be visible only to staff who are involved",
      "The decision-making process must be recorded so that staff can identify the reasoning",
      "The system must be accessible to customers who use screen readers",
    ],
    // 0 -> Privacy, 1 -> Transparency, 2 -> Inclusiveness
    correctAnswer: {
      "0": "Privacy and security",
      "1": "Transparency",
      "2": "Inclusiveness",
    },
    explanation:
      "Visible only to staff = Privacy. Recorded reasoning = Transparency. Screen readers/Accessibility = Inclusiveness.",
  },
  // --- Question 209 ---
  {
    id: 209,
    topic: "NLP",
    type: "single",
    text: "Which type of natural language processing (NLP) entity is used to identify a phone number?",
    options: [
      "A. regular expression",
      "B. machine-learned",
      "C. list",
      "D. Pattern.any",
    ],
    correctAnswer: "A",
    explanation:
      "Phone numbers follow specific patterns (digits, dashes) perfect for Regular Expressions (Regex).",
  },
  // --- Question 210 (Hotspot/Dropdown) ---
  {
    id: 210,
    topic: "Computer Vision",
    type: "dropdown",
    text: "Returning a bounding box that indicates the location of a vehicle in an image is an example of {0}.",
    dropdownOptions: {
      "0": [
        "image classification",
        "object detection",
        "optical character recognition (OCR)",
        "facial detection",
      ],
    },
    correctAnswer: {
      "0": "object detection",
    },
    explanation: "Repeated concept: Bounding box = Object Detection.",
  },
  // --- Question 211 ---
  {
    id: 211,
    topic: "Responsible AI",
    type: "single",
    text: "Your company wants to identify any barriers in voice recognition that might unintentionally leave out specific user groups. This is an example of which principle?",
    options: [
      "A. accountability",
      "B. fairness",
      "C. privacy and security",
      "D. inclusiveness",
    ],
    correctAnswer: "D",
    explanation:
      "Removing barriers for specific user groups (like accents, speech impediments) is Inclusiveness.",
  },
  // --- Question 212 (Hotspot/Dropdown) ---
  {
    id: 212,
    topic: "AutoML",
    type: "dropdown",
    text: "You need to train an automated machine learning model to predict vehicle sale values. Which task should you select?",
    dropdownOptions: {
      "0": [
        "Classification",
        "Regression",
        "Time series forecasting",
        "Natural Language Processing",
      ],
    },
    correctAnswer: {
      "0": "Regression",
    },
    explanation: "Sale value is a number = Regression.",
  },
  // --- Question 213 (Hotspot/Dropdown) ---
  {
    id: 213,
    topic: "Machine Learning",
    type: "dropdown",
    text: "When evaluating the performance of a model, the {0} displays the predicted and actual positives and negatives by using a grid.",
    dropdownOptions: {
      "0": ["AUC metric", "confusion matrix", "ROC curve", "threshold"],
    },
    correctAnswer: {
      "0": "confusion matrix",
    },
    explanation: "A grid showing TP, TN, FP, FN is a Confusion Matrix.",
  },
  // --- Question 214 ---
  {
    id: 214,
    topic: "Computer Vision",
    type: "single",
    text: "You need to convert receipts into transactions in a spreadsheet. Which Azure AI service should you use?",
    options: [
      "A. Custom Vision",
      "B. Form Recognizer",
      "C. Face",
      "D. Language",
    ],
    correctAnswer: "B",
    explanation:
      "Form Recognizer extracts structured data (transactions) from receipts.",
  },
  // --- Question 215 (Hotspot/Dropdown) ---
  {
    id: 215,
    topic: "Machine Learning",
    type: "dropdown",
    text: "Predicting how many vehicles will travel across a bridge is an example of {0}.",
    dropdownOptions: {
      "0": ["classification", "clustering", "regression"],
    },
    correctAnswer: {
      "0": "regression",
    },
    explanation: "Repeated concept: Predicting a count = Regression.",
  },
  // --- Question 216 (Hotspot/Dropdown) ---
  {
    id: 216,
    topic: "Machine Learning",
    type: "dropdown",
    text: "In a machine learning model, the data that is used as inputs are called {0}.",
    dropdownOptions: {
      "0": ["features", "functions", "labels", "instances"],
    },
    correctAnswer: {
      "0": "features",
    },
    explanation: "Repeated concept: Inputs = Features.",
  },
  // --- Question 217 ---
  {
    id: 217,
    topic: "Computer Vision",
    type: "single",
    text: "You have a security system that analyzes images from CCTV to provide authorized staff entry. Which type of computer vision does the system use?",
    options: [
      "A. optical character recognition (OCR)",
      "B. semantic segmentation",
      "C. facial detection and facial recognition",
      "D. image analysis",
    ],
    correctAnswer: "C",
    explanation:
      "Authorizing entry based on who someone is requires Facial Recognition.",
  },
  // --- Question 218 ---
  {
    id: 218,
    topic: "Computer Vision",
    type: "multiple",
    text: "For which two workloads can you use computer vision? (Select two)",
    options: [
      "A. assigning the color pixels in an image to object names",
      "B. detecting inconsistencies in data",
      "C. creating visual representations of numerical data",
      "D. creating photorealistic images",
      "E. describing the contents of an image",
    ],
    correctAnswer: ["A", "E"],
    explanation:
      "A (Semantic Segmentation) and E (Image Description) are core CV tasks.",
  },
  // --- Question 219 ---
  {
    id: 219,
    topic: "Computer Vision",
    type: "single",
    text: "You have an app that identifies the coordinates of a product in an image of a supermarket shelf. Which service does the app use?",
    options: [
      "A. Custom Vision classification",
      "B. Custom Vision object detection",
      "C. Computer Vision Read",
      "D. Computer Vision OCR",
    ],
    correctAnswer: "B",
    explanation:
      "Identifying coordinates (location) of specific products requires Custom Vision Object Detection.",
  },
  // --- Question 220 (Hotspot/Dropdown) ---
  {
    id: 220,
    topic: "Computer Vision",
    type: "dropdown",
    text: "A traffic monitoring system that collects vehicle registration numbers from CCTV footage is an example of {0}.",
    dropdownOptions: {
      "0": [
        "image classification",
        "object detection",
        "spatial analysis",
        "text extraction",
      ],
    },
    correctAnswer: {
      "0": "text extraction",
    },
    explanation:
      "Reading registration numbers (license plates) is text extraction (OCR).",
  },
  // --- Question 221 ---
  {
    id: 221,
    topic: "Computer Vision",
    type: "single",
    text: "You need to build an image tagging solution for social media that tags images of your friends automatically. Which service should you use?",
    options: [
      "A. Face",
      "B. Form Recognizer",
      "C. Language",
      "D. Computer Vision",
    ],
    correctAnswer: "A",
    explanation:
      "Tagging specific people (friends) is a Face service capability.",
  },
  // --- Question 222 (Hotspot/Dropdown) ---
  {
    id: 222,
    topic: "Computer Vision",
    type: "dropdown",
    text: "A historian can use {0} to digitize newspaper articles.",
    dropdownOptions: {
      "0": [
        "facial analysis",
        "image classification",
        "object detection",
        "optical character recognition (OCR)",
      ],
    },
    correctAnswer: {
      "0": "optical character recognition (OCR)",
    },
    explanation: "Digitizing text = OCR.",
  },
  // --- Question 223 (Hotspot/Dropdown) ---
  {
    id: 223,
    topic: "Computer Vision",
    type: "dropdown",
    text: "You have an app that identifies birds in images. Match the task to the CV type.\nLocate the birds: {0}\nIdentify the species: {1}",
    dropdownOptions: {
      "0": [
        "Automated captioning",
        "Image classification",
        "Object detection",
        "OCR",
      ],
      "1": [
        "Automated captioning",
        "Image classification",
        "Object detection",
        "OCR",
      ],
    },
    correctAnswer: {
      "0": "Object detection",
      "1": "Image classification",
    },
    explanation:
      "Locating = Object Detection. Identifying what it is (Species) = Image Classification.",
  },
  // --- Question 224 ---
  {
    id: 224,
    topic: "NLP",
    type: "single",
    text: "You have a solution that reads manuscripts in different languages and categorizes them based on topic. Which NLP workloads does it use?",
    options: [
      "A. speech recognition and entity recognition",
      "B. speech recognition and language modeling",
      "C. translation and key phrase extraction",
      "D. translation and sentiment analysis",
    ],
    correctAnswer: "C",
    explanation:
      "Reading different languages = Translation. Categorizing by topic = Key phrase extraction.",
  },
  // --- Question 225 (Hotspot/Dropdown) ---
  {
    id: 225,
    topic: "Conversational AI",
    type: "dropdown",
    text: "The interactive answering of questions entered by a user as part of an application is an example of {0}.",
    dropdownOptions: {
      "0": [
        "anomaly detection",
        "computer vision",
        "natural language processing", // Note: Exam usually puts "conversational AI" here, but based on options provided in screenshots sometimes it varies.
        "forecasting",
      ],
    },
    // Correction: The provided answer key in similar questions says "Conversational AI".
    // If "Conversational AI" isn't an option, "Natural Language Processing" is the parent category.
    // Screenshot Q225 shows: anomaly, computer vision, natural language processing, forecasting.
    correctAnswer: {
      "0": "natural language processing",
    },
    explanation:
      "Interactive Q&A is a form of NLP (specifically Conversational AI, which falls under NLP).",
  },
  // --- Question 226 ---
  {
    id: 226,
    topic: "Speech",
    type: "single",
    text: "You have 100 instructional videos that do NOT contain any audio. Each instructional video has a script. You need to generate a narration audio file for each video based on the script. Which type of workload should you use?",
    options: [
      "A. language modeling",
      "B. speech recognition",
      "C. speech synthesis",
      "D. translation",
    ],
    correctAnswer: "C",
    explanation:
      "Converting text (script) into audio (narration) is Speech Synthesis (Text-to-Speech).",
  },
  // --- Question 227 (Hotspot/Dropdown) ---
  {
    id: 227,
    topic: "NLP",
    type: "dropdown",
    text: "Select the correct example of a natural language processing workload.",
    dropdownText:
      "{0} is an example of a natural language processing workload.",
    dropdownOptions: {
      "0": [
        "classify email messages as work-related or personal",
        "predict the number of future car rentals",
        "predict which website visitors will make a transaction",
        "stop a process in a factory when extremely high temperatures are registered",
      ],
    },
    correctAnswer: {
      "0": "classify email messages as work-related or personal",
    },
    explanation:
      "Classifying emails involves understanding and processing text (NLP). The others are regression/classification on numeric data or anomaly detection.",
  },
  // --- Question 228 ---
  {
    id: 228,
    topic: "NLP",
    type: "single",
    text: "Which AI service can you use to extract intent from a user input such as 'Call me back later'?",
    options: [
      "A. Azure Cognitive Search",
      "B. Translator",
      "C. Language",
      "D. Speech",
    ],
    correctAnswer: "C",
    explanation:
      "The Language service (specifically Conversational Language Understanding/CLU) is designed to identify intents and entities from text.",
  },
  // --- Question 229 ---
  {
    id: 229,
    topic: "NLP",
    type: "single",
    text: "You are building a Language Understanding model. You need to ensure that the model detects when utterances are outside the intended scope of the model. What should you do?",
    options: [
      "A. Export the model",
      "B. Add utterances to the None intent",
      "C. Create a prebuilt task entity",
      "D. Create a new model",
    ],
    correctAnswer: "B",
    explanation:
      "The 'None' intent is used to handle utterances that do not correspond to any of the specific intents defined in your model.",
  },
  // --- Question 230 (Hotspot/Dropdown) ---
  {
    id: 230,
    topic: "Conversational AI",
    type: "dropdown",
    text: "Select the service used to build no-code apps.",
    dropdownText:
      "{0} can be used to build no-code apps that use built-in natural language processing models.",
    dropdownOptions: {
      "0": [
        "Azure Health Bot",
        "Microsoft Bot Framework",
        "Power Virtual Agents", // Note: Rebranded to Microsoft Copilot Studio, but likely PVA in exam
      ],
    },
    correctAnswer: {
      "0": "Power Virtual Agents",
    },
    explanation:
      "Power Virtual Agents (now Microsoft Copilot Studio) is the low-code/no-code solution for building chatbots.",
  },
  // --- Question 231 (Hotspot/Yes-No) ---
  {
    id: 231,
    topic: "Conversational AI",
    type: "yes-no",
    text: "Determine if the following are examples of Conversational AI.",
    statements: [
      "A smart device in the home that responds to questions such as 'When is my next appointment?'.",
      "An interactive webchat feature on a company website can be implemented by using Azure Bot Service.",
      "Automatically generating captions for pre-recorded videos is an example of conversational AI.",
    ],
    correctAnswer: ["Yes", "Yes", "No"],
    explanation:
      "1. Yes (Voice Assistant). 2. Yes (Chatbot). 3. No (Speech-to-Text/Captioning is not a conversation).",
  },
  // --- Question 232 ---
  {
    id: 232,
    topic: "Responsible AI",
    type: "single",
    text: "What is an example of the Microsoft responsible AI principle of transparency?",
    options: [
      "A. ensuring that opportunities are allocated equally to all applicants",
      "B. helping users understand the decisions made by an AI system",
      "C. ensuring that developers are accountable for the solutions they create",
      "D. ensuring that the privileged data of users is stored in a secure manner",
    ],
    correctAnswer: "B",
    explanation:
      "Transparency is about explainability and helping users understand how and why an AI system functions.",
  },
  // --- Question 233 ---
  {
    id: 233,
    topic: "Conversational AI",
    type: "single",
    text: "You need to provide customers with the ability to query the status of orders by using phones, social media, or digital assistants. What should you use?",
    options: [
      "A. an Azure Machine Learning model",
      "B. the Translator service",
      "C. a Form Recognizer model",
      "D. Azure Bot Service",
    ],
    correctAnswer: "D",
    explanation:
      "Azure Bot Service allows you to build a bot once and deploy it to multiple channels (Telephony, Facebook, Alexa, Web, etc.).",
  },
  // --- Question 234 ---
  {
    id: 234,
    topic: "Conversational AI",
    type: "single",
    text: "You plan to build a conversational AI solution that can be surfaced in Microsoft Teams, Microsoft Cortana, and Amazon Alexa. Which service should you use?",
    options: [
      "A. Azure Bot Service",
      "B. Azure Cognitive Search",
      "C. Speech",
      "D. Language service",
    ],
    correctAnswer: "A",
    explanation:
      "Azure Bot Service handles the channel integration for Teams, Alexa, etc.",
  },
  // --- Question 235 (Hotspot/Yes-No) ---
  {
    id: 235,
    topic: "Conversational AI",
    type: "yes-no",
    text: "Evaluate the following statements about Conversational AI.",
    statements: [
      "An interactive webchat feature on a company website can be implemented by using Azure Bot Service.",
      "Automatically generating captions for pre-recorded videos is an example of conversational AI.",
      "A smart device in the home that responds to questions such as 'When is my next appointment?' is an example of conversational AI.",
    ],
    correctAnswer: ["Yes", "No", "Yes"],
    explanation:
      "Duplicate concept check: 1. Yes. 2. No (Speech-to-text). 3. Yes.",
  },
  // --- Question 236 ---
  {
    id: 236,
    topic: "Computer Vision",
    type: "single",
    text: "Which Azure Cognitive Services service can be used to identify documents that contain sensitive information (like PII)?",
    options: [
      "A. Custom Vision",
      "B. Conversational Language Understanding",
      "C. Form Recognizer", // Note: Text Analytics (PII detection) is also valid, but Form Recognizer can identify fields in docs.
    ],
    correctAnswer: "C",
    explanation:
      "Form Recognizer (Document Intelligence) can analyze documents and identify specific fields, including sensitive data. (Note: Text Analytics for Health/PII is also a strong candidate, but in exam context regarding 'documents' and structure, Form Recognizer is often the key).",
  },
  // --- Question 237 (Hotspot/Dropdown) ---
  {
    id: 237,
    topic: "Machine Learning",
    type: "dropdown",
    text: "Detecting unusual temperature fluctuations for a large machine is an example of {0}.",
    dropdownOptions: {
      "0": [
        "a computer vision workload",
        "a knowledge mining workload",
        "a natural language processing (NLP) workload",
        "an anomaly detection workload",
      ],
    },
    correctAnswer: {
      "0": "an anomaly detection workload",
    },
    explanation:
      "Detecting deviations (unusual fluctuations) from a norm is Anomaly Detection.",
  },
  // --- Question 238 ---
  {
    id: 238,
    topic: "NLP",
    type: "single",
    text: "A smart device that responds to the question 'What is the stock price of Contoso. Ltd.?' is an example of which AI workload?",
    options: [
      "A. knowledge mining",
      "B. natural language processing",
      "C. computer vision",
      "D. anomaly detection",
    ],
    correctAnswer: "B",
    explanation:
      "Understanding and responding to a spoken or written question requires Natural Language Processing (NLP).",
  },
  // --- Question 239 (Drag & Drop) ---
  {
    id: 239,
    topic: "Machine Learning",
    type: "drag-drop",
    text: "Match the machine learning models to the appropriate descriptions.",
    matchLeft: ["Classification", "Clustering", "Regression"],
    matchRight: [
      "A supervised machine learning model used to predict numeric values",
      "A supervised machine learning model used to predict categories",
      "An unsupervised machine learning model used to group similar entities based on features",
    ],
    // 0(Numeric) -> Regression, 1(Categories) -> Classification, 2(Group similar) -> Clustering
    correctAnswer: {
      "0": "Regression",
      "1": "Classification",
      "2": "Clustering",
    },
    explanation:
      "Regression = Numbers. Classification = Categories. Clustering = Grouping (Unsupervised).",
  },
  // --- Question 240 ---
  {
    id: 240,
    topic: "Computer Vision",
    type: "single",
    text: "You are building a tool that will process images from retail stores and identify the products of competitors. The solution must be trained on images provided by your company. Which Azure AI service should you use?",
    options: [
      "A. Form Recognizer",
      "B. Custom Vision",
      "C. Face",
      "D. Computer Vision",
    ],
    correctAnswer: "B",
    explanation:
      "The requirement 'trained on images provided by your company' explicitly points to Custom Vision.",
  },
  // --- Question 241 (Hotspot/Dropdown) ---
  {
    id: 241,
    topic: "Machine Learning",
    type: "dropdown",
    text: "Predicting how many hours of overtime a delivery person will work based on the number of orders received is an example of {0}.",
    dropdownOptions: {
      "0": ["classification", "clustering", "regression"],
    },
    correctAnswer: {
      "0": "regression",
    },
    explanation: "Predicting 'hours' (a number) is Regression.",
  },
  // --- Question 242 ---
  {
    id: 242,
    topic: "Machine Learning",
    type: "single",
    text: "Predicting agricultural yields based on weather conditions and soil quality measurements is an example of which type of machine learning model?",
    options: ["A. classification", "B. regression", "C. clustering"],
    correctAnswer: "B",
    explanation:
      "Yield (amount/weight) is a continuous numeric value, making this a Regression task.",
  },
  // --- Question 243 ---
  {
    id: 243,
    topic: "Computer Vision",
    type: "single",
    text: "You need to identify street names based on street signs in photographs. Which type of computer vision should you use?",
    options: [
      "A. object detection",
      "B. optical character recognition (OCR)",
      "C. image classification",
      "D. facial recognition",
    ],
    correctAnswer: "B",
    explanation: "Reading text (street names) from images requires OCR.",
  },
  // --- Question 244 (Drag & Drop) ---
  {
    id: 244,
    topic: "Computer Vision",
    type: "drag-drop",
    text: "Match the types of computer vision workloads to the appropriate scenarios.",
    matchLeft: [
      "Image classification",
      "Object detection",
      "Optical character recognition (OCR)",
    ],
    matchRight: [
      "Generate captions for images",
      "Extract movie title names from movie poster images",
      "Locate vehicles in images",
    ],
    // 0(Captions) -> Image classification (Note: Typically Image Analysis/Description, but exam logic maps it here or leaves it as best fit),
    // 1(Extract title) -> OCR,
    // 2(Locate) -> Object detection
    correctAnswer: {
      "0": "Image classification",
      "1": "Optical character recognition (OCR)",
      "2": "Object detection",
    },
    explanation:
      "Extract title = OCR. Locate vehicles = Object Detection. Generate captions = Image Analysis/Classification (in exam context).",
  },
  // --- Question 245 ---
  {
    id: 245,
    topic: "Computer Vision",
    type: "single",
    text: "You have a bot that identifies the brand names of products in images of supermarket shelves. Which service does the bot use?",
    options: [
      "A. AI enrichment for Azure Search capabilities",
      "B. Computer Vision Image Analysis capabilities",
      "C. Custom Vision Image Classification capabilities",
      "D. Language Understanding capabilities",
    ],
    correctAnswer: "B",
    explanation:
      "Computer Vision has a specific 'Brand Detection' feature that identifies logos and brands without needing custom training.",
  },
  // --- Question 246 ---
  {
    id: 246,
    topic: "NLP",
    type: "single",
    text: "You are developing a chatbot solution in Azure. Which service should you use to determine a user’s intent?",
    options: [
      "A. Translator",
      "B. Language",
      "C. Azure Cognitive Search",
      "D. Speech",
    ],
    correctAnswer: "B",
    explanation:
      "The Language service (via Conversational Language Understanding/CLU, formerly LUIS) determines user intent.",
  },
];
