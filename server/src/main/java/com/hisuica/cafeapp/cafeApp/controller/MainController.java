package com.hisuica.cafeapp.cafeApp.controller;

import com.hisuica.cafeapp.cafeApp.model.Notice;
import com.hisuica.cafeapp.cafeApp.repository.NoticeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class MainController {
    private NoticeRepository repository;

    public MainController(NoticeRepository repository) { this.repository = repository; }

    @GetMapping("/")
    public Collection<Notice> notices() {

        Notice notice = Notice.builder()
                .title("testTitle")
                .context("testContext")
                .type("Event")
                .insertDate(LocalDateTime.now())
                .updateDate(LocalDateTime.now())
                .build();

        repository.save(notice);

        return repository.findAll().stream()
                        .filter(this::isValid)
                        .collect(Collectors.toList());
    }

    private boolean isValid(Notice notice) { return notice.getDelFlag() == 0; }
}
