import { useState } from "react";
import { extractTextFromPdf } from "../api/pdfApi";

export default function TextExtractPanel() {
  const [extractedText, setExtractedText] = useState("");

  const handleExtractText = async (pdfFile) => {
    try {
      const text = await extractTextFromPdf(pdfFile);
      setExtractedText(text);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
  };

  return (
    <div>
      <PDFViewer onTextExtracted={handleExtractText} />
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {extractedText || "Extracted Hindi text will appear here..."}
      </div>
    </div>
  );
}