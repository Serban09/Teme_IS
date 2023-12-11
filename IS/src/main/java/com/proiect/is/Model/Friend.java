package com.proiect.is.Model;

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
@Table(name = "friend")
public class Friend
{
    @Id
    private Integer idFriend;
    private String date;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    public Friend (User u, Integer idFriend){
        this.idFriend = idFriend;
        this.date = getDate();
        this.user = user;
    }

}
