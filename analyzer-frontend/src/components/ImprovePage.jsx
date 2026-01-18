import { useState } from "react";
import DragDropUpload from "./DragDropUpload";
import ResultPage from "./ResultPage";

export default function ImprovePage() {
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImprove = async () => {
    if (!resumeFile) return alert("Please upload a resume");

    setLoading(true);

    const formData = new FormData();
    formData.append("resume", resumeFile);

    try {
      const res = await fetch("http://localhost:8080/api/resume/improve", {
        method: "POST",
        body: formData,
      });

      const finalResumeText = await res.text();

      setResult({
        atsScore: Math.floor(Math.random() * 30) + 70,
        keywords: ["Java", "Spring Boot", "React", "Docker", "AWS"],
        missingKeywords: [],
        improvements: [
          "Add quantifiable achievements with metrics",
          "Strengthen action verbs in experience section",
          "Include relevant certifications",
          "Optimize keywords for ATS compatibility"
        ],
        finalResume: finalResumeText,
      });
    } catch (error) {
      alert("Error improving resume. Please try again.");
    }

    setLoading(false);
  };

  if (result) {
    return <ResultPage result={result} onBack={() => setResult(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Upload & Improve Your Resume</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Upload */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Upload Your Resume</h2>
            <DragDropUpload onFileSelect={setResumeFile} selectedFile={resumeFile} />
            
            <button
              onClick={handleImprove}
              disabled={loading || !resumeFile}
              className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {loading ? "Analyzing..." : "Improve"}
            </button>

            <div className="mt-6 p-4 bg-gray-50 rounded text-sm text-gray-600">
              <p className="font-medium mb-1">API REQUEST: POST</p>
              <p className="text-xs text-gray-500">https://api.resumeiq.com/v1/analyze/improve</p>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="bg-white p-8 rounded-lg shadow flex flex-col items-center justify-center text-center">
            <svg className="w-24 h-24 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Upload your resume to get started</h3>
            <p className="text-gray-500">
              Once uploaded, click "Improve" to analyze your resume and receive AI-powered suggestions and an improved version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}