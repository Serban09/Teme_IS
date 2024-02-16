package com.proiect.is.Controller;

import com.proiect.is.Model.Friend;
import com.proiect.is.Model.User;
import com.proiect.is.Service.Implementation.FriendServiceImplementation;
import com.proiect.is.Service.Implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/Friend")
public class FriendController {
    private final FriendServiceImplementation friendServiceImplementation;
    private final UserServiceImplementation userServiceImplementation;


    @GetMapping("/allFriends")
    public ResponseEntity allFriends(){
        List<Friend> all = friendServiceImplementation.allFriends();
        if(all != null){
            return  ResponseEntity.status(HttpStatus.OK).body(all);
        }
        else return ResponseEntity.status(HttpStatus.OK).body("Could not save");
    }


    @PostMapping("/addFriend")
    public ResponseEntity<String> addFriend(@RequestParam Integer user_friend, @RequestParam Integer user_id){
        User u = userServiceImplementation.findFirstById(user_friend);
        User u2 = userServiceImplementation.findFirstById(user_id);
        if(u2 != null)
        {
            if(u2.getFriends() == null)
                u2.setFriends(1);
            else u2.setFriends(u2.getFriends() + 1);
        }
        if (u != null)
        {   Friend f = new Friend(u2,u.getId());
            if(friendServiceImplementation.save(f) != null)
                return ResponseEntity.status(HttpStatus.OK).body("Succes");
            else return ResponseEntity.status(HttpStatus.OK).body("Could not save");
        }
        else return ResponseEntity.status(HttpStatus.OK).body("Could not save");
    }

    @PostMapping("/deleteFriend")
    @Transactional
    public void deleteFriend(@RequestParam Integer user_friend, @RequestParam Integer user_id){
        User u = userServiceImplementation.findFirstById(user_id);
        if(u != null)
        {
            if(u.getFriends() == 1)
                u.setFriends(0);
            else u.setFriends(u.getFriends() - 1);
        }
        friendServiceImplementation.deleteByIdFriendAndUser(user_friend, u);
    }
}
