package com.proiect.is.Model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Blob;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private String age;
    private Integer friends;
    private Integer posts;
    private Integer admin;
    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user", cascade = CascadeType.ALL)
    private List<Post> postList;
    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
    private List<Friend> friendList;
    @Lob
    @Column(name = "photo", columnDefinition = "LONGBLOB")
    private byte[] photo;

}
