package com.example.resumebuilder.resume.controller;

import com.example.resumebuilder.resume.service.ResumeService;
import com.example.resumebuilder.resume.util.PdfUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "http://localhost:5173")
public class ResumeController {

    @Autowired
    private ResumeService resumeService;

    // ===== 1) Improve Resume Only =====
    @PostMapping("/improve")
    public ResponseEntity<String> improveResume(
            @RequestParam("resume") MultipartFile resumeFile) throws Exception {

        String resumeText = PdfUtil.extractText(resumeFile);
        String result = resumeService.improveResume(resumeText);

        return ResponseEntity.ok(result);
    }

    // ===== 2) Compare Resume with JD + ATS + Suggested Jobs =====
    @PostMapping("/compare")
    public ResponseEntity<Map<String, Object>> compareResume(
            @RequestParam("resume") MultipartFile resumeFile,
            @RequestParam("jd") String jdText) throws Exception {

        String resumeText = PdfUtil.extractText(resumeFile);

        Map<String, Object> result =
                resumeService.compareResume(resumeText, jdText);

        return ResponseEntity.ok(result);
    }
}
