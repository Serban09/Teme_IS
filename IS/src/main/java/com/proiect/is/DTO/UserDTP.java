package com.proiect.is.DTO;

import com.proiect.is.Model.Friend;
import com.proiect.is.Model.User;
import lombok.Builder;

import java.util.List;
 class Prieten {
    private Integer id;
    private Integer idFriend;
    private String date;

    private String name;

    public Prieten(Integer id, Integer idFriend, String date, String name) {
        this.id = id;
        this.idFriend = idFriend;
        this.date = date;
        this.name = name;
    }
}
@Builder
public class UserDTP extends  User {

    List<Prieten> prieten ;




}
