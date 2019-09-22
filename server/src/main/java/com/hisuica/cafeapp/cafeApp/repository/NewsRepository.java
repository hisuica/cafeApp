package com.hisuica.cafeapp.cafeApp.repository;

import com.hisuica.cafeapp.cafeApp.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface NewsRepository extends JpaRepository<News, Long> {
}
