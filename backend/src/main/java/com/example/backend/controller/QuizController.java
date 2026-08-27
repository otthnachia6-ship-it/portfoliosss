package com.example.backend.controller;

import com.example.backend.model.Question;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

    @GetMapping("/api/questions")
    public List<Question> getQuestions() {
        List<Question> questions = new ArrayList<>();

        questions.add(new Question(
                1,
                "Java ni lugha ya aina gani?",
                List.of("Compiled", "Interpreted", "Zote mbili", "Hakuna"),
                "Zote mbili"
        ));

        questions.add(new Question(
                2,
                "HTML inasimamia nini?",
                List.of("HyperText Markup Language", "High Text Machine Language", "Home Tool Markup Language", "Hakuna"),
                "HyperText Markup Language"
        ));

        questions.add(new Question(
                3,
                "React ni maktaba ya lugha gani?",
                List.of("Python", "JavaScript", "Java", "PHP"),
                "JavaScript"
        ));

        return questions;
    }
}
