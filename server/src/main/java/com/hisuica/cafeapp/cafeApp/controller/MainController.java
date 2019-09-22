package com.hisuica.cafeapp.cafeApp.controller;

import com.hisuica.cafeapp.cafeApp.model.News;
import com.hisuica.cafeapp.cafeApp.repository.NewsRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
    private NewsRepository repository;

    public MainController(NewsRepository repository) { this.repository = repository; }

    @GetMapping("/news-list")
    public Collection<News> news() {
        return new ArrayList<>(repository.findAll());
    }

    @GetMapping("/news/events")
    public Collection<News> events() {
        return repository.findAll().stream()
                        .filter(this::isValid)
                        .filter(this::isEvent)
                        .collect(Collectors.toList());
    }

    @GetMapping("/news/notices")
    public Collection<News> notices() {
        return repository.findAll().stream()
                        .filter(this::isValid)
                        .filter(this::isNotice)
                        .collect(Collectors.toList());
    }

    private boolean isValid(News news) { return news.getDelFlag() == 0; }
    private boolean isEvent(News news) { return "Event".equals(news.getType()); }
    private boolean isNotice(News news) { return "Notice".equals(news.getType()); }
}
