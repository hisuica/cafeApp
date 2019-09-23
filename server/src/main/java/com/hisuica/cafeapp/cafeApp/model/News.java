package com.hisuica.cafeapp.cafeApp.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class News {
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String type;

    @NonNull
    private String title;

    @NonNull
    private String context;

    @Builder.Default
    private LocalDateTime insertDate = LocalDateTime.now();

    @Builder.Default
    private LocalDateTime updateDate = LocalDateTime.now();

    private String imgName;

    @Builder.Default
    private Integer delFlag = 0;
}
