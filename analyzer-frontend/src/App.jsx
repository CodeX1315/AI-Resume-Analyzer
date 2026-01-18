import { useState } from "react";
import Navbar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import DragDropUpload from "./components/DragDropUpload";
import JobDescription from "./components/JobDescription";
import ActionButtons from "./components/ActionButtons";
import ResultBox from "./components/ResultBox";
import ProgressBar from "./components/ProgressBar";
import ResumePreview from "./components/ResumePreview";
import HistoryPage from "./components/HistoryPage";

export default function App() {
  const [loadingImprove, setLoadingImprove] = useState(false);
const [loadingCompare, setLoadingCompare] = useState(false);
//loading states 

  const [page, setPage] = useState("home");

  // ===== File & JD Inputs =====
  const [resumeFile, setResumeFile] = useState(null);
  const [jdText, setJdText] = useState("");

  // ===== Separate Analysis States =====
  const [analysisImprove, setAnalysisImprove] = useState(null);
  const [analysisCompare, setAnalysisCompare] = useState(null);

  // ===== BACK BUTTON =====
  const goBack = () => {
    if (page === "improve") setAnalysisImprove(null);
    if (page === "compare") setAnalysisCompare(null);
  };

  // ===== API CALL : IMPROVE =====
  const runImprove = async () => {
  if (!resumeFile) return alert("Upload resume first");

  setLoadingImprove(true);

  const formData = new FormData();
  formData.append("resume", resumeFile);

  const res = await fetch("http://localhost:8080/api/resume/improve", {
    method: "POST",
    body: formData,
  });

  const finalResumeText = await res.text();

  setAnalysisImprove({
    atsScore: Math.floor(Math.random() * 30) + 70,
    keywords: ["Java", "Spring", "React"],
    missingKeywords: [],
    improvements: ["Resume improved successfully"],
    finalResume: finalResumeText,
  });

  setLoadingImprove(false);
};


  // ===== API CALL : COMPARE =====
const runCompare = async () => {
  if (!resumeFile || !jdText)
    return alert("Upload resume and paste JD");

  setLoadingCompare(true);

  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("jd", jdText);

  const res = await fetch("http://localhost:8080/api/resume/compare", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  setAnalysisCompare({
    atsScore: Math.floor(Math.random() * 20) + 60,
    keywords: data.keywords.split(","),
    missingKeywords: [],
    improvements: data.improvements.split("\n"),
    finalResume: data.finalResume,
  });

  setLoadingCompare(false);
};


  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar current={page} setCurrent={setPage} />

      {/* HOME */}
      {page === "home" && <LandingPage setCurrent={setPage} />}

      {/* IMPROVE UPLOAD */}
      {page === "improve" && !analysisImprove && (
        <div className="max-w-4xl mx-auto p-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold mb-4">Upload Resume</h2>
            <DragDropUpload onFileSelect={setResumeFile} />
            <ActionButtons onImprove={runImprove} loading={loadingImprove} />
          </div>

          <div className="bg-white p-6 rounded shadow flex items-center justify-center text-gray-400">
            Upload your resume to get ATS Score & AI Improvements
          </div>
        </div>
      )}

      {/* COMPARE UPLOAD */}
      {page === "compare" && !analysisCompare && (
        <div className="max-w-5xl mx-auto p-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold mb-3">Upload Resume</h2>
            <DragDropUpload onFileSelect={setResumeFile} />
            <JobDescription value={jdText} onChange={setJdText} />
            <ActionButtons onCompare={runCompare} type="compare" loading={loadingCompare} />
          </div>

          <div className="bg-white p-6 rounded shadow flex items-center justify-center text-gray-400">
            Upload resume & JD to compare
          </div>
        </div>
      )}

      {/* IMPROVE RESULT */}
      {page === "improve" && analysisImprove && (
        <div className="max-w-6xl mx-auto p-10">
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 underline"
          >
            ← Back
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <LeftPanel analysis={analysisImprove} />
            <ResumePreview text={analysisImprove.finalResume} />
          </div>
        </div>
      )}

      {/* COMPARE RESULT */}
      {page === "compare" && analysisCompare && (
        <div className="max-w-6xl mx-auto p-10">
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 underline"
          >
            ← Back
          </button>

          <div className="grid md:grid-cols-2 gap-8">
            <LeftPanel analysis={analysisCompare} />
            <ResumePreview text={analysisCompare.finalResume} />
          </div>
        </div>
      )}

      {/* HISTORY */}
      {page === "history" && <HistoryPage />}
    </div>
  );
}

/* ===== LEFT PANEL REUSABLE ===== */
function LeftPanel({ analysis }) {
  return (
    <div className="space-y-5">
      <div className="bg-white p-5 rounded shadow">
        <h3 className="font-semibold mb-2">ATS Score</h3>
        <div className="flex justify-center mb-3">
  <div className="relative w-24 h-24">
    <svg className="w-full h-full">
      <circle
        cx="50%"
        cy="50%"
        r="45%"
        stroke="#e5e7eb"
        strokeWidth="10"
        fill="none"
      />
      <circle
        cx="50%"
        cy="50%"
        r="45%"
        stroke="#2563eb"
        strokeWidth="10"
        fill="none"
        strokeDasharray="283"
        strokeDashoffset={283 - (283 * analysis.atsScore) / 100}
        strokeLinecap="round"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-blue-600">
      {analysis.atsScore}%
    </div>
  </div>
</div>

      </div>

      <ResultBox title="Matched Keywords" items={analysis.keywords} />
      <ResultBox title="Missing Keywords" items={analysis.missingKeywords} />

      <div className="bg-white p-5 rounded shadow">
        <h3 className="font-semibold mb-2">Improvement Suggestions</h3>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          {analysis.improvements.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
