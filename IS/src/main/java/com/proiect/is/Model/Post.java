package com.proiect.is.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;
    private String date;
    private String hour;
    private Integer comments;
    private Integer likes;
    @Lob
    @Column(name = "photo", columnDefinition = "LONGBLOB")
    private byte[] photo;
    private String text;
    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    public Post(User u,String hour, String date, Integer comments, Integer likes, byte[] photo, String text){
        this.date = date;
        this.comments = comments;
        this.likes = likes;
        this.photo = photo;
        this.text = text;
        this.user = u;
        this.hour = hour;
    }
//    public Post(User user){
//        this.date = getDate();
//        this.comments = 0;
//        this.likes = 0;
//        this.user = user;
//    }
}
