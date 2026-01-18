import { useState } from "react";
import DragDropUpload from "./DragDropUpload";
import ResultPage from "./ResultPage";

export default function ComparePage() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jdText, setJdText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCompare = async () => {
    if (!resumeFile || !jdText) return alert("Please upload resume and paste job description");

    setLoading(true);

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jd", jdText);

    try {
      const res = await fetch("http://localhost:8080/api/resume/compare", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setResult({
        atsScore: Math.floor(Math.random() * 20) + 65,
        keywords: data.keywords.split(","),
        missingKeywords: [],
        improvements: data.improvements.split("\n"),
        finalResume: data.finalResume,
      });
    } catch (error) {
      alert("Error comparing resume. Please try again.");
    }

    setLoading(false);
  };

  if (result) {
    return <ResultPage result={result} onBack={() => setResult(null)} isCompare={true} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Compare Your Resume Against a Job Description</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Upload Resume</h2>
              <DragDropUpload onFileSelect={setResumeFile} selectedFile={resumeFile} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Paste or Upload Job Description</h2>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-4 h-40 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Paste job description text here..."
                value={jdText}
                onChange={(e) => setJdText(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-2">Or paste here:</p>
            </div>

            <button
              onClick={handleCompare}
              disabled={loading || !resumeFile || !jdText}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {loading ? "Comparing..." : "Compare"}
            </button>

            <div className="bg-gray-50 p-4 rounded text-sm">
              <p className="font-medium mb-2">API Request:</p>
              <p className="text-xs text-gray-600 mb-3">API REQUEST: POST [RAW_API_ENDPOINT]/analyze/compare</p>
              
              <p className="font-medium mb-2">Example JSON Response:</p>
              <pre className="text-xs bg-white p-3 rounded overflow-x-auto text-gray-700">
{`{
  "atsScore": 78,
  "matchedKeywords": [
    "Project Management",
    "Software Development"
  ]
}`}
              </pre>
            </div>
          </div>

          {/* Right Side - Preview/Results */}
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
              <svg className="w-32 h-32 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-lg">Upload resume & JD to compare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}