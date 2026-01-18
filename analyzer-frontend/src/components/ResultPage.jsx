export default function ResultPage({ result, onBack, isCompare = false }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Analysis */}
          <div className="space-y-6">
            {/* ATS Score */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4 text-lg">ATS Score {isCompare ? "(Match %)" : ""}</h3>
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      stroke="#2563eb"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * result.atsScore) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">{result.atsScore}%</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600">
                {isCompare ? "ATS Match Score" : "ATS Score"}
              </p>
            </div>

            {/* Matched Keywords */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Matched Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {result.keywords.map((k, i) => (
                  <span key={i} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Improvement Suggestions */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">
                Improvement Suggestions {isCompare ? "(Contextualized to JD)" : ""}
              </h3>
              
              <div className="space-y-3">
                {result.improvements.map((imp, i) => (
                  <details key={i} className="border border-gray-200 rounded-lg">
                    <summary className="cursor-pointer p-3 hover:bg-gray-50 font-medium text-sm">
                      {imp.split(':')[0] || `Suggestion ${i + 1}`}
                    </summary>
                    <div className="p-3 pt-0 text-sm text-gray-600">
                      {imp.split(':')[1] || imp}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Resume Preview */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4 text-lg">
              AI Improved Resume Preview {isCompare ? "(Tailored to JD)" : ""}
            </h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
                {result.finalResume}
              </pre>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download DOCX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}