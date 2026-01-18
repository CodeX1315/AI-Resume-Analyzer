package com.example.resumebuilder.resume.controller;

import com.example.resumebuilder.resume.service.AiService;
import com.example.resumebuilder.resume.util.PdfUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/analyze")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyzeController {

    @Autowired
    private AiService aiService;

    // Existing JSON text endpoint (already working)
    @PostMapping
    public ResponseEntity<String> analyzeResumeText(@RequestBody Map<String, String> request) {
        String resumeText = request.get("resumeText");
        String jdText = request.get("jobDescription");

        String result = aiService.analyze(resumeText, jdText);
        return ResponseEntity.ok(result);
    }

    // ✅ PDF Upload endpoint using your PdfUtil
    @PostMapping("/upload")
    public ResponseEntity<String> analyzeResumePdf(
            @RequestParam("file") MultipartFile file,
            @RequestParam("jobDescription") String jdText) {

        try {
            // Using your existing PdfUtil
            String resumeText = PdfUtil.extractText(file);

            String result = aiService.analyze(resumeText, jdText);
            return ResponseEntity.ok(result);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error reading PDF file");
        }
    }
}
