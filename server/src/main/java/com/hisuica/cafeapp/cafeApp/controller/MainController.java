package com.hisuica.cafeapp.cafeApp.controller;

import com.hisuica.cafeapp.cafeApp.model.Notice;
import com.hisuica.cafeapp.cafeApp.repository.MainRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class MainController {
    private MainRepository repository;

    public MainController(MainRepository repository) { this.repository = repository; }

    @GetMapping("/")
    public Collection<Notice> notices() {
        return repository.findAll().stream()
                        .filter(this::isValid)
                        .collect(Collectors.toList());
    }

    private boolean isValid(Notice notice) { return notice.getDelFlag() == 0; }
}
