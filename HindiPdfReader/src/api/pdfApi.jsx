import axios from "axios";

const API_URL = "http://localhost:8080/api/ocr"; // Spring Boot endpoint

export const extractTextFromPdf = async (pdfFile) => {
  const formData = new FormData();
  formData.append("file", pdfFile);

  const response = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.extractedText;
};