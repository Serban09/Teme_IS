package com.proiect.is.Service.Implementation;
import com.proiect.is.Model.User;
import com.proiect.is.Repository.UserRepository;
import com.proiect.is.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public User findFirstById(Integer id ){
        return userRepository.findFirstById(id);
    }

    @Override
    public User findFirstByUsernameAndPassword(String Username, String Password) {
        return userRepository.findFirstByUsernameAndPassword(Username, Password);
    }

}
