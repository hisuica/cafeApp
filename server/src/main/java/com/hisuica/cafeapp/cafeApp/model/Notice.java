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
public class Notice {
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String type;

    @NonNull
    private String title;

    @NonNull
    private String context;

    private LocalDateTime insertDate;

    private LocalDateTime updateDate;

    @Builder.Default
    private Integer delFlag = 0;
}
