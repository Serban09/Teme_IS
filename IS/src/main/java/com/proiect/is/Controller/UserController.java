package com.proiect.is.Controller;

import com.proiect.is.DTO.ObiectNou;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/User")
public class UserController {
    @GetMapping("/GetData")
    public String getMessage() {
        return "Ana are mere";
    }
    @PostMapping ("/Print")
    public void printMessage(@RequestBody ObiectNou data)
    {
        System.out.println(data);
    }
}
