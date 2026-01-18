import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export default function DownloadButtons({ text }) {
  if (!text) return null;

  // ===== PDF Download =====
  const downloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 10, 10);
    doc.save("improved_resume.pdf");
  };

  // ===== DOCX Download =====
  const downloadDOCX = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [new TextRun(text)]
            })
          ]
        }
      ]
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "improved_resume.docx");
  };

  return (
    <div className="flex gap-4 mt-3">
      <button
        onClick={downloadPDF}
        className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700"
      >
        Download PDF
      </button>

      <button
        onClick={downloadDOCX}
        className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
      >
        Download Word
      </button>
    </div>
  );
}
