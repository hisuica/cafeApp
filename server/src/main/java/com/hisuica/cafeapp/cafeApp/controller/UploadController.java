package com.hisuica.cafeapp.cafeApp.controller;

import com.hisuica.cafeapp.cafeApp.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class UploadController {

    @Autowired
    StorageService storageService;

    private List<String> files = new ArrayList<String>();

    @PostMapping("/file-upload")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> handleFileUpload(
            @RequestParam("file") MultipartFile file,
            @RequestParam("fileName") String fileName) {
        String message = "";

        try {
            storageService.store(file, fileName);
            files.add(file.getOriginalFilename());

            message = "Successfully uploaded" + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "FAIL to upload" + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) throws IOException {
        Resource file = storageService.loadFile(filename);
        MediaType type;

        switch (filename.substring(filename.lastIndexOf(".") + 1)) {
            case "png": type = MediaType.IMAGE_PNG; break;
            case "gif": type = MediaType.IMAGE_GIF; break;
            default: type =  MediaType.IMAGE_JPEG;
        }

        return ResponseEntity.ok().contentType(type)
                .body(new InputStreamResource(file.getInputStream()));
    }
}
