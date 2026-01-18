package com.example.resumebuilder.resume.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class AiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    // Gemini endpoint
    private final String GEMINI_BASE_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=";

    public String analyze(String resumeText, String jdText) {
        RestTemplate restTemplate = new RestTemplate();

        // ✅ Improved Prompt
        String prompt = """
        You are an ATS resume analyzer.
        Compare the resume with the job description and provide:
        1. Matching percentage
        2. Missing skills
        3. Improvement suggestions

        Resume:
        """ + resumeText + """

        Job Description:
        """ + jdText;

        // Gemini request JSON structure
        Map<String, Object> textPart = Map.of("text", prompt);
        Map<String, Object> partList = Map.of("parts", List.of(textPart));
        Map<String, Object> requestBody = Map.of("contents", List.of(partList));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    GEMINI_BASE_URL + apiKey,
                    HttpMethod.POST,
                    entity,
                    String.class
            );

            // ✅ Extract only AI text from JSON
            return extractTextFromGeminiResponse(response.getBody());

        } catch (Exception e) {
            // Log actual error in console
            System.out.println("Gemini API Error: " + e.getMessage());
            return "AI service is temporarily unavailable. Please try again.";
        }
    }

    // ✅ JSON response parser
    private String extractTextFromGeminiResponse(String json) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(json);

            return root.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();

        } catch (Exception e) {
            return "Error parsing Gemini response.";
        }
    }

    // === Generic Gemini Caller (for new ResumeService) ===
    public String callGemini(String prompt) {

        RestTemplate restTemplate = new RestTemplate();

        Map<String, Object> textPart = Map.of("text", prompt);
        Map<String, Object> partList = Map.of("parts", List.of(textPart));
        Map<String, Object> requestBody = Map.of("contents", List.of(partList));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    GEMINI_BASE_URL + apiKey,
                    HttpMethod.POST,
                    entity,
                    String.class
            );

            return extractTextFromGeminiResponse(response.getBody());

        } catch (Exception e) {
            System.out.println("Gemini API Error: " + e.getMessage());
            return "AI service is temporarily unavailable. Please try again.";
        }
    }

}
