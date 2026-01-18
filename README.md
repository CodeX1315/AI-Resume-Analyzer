# AI-Powered Resume Analyzer & Optimizer

A full-stack web application that uses AI to analyze resumes, compare them with job descriptions, calculate ATS match scores, extract important keywords, and generate personalized resume improvement suggestions. The application also provides resume preview and download functionality in PDF and DOCX formats.

---

## 📌 Features

- Upload resume and extract text  
- Compare resume with Job Description  
- ATS match score calculation  
- Keyword extraction and analysis  
- AI-generated resume improvement suggestions  
- Resume preview with font customization  
- Export resume as PDF and DOCX  
- Responsive modern UI  

---

## 🏗️ System Architecture

Frontend (React + Tailwind CSS)
|
| REST API Calls
|
Backend (Spring Boot)
|
| AI Model API (LLM)
|
AI Response (Score + Keywords + Suggestions)

## 🛠️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- HTML2Canvas  
- jsPDF  

### Backend
- Java Spring Boot  
- REST APIs  
- Maven  

### AI Integration
- LLM API (Gemini / OpenAI)

### File Processing
- PDF Export (jsPDF)  
- DOCX Export (docx library)

---

## 📂 Project Structure

ai-resume-analyzer/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│
├── backend/
│ ├── src/main/java/com/resume/
│ │ ├── controller/
│ │ ├── service/
│ │ └── model/
│ └── src/main/resources/
│ └── application.properties
│
└── README.md

## ⚙️ Installation & Setup

### Prerequisites
- Node.js  
- Java 17+  
- Maven  
- Git  

---

### 1. Clone Repository
#bash
git clone https://github.com/your-username/ai-resume-analyzer.git
cd ai-resume-analyzer

2. Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs at:
http://localhost:5173

3. Backend Setup
bash
Copy code
cd backend
mvn spring-boot:run
Backend runs at:
http://localhost:8080
🔑 Environment Variables
In backend/src/main/resources/application.properties:
ai.api.key=YOUR_API_KEY
⚠️ Never push API keys to GitHub.

🧠 How It Works
User uploads or pastes resume text

User optionally adds Job Description

Backend sends data to AI API

AI returns:

ATS Match Score

Extracted Keywords

Resume Improvement Suggestions

Frontend displays results

User previews and downloads optimized resume

📸 Screenshots
(Add your project screenshots here)
<img width="1887" height="1025" alt="image" src="https://github.com/user-attachments/assets/1c2bb529-1b1c-4b34-8485-38d28c744076" />
<img width="1883" height="966" alt="image" src="https://github.com/user-attachments/assets/c1ee29b8-42a4-490f-a73a-1daa1d32469d" />
<img width="1755" height="1685" alt="image" src="https://github.com/user-attachments/assets/6e947929-cf1d-4580-95d0-ab2c2136303e" />



🚀 Future Enhancements
User authentication

Multiple resume templates

Drag & drop resume editor

Resume history storage

Cloud deployment

👨‍💻 Author
Dipak Mahade
Java Full Stack Developer

LinkedIn: 
https://www.linkedin.com/in/dipak-mahade

⭐ Support
If you find this project useful, give it a ⭐ on GitHub!
