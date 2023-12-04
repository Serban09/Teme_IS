package com.proiect.is.Controller;

import com.proiect.is.DTO.ObiectNou;
import com.proiect.is.Model.User;
import com.proiect.is.Service.Implementation.UserServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


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

    @PostMapping ("/Print")
    public void printMessage(@RequestBody ObiectNou data)
    {
        System.out.println(data);
    }

    @PostMapping("/Register")
    public ResponseEntity<String> Register(@RequestBody User u){
        if (userServiceImplementation.save(u) != null)
            return ResponseEntity.status(HttpStatus.OK).body("Succes");
        else return ResponseEntity.status(HttpStatus.OK).body("Error");
    }

    @GetMapping ("/Login")
    public ResponseEntity<String> login(@RequestParam String Username, @RequestParam String Password)
    {
        User user = userServiceImplementation.findFirstByUsernameAndPassword(Username, Password);

        if(user != null)
            return ResponseEntity.status(HttpStatus.OK).body("User gasit!");
        else
            return ResponseEntity.status(HttpStatus.OK).body("User nu exista!");
    }
}
