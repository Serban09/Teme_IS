package com.proiect.is.Controller;

import com.proiect.is.Model.Post;
import com.proiect.is.Model.User;
import com.proiect.is.Service.Implementation.PostServiceImplementation;
import com.proiect.is.Service.Implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/Post")
public class PostController {
    private final UserServiceImplementation userServiceImplementation;
    private final PostServiceImplementation postServiceImplementation;
    @PostMapping("/LoadPost")
    public ResponseEntity<String> loadPost(@RequestParam String hour,@RequestParam Integer comments,@RequestParam String date,@RequestParam Integer likes,@RequestParam Integer user_id, @RequestPart MultipartFile photo,@RequestParam String text) throws IOException {
        byte[] photoBytes = photo.getBytes();
        User u = userServiceImplementation.findFirstById(user_id);
        if(u.getPosts() != null)
            u.setPosts(u.getPosts() + 1);
        else u.setPosts(1);
        Post p = new Post(u,hour,date,comments,likes,photoBytes,text);
        if (postServiceImplementation.save(p) != null)
        {
            return ResponseEntity.status(HttpStatus.OK).body("Succes");
        }
        else return ResponseEntity.status(HttpStatus.OK).body("Could not save");
    }

    @PostMapping("/UploadPost")
    public ResponseEntity<String> UploadPost(@RequestParam Integer idpost, @RequestPart MultipartFile photo,@RequestParam String text) throws IOException {
        Post p2 = postServiceImplementation.findFirstById(idpost);
        byte[] photoBytes = photo.getBytes();
        if(p2 != null) {
            p2.setText(text);
            p2.setPhoto(photoBytes);
            if (postServiceImplementation.save(p2) != null) {
                return ResponseEntity.status(HttpStatus.OK).body("Succes");
            }
            else return ResponseEntity.status(HttpStatus.OK).body("Could not save p2");
        }
        else return ResponseEntity.status(HttpStatus.OK).body("Could not save");
    }

    @PostMapping("/DeletePost")
    public ResponseEntity deletePost(@RequestParam Integer id_post,@RequestParam Integer id_user){
        User u = userServiceImplementation.findFirstById(id_user);
        if(u.getPosts() != null)
            u.setPosts(u.getPosts() - 1);
        else u.setPosts(0);
        postServiceImplementation.deleteById(id_post);
        return ResponseEntity.status(HttpStatus.OK).body("OK");
    }

    @GetMapping("/ReturnAllPosts")
    public ResponseEntity returnAllPosts(){
        if(postServiceImplementation.returnAllPosts() != null)
            return ResponseEntity.status(HttpStatus.OK).body(postServiceImplementation.returnAllPosts());
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nu e bine");
    }

}
