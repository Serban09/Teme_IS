package com.proiect.is.Service;

import com.proiect.is.Model.User;
import org.springframework.stereotype.Component;

@Component
public interface UserService {
    User findFirstById(Integer id);
    User findFirstByUsernameAndPassword(String Username, String Password);
    User save(User u);
//    User updateUserByUsername(User u);
}
