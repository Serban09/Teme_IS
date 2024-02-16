package com.proiect.is.Controller;
import java.sql.Blob;
import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

//import com.proiect.is.DTO.UserDTP;
import com.proiect.is.DTO.UserDTP;
import com.proiect.is.Model.Friend;
import com.proiect.is.Model.Post;
import com.proiect.is.Model.User;
import com.proiect.is.Service.Implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/User")
public class UserController {

    private final UserServiceImplementation userServiceImplementation;
    @GetMapping("/GetData")
    public String getMessage() {
        return "Ana are mere";
    }
    @GetMapping("/ProfileImage")
    public ResponseEntity<String> ProfileImage(@RequestParam Integer id) {
        byte[] photoBlob = userServiceImplementation.findPhoto(id);
        if (photoBlob != null) {
                String s = Base64.getEncoder().encodeToString(photoBlob);
                return ResponseEntity.ok().body(s);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/ListUsers")
    public ResponseEntity<List<User>> ListUsers(@RequestParam Integer userId){
        List<User> listusers= userServiceImplementation.findAll();
        List<User> listFriendsUser = userServiceImplementation.friendsUser(userId);
        List<User> finalList  = new ArrayList<>();
        for(User l : listusers)
        {
            if(!listFriendsUser.contains(l))
                finalList.add(l);
        }
        if(finalList != null)
            return ResponseEntity.status(HttpStatus.OK).body(finalList);
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @GetMapping("/GetALLListUsers")
    public ResponseEntity<List<User>> GetALLListUsers(){
        List<User> listusers= userServiceImplementation.findAll();
        if(listusers != null)
//           return ResponseEntity.status(HttpStatus.OK).body(listusers.stream().map(i->new UserDTP(i,2,i.get)));
            return ResponseEntity.status(HttpStatus.OK).body(listusers);
        else return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PostMapping("/DeleteUser")
    public ResponseEntity DeleteUser(@RequestParam Integer id){
        User u = userServiceImplementation.findFirstById(id);
        if(u != null)
        {
            userServiceImplementation.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body("Succes");
        }
        else return ResponseEntity.status(HttpStatus.OK).body("Eroare delete user");
    }

    @PostMapping("/Register")
    public ResponseEntity<String> Register(@RequestBody User u){
        if (userServiceImplementation.save(u) != null)
        {
            return ResponseEntity.status(HttpStatus.OK).body("Succes");
        }
        else return ResponseEntity.status(HttpStatus.OK).body("Could not save");
    }

//    @PostMapping("/UpdateUser")
//    public ResponseEntity UpdateUser(@RequestBody User u){
//
//    }


@PostMapping("/LoadPhotoProfile")
public ResponseEntity<String> loadPhotoFile(@RequestParam Integer id, @RequestPart MultipartFile photo) {
    User u = userServiceImplementation.findFirstById(id);
    try {
        byte[] photoBytes = photo.getBytes();
        u.setPhoto(photoBytes);
        if (userServiceImplementation.save(u) != null) {
            return ResponseEntity.status(HttpStatus.OK).body("Success");
        } else {
            return ResponseEntity.status(HttpStatus.OK).body("Could not save");
        }
    } catch (IOException e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing the photo");
    }
}

    @GetMapping ("/Login")
    public ResponseEntity login(@RequestParam String Username, @RequestParam String Password)
    {
        User user = userServiceImplementation.findFirstByUsernameAndPassword(Username, Password);
        if(user != null)
        {
            return ResponseEntity.status(HttpStatus.OK).body(user);
        }
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User nu exista!");
    }

    @GetMapping ("/GetFullName")
    public ResponseEntity<String> GetFullName(@RequestParam Integer id)
    {
        String fullName = userServiceImplementation.fullName(id);
        if(fullName != null)
        {
            return ResponseEntity.status(HttpStatus.OK).body(fullName);
        }
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User nu exista!");
    }

    @GetMapping("/GetPostsProfileUser")
    public ResponseEntity GetPostsProfileUser(@RequestParam Integer UserId)
    {
        List<Post> posts = userServiceImplementation.getPostList(UserId);
        if(posts != null)
        {
            return ResponseEntity.status(HttpStatus.OK).body(posts);
        }
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User nu exista!");
    }

    @GetMapping ("/GetUser")
    public ResponseEntity GetUser(@RequestParam Integer id)
    {
        User u = userServiceImplementation.findFirstById(id);
        if(u != null)
        {
            return ResponseEntity.status(HttpStatus.OK).body(u);
        }
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
    @GetMapping ("/GetUserFriends")
    public ResponseEntity GetUserFriends(@RequestParam Integer id)
    {
        User u = userServiceImplementation.findFirstById(id);
        List<User> UserFriendsList = userServiceImplementation.getUserByFriendList(u);
        if(UserFriendsList != null)
        {
            return ResponseEntity.status(HttpStatus.OK).body(UserFriendsList);
        }
        else
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
}
