package com.proiect.is.Service;

import com.proiect.is.Model.Post;
import com.proiect.is.Model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserService {
    User findFirstById(Integer id);
    User findFirstByUsernameAndPassword(String Username, String Password);
    List<User> findAll();
    List<Post> getPostList(Integer id);
    List<User> getUserByFriendList(User u);
    List<User> friendsUser(Integer id);
    User save(User u);
    User updateUserByUsername(User u);
    byte[] findPhoto(Integer id);
    String fullName(Integer id);

}
