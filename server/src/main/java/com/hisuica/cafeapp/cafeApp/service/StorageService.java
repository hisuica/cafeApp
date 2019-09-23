package com.hisuica.cafeapp.cafeApp.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

@Service
public class StorageService {

    private final Path rootLocation = Paths.get("upload-dir");

    public void store(MultipartFile file, String fileName) {
        try {
            Files.copy(file.getInputStream(), this.rootLocation.resolve(Objects.requireNonNull(fileName)));
        } catch (Exception e) {
            throw new RuntimeException("FAIL!!");
        }
    }

    public Resource loadFile(String filename) {
        try {
            Path file = rootLocation.resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("FAIL!!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("FAIL!!");
        }
    }
}
