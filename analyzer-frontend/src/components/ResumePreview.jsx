import { useState, useEffect, useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const fonts = ["Arial", "Times New Roman", "Georgia", "Poppins", "Inter"];

export default function ResumePreview({ text }) {
  const [content, setContent] = useState(text);
  const [font, setFont] = useState("Arial");
  const resumeRef = useRef();

  useEffect(() => {
    setContent(text);
  }, [text]);

  const sections = content.split("\n\n");

  const exportPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("Resume.pdf");
  };

  const exportDoc = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: sections.map((sec) =>
            new Paragraph({
              children: sec.split("\n").map((line, i) => [
                new TextRun({ text: line, break: i !== sec.split("\n").length - 1 }),
              ]).flat(),
            })
          ),
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Resume.docx");
    });
  };

  return (
    <div className="bg-white rounded shadow p-5 max-w-3xl mx-auto">
      {/* Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg">Resume Preview</h2>
        <div className="flex gap-2">
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            {fonts.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
          <button
            onClick={exportPDF}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          >
            Download PDF
          </button>
          <button
            onClick={exportDoc}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            Download Word
          </button>
        </div>
      </div>

      {/* Resume */}
      <div ref={resumeRef} className="p-6" style={{ fontFamily: font }}>
        {/* Header */}
        <div className="text-3xl font-bold mb-2">{content.split("\n")[0]}</div>
        <div className="text-sm mb-4">{content.split("\n")[1]}</div>

        {/* Sections */}
        <div className="space-y-4 text-sm">
          {sections.slice(1).map((sec, i) => (
            <SectionBlock key={i} text={sec} setContent={setContent} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionBlock({ text, setContent }) {
  const lines = text.split("\n");
  const title = lines[0];
  const body = lines.slice(1).join("\n");

  return (
    <div>
      <div className="font-semibold mb-1">{title}</div>
      <textarea
        className="w-full resize-none outline-none text-sm"
        rows={body.split("\n").length + 1}
        defaultValue={body}
      />
    </div>
  );
}
