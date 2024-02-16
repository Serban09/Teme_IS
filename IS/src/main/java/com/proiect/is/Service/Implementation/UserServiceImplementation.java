package com.proiect.is.Service.Implementation;
import com.proiect.is.Model.Friend;
import com.proiect.is.Model.Post;
import com.proiect.is.Model.User;
import com.proiect.is.Repository.FriendRepository;
import com.proiect.is.Repository.PostRepository;
import com.proiect.is.Repository.UserRepository;
import com.proiect.is.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;


    public void deleteById(Integer id){
        User u = userRepository.findFirstById(id);
        for(Friend f:  u.getFriendList())
        {
            f.setUser(null);
        }
        u.setFriendList(null);
        for(Post p : u.getPostList())
        {
            p.setUser(null);
        }
        u.setPostList(null);
        userRepository.save(u);
        userRepository.deleteById(id);
    }

    @Override
    public User findFirstById(Integer id ){
        return userRepository.findFirstById(id);
    }
    @Override
    public User findFirstByUsernameAndPassword(String Username, String Password) {
        return userRepository.findFirstByUsernameAndPassword(Username, Password);
    }
    @Override
    public List<User> findAll(){
        return  userRepository.findAll();
    }
    @Override
    public User save(User u) {;
        return userRepository.save(u);
    }
    @Override
    public User updateUserByUsername(User u){
        return userRepository.save(u);
    }

    @Override
    public byte[] findPhoto(Integer id) {
        User u = userRepository.findFirstById(id);
        return u.getPhoto();
    }
    @Override
    public String fullName(Integer id){
        String u = userRepository.fullName(id);
        return u;
    }
    @Override
    public List<Post> getPostList(Integer id){
        List<Post> p = userRepository.getPostList(id);
        return p;
    }
    @Override
    public List<User> getUserByFriendList(User u){
        List<Friend> friendList = u.getFriendList();
        List<User> userList = new ArrayList<>();
        for(Friend f : friendList){
            userList.add(userRepository.findFirstById(f.getIdFriend()));
        }
        return userList;
    }
    @Override
    public List<User> friendsUser(Integer id){
        User u = userRepository.findFirstById(id);
        List<Friend> Friends = u.getFriendList();
        List<User> u2 = new ArrayList<>();
        for(int i = 0 ; i < Friends.size(); i++)
        {
            Friend f = Friends.get(i);
            User f_u = userRepository.findFirstById(f.getIdFriend());
            u2.add(f_u);
        }
        return u2;
    }
}