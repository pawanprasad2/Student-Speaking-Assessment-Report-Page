Student Speaking Assessment Report

A simple Student Speaking Assessment Report Page that displays a student’s speaking performance similar to platforms like IELTS / SpeechAce.
This project focuses on UI clarity, data handling, and feedback logic, as required in the assignment.

📌 Project Overview

This is a functional prototype that shows:

Overall speaking score (out of 9)

Skill-wise scores (Pronunciation, Fluency, Vocabulary, Grammar)

Graphical visualization of scores

Descriptive feedback based on score ranges

⚠️ This project does NOT perform speech evaluation.
All scores are predefined and used only for display purposes.

🎯 Assignment Objectives Covered

✔ Clean and readable UI
✔ Correct display of scores
✔ Graphical representation (Radar chart)
✔ Dynamic feedback logic
✔ Simple backend data handling
✔ No database usage
✔ Clear project structure

🧱 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Chart.js (Radar Chart)

Backend

Node.js

Express.js

In-memory JavaScript data (No Database)

🚫 What Is NOT Included (As Per Assignment)

❌ Database (MongoDB / SQL / Firebase)

❌ Authentication / Login

❌ Admin panel

❌ AI / Speech processing

❌ Deployment

❌ Per-question transcript

📂 Project Structure
student-speaking-report/
│
├── backend/
│   ├── data.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ScoreSummary.jsx
│   │   │   ├── ScoreChart.jsx
│   │   │   └── Feedback.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md

📊 Data Source (Important)

This project uses a static in-memory JavaScript object as the data source.

Example:

{
  overallScore: 7,
  scores: {
    pronunciation: 7,
    fluency: 6.5,
    vocabulary: 7.5,
    grammar: 6
  }
}


✔ No database is used
✔ Fully compliant with assignment instructions

🧠 Feedback Logic

Descriptive feedback is generated automatically based on the overall score:

Score Range	Feedback
≥ 8	Excellent performance with strong control
6 – 7	Good performance with minor inaccuracies
< 6	Needs improvement

If the score values change, the feedback updates automatically.

🚀 How to Run the Project
1️⃣ Start Backend
cd backend
npm install
node server.js


Backend runs on: http://localhost:5000

2️⃣ Start Frontend
cd frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

🖥️ Final Output

The application displays:

Speaking Assessment Report

Summary of Scores

Skill-wise breakdown

Radar chart visualization

Descriptive feedback section

📝 Notes for Evaluators

This is a prototype, not a production system

Backend is intentionally simple

Focus is on UI, logic, and clarity

Partial completion was allowed; this submission covers all required parts

✅ Conclusion

This project demonstrates:

Practical frontend development skills

Logical thinking

Clean code structure

Ability to follow instructions precisely

👤 Author

Pawan Prasad
MERN Stack Developer
