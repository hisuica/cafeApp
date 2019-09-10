package com.hisuica.cafeapp.cafeApp;

import com.hisuica.cafeapp.cafeApp.model.Notice;
import com.hisuica.cafeapp.cafeApp.repository.NoticeRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class CafeAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(CafeAppApplication.class, args);
	}

	@Bean
    ApplicationRunner init(NoticeRepository repository) {
	    return args -> {
            Notice notice = Notice.builder()
                    .title("testTitle")
                    .context("testContext")
                    .type("Event")
                    .insertDate(LocalDateTime.now())
                    .updateDate(LocalDateTime.now())
                    .build();

            repository.save(notice);
        };
    }

}
