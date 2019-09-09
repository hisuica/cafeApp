package com.hisuica.cafeapp.cafeApp.repository;

import com.hisuica.cafeapp.cafeApp.model.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface NoticeRepository extends JpaRepository<Notice, Long> {
}
