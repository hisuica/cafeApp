package com.hisuica.cafeapp.cafeApp.controller;

import com.hisuica.cafeapp.cafeApp.model.News;
import com.hisuica.cafeapp.cafeApp.repository.NewsRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class MainController {
    private NewsRepository repository;

    public MainController(NewsRepository repository) { this.repository = repository; }

    @GetMapping("/news-list")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<News> news() {
        return repository.findAll().stream()
                        .filter(this::isValid)
                        .collect(Collectors.toList());
    }

    private boolean isValid(News news) { return news.getDelFlag() == 0; }
}
