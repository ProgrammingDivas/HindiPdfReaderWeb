import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function PDFViewer({ onTextExtracted }) {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {pdfFile && (
        <button onClick={() => onTextExtracted(pdfFile)}>
          Extract Hindi Text
        </button>
      )}
    </div>
  );
}