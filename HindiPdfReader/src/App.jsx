import { CssBaseline, Container, Typography } from "@mui/material";
import TextExtractPanel from "./components/TextExtractPanel";
import { PDFUpload } from "./components/PDFUpload";

export default function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Container maxWidth="md">
        {/* <Typography variant="h4" align="center" gutterBottom>
          Hindi PDF Text Extractor (OCR)
        </Typography> */}
        {/* <TextExtractPanel /> */}
        <PDFUpload/>
      </Container>
    </>
  );
}