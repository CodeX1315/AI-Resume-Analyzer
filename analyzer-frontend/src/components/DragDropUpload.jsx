import { useState } from "react";

export default function DragDropUpload({ onFileSelect }) {
  const [file, setFile] = useState(null);

  const handleFile = (selectedFile) => {
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      onFileSelect(selectedFile);
    } else {
      alert("Please upload a PDF file");
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input
        type="file"
        accept="application/pdf"
        className="hidden"
        id="resumeUpload"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <label
        htmlFor="resumeUpload"
        className="cursor-pointer text-blue-600 font-medium"
      >
        Click to upload or drag & drop your resume
      </label>

      <p className="text-xs text-gray-400 mt-2">PDF only</p>

      {/* ✅ Show selected file name */}
      {file && (
        <p className="mt-3 text-sm text-green-600 font-medium">
          Selected File: {file.name}
        </p>
      )}
    </div>
  );
}
