package com.example.resumebuilder.resume.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ResumeService {

    @Autowired
    private AiService aiService;

    public String improveResume(String resumeText) {

        String prompt = """
        Improve this resume.
        Return only improved resume text.
        No emojis. No markdown symbols. No '*'.
        Professional formatting.
        Resume:
        """ + resumeText;

        return aiService.callGemini(prompt);
    }

    // ===== Compare Resume with JD + ATS Score + Suggested Jobs =====
    public Map<String, Object> compareResume(String resumeText, String jd) {

        // Prompt 1 → Extract JD keywords
        String keywordPrompt = """
        Extract important keywords and skills from this Job Description.
        Return comma separated keywords only.
        No emojis. No markdown.
        JD:
        """ + jd;

        // Prompt 2 → Missing skills & suggestions
        String comparisonPrompt = """
        Compare resume with JD.
        List missing skills and improvement suggestions.
        Plain text only. No emojis. No markdown.
        Resume:
        """ + resumeText + """
        JD:
        """ + jd;

        // Prompt 3 → Final improved resume
        String finalResumePrompt = """
        Improve resume based on JD comparison.
        Return full improved resume text.
        No emojis. No markdown symbols.
        Resume:
        """ + resumeText + """
        JD:
        """ + jd;

        // Prompt 4 → ATS Score
        String atsPrompt = """
        Give ATS match score between resume and JD from 0 to 100.
        Return only numeric score.
        Resume:
        """ + resumeText + """
        JD:
        """ + jd;

        Map<String, Object> result = new HashMap<>();

        result.put("keywords", aiService.callGemini(keywordPrompt));
        result.put("improvements", aiService.callGemini(comparisonPrompt));
        result.put("finalResume", aiService.callGemini(finalResumePrompt));

        // ATS Score
        result.put("atsScore", aiService.callGemini(atsPrompt));

        // ===== Suggested Recent Jobs (Static Demo Data) =====
        List<Map<String, String>> jobs = new ArrayList<>();

        jobs.add(Map.of(
                "title", "Frontend Developer",
                "company", "TechNova",
                "location", "Remote"
        ));

        jobs.add(Map.of(
                "title", "Java Developer",
                "company", "InnoSoft",
                "location", "Bangalore"
        ));

        jobs.add(Map.of(
                "title", "Full Stack Engineer",
                "company", "CloudCore",
                "location", "Pune"
        ));

        result.put("suggestedJobs", jobs);

        return result;
    }
}
