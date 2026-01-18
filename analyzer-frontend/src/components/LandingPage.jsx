// export default function LandingPage({ setCurrent }) {
//   return (
//     <div className="bg-gray-50 min-h-screen">

//       <div className="max-w-5xl mx-auto text-center py-20">
//         <h1 className="text-4xl font-bold mb-4">
//           Revolutionize Your Job Search with AI-Powered Resumes
//         </h1>
//         <p className="text-gray-600 mb-10">
//           Instant ATS scoring, keyword optimization, and personalized resume improvements.
//         </p>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white p-6 rounded shadow">
//             <h2 className="font-semibold mb-3">Improve Resume</h2>
//             <p className="text-sm text-gray-600 mb-4">
//               Upload your resume and get ATS score, keywords and AI improvements.
//             </p>
//             <button
//               onClick={() => setCurrent("improve")}
//               className="bg-blue-600 text-white px-4 py-2 rounded w-full"
//             >
//               Get Started
//             </button>
//           </div>

//           <div className="bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer">
//             <h2 className="font-semibold mb-3">Compare Resume</h2>
//             <p className="text-sm text-gray-600 mb-4">
//               Compare your resume with a Job Description and optimize for JD.
//             </p>
//             <button
//               onClick={() => setCurrent("compare")}
//               className="bg-blue-600 text-white px-4 py-2 rounded w-full"
//             >
//               Compare Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function LandingPage({ setCurrent }) {
//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
//       {/* Hero Section */}
//       <div className="max-w-6xl mx-auto text-center py-20 px-6">
//         <h1 className="text-5xl font-bold mb-6 text-gray-900">
//           Revolutionize Your Job Search with AI-Powered Resumes
//         </h1>
//         <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
//           Our intelligent analyzer provides instant ATS scoring, keyword optimization, and personalized suggestions to help you land your dream job.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* Improve Card */}
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
//             <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//               <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-semibold mb-3 text-left">Improve Resume</h2>
//             <p className="text-gray-600 mb-6 text-left">
//               Upload your resume and get an ATS score, keyword extraction, improvement tips, and an AI-improved resume you can download.
//             </p>
//             <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
//               <li className="flex items-start gap-2">
//                 <span className="text-blue-600 mt-1">•</span>
//                 <span>ATS Score Analysis</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-blue-600 mt-1">•</span>
//                 <span>Keyword Optimization</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-blue-600 mt-1">•</span>
//                 <span>Personalized Tips</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-blue-600 mt-1">•</span>
//                 <span>AI-Enhanced Download</span>
//               </li>
//             </ul>
//             <button
//               onClick={() => setCurrent("improve")}
//               className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
//             >
//               Get Started
//             </button>
//           </div>

//           {/* Compare Card */}
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
//             <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
//               <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//               </svg>
//             </div>
//             <h2 className="text-2xl font-semibold mb-3 text-left">Compare Resume</h2>
//             <p className="text-gray-600 mb-6 text-left">
//               Upload your resume and a job description to compare match rate, keywords, tailored improvements, and an AI-improved resume optimized for the JD.
//             </p>
//             <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
//               <li className="flex items-start gap-2">
//                 <span className="text-cyan-600 mt-1">•</span>
//                 <span>Match Rate Analysis</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-cyan-600 mt-1">•</span>
//                 <span>JD-Specific Keywords</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-cyan-600 mt-1">•</span>
//                 <span>Tailored Suggestions</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-cyan-600 mt-1">•</span>
//                 <span>Optimized for Job Description</span>
//               </li>
//             </ul>
//             <button
//               onClick={() => setCurrent("compare")}
//               className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium"
//             >
//               Compare Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-white py-20 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-16">Key Features to Boost Your Resume</h2>
          
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold mb-2">ATS Score Optimization</h3>
//               <p className="text-sm text-gray-600">Get an instant score that tells you how well your resume matches job descriptions, ensuring it passes applicant tracking systems.</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold mb-2">Keyword Extraction & Analysis</h3>
//               <p className="text-sm text-gray-600">Identify crucial keywords and phrases from job descriptions to strategically integrate them into your resume, increasing visibility.</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold mb-2">AI-Powered Improvement Suggestions</h3>
//               <p className="text-sm text-gray-600">Receive tailored, actionable feedback from our AI to refine your resume's content, formatting, and impact.</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold mb-2">Seamless Document Downloads</h3>
//               <p className="text-sm text-gray-600">Effortlessly download your optimized resume in multiple formats like PDF and DOCX, ready for immediate application.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center text-white">
//           <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Resume?</h2>
//           <p className="text-xl mb-8 opacity-90">Upload your resume now and let our AI analyzer instantly transform it for success.</p>
//           <button
//             onClick={() => setCurrent("improve")}
//             className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//           >
//             Upload Your Resume Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function LandingPage({ setCurrent }) {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center py-20 px-6">
        
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Revolutionize Your Job Search with AI-Powered Resumes
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Instant ATS scoring, keyword optimization, and personalized resume improvements.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Improve Resume Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Improve Resume
            </h2>

            <p className="text-gray-600 mb-6">
              Upload your resume and get ATS score, keywords, and AI improvements.
            </p>

            <button
              onClick={() => setCurrent("improve")}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition"
            >
              Get Started
            </button>
          </div>

          {/* Compare Resume Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              Compare Resume
            </h2>

            <p className="text-gray-600 mb-6">
              Compare your resume with a Job Description and optimize for JD.
            </p>

            <button
              onClick={() => setCurrent("compare")}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition"
            >
              Compare Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
