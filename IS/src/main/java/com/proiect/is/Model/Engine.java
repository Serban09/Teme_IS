package com.proiect.is.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Engine {
    @Id
    private Long id;
    private Long capacity;
}
