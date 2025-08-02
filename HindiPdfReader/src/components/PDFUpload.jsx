import { useState } from "react";

export function PDFUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("http://localhost:8080/upload", formData);
    //will return id
    //save that pdf in mongodb database
    //Route to pdfViewer 

  };

  return (
    <div>   
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
