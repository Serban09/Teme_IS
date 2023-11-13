package com.proiect.is.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor

public class User {
    @Id
    private Integer id;
    private String FirstName;
    private String LastName;

}
