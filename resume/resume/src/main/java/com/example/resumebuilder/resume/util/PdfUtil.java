package com.example.resumebuilder.resume.util;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.web.multipart.MultipartFile;
import java.io.InputStream;

public class PdfUtil {

    public static String extractText(MultipartFile file) throws Exception {
        InputStream inputStream = file.getInputStream();
        PDDocument document = PDDocument.load(inputStream);
        PDFTextStripper stripper = new PDFTextStripper();
        String text = stripper.getText(document);
        document.close();
        return text;
    }
}
