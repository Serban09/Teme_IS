package com.proiect.is.Service.Implementation;

import com.proiect.is.Model.Friend;
import com.proiect.is.Model.User;
import com.proiect.is.Repository.FriendRepository;
import com.proiect.is.Service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FriendServiceImplementation implements FriendService {
    @Autowired
    private FriendRepository friendRepository;

    @Override
    public List<Friend> allFriends(){
        return friendRepository.findAll();
    }


    @Override
    public Friend save(Friend f) {;
        return friendRepository.save(f);
    }
    public void deleteByIdFriendAndUser(Integer user_friend, User u) {
        Friend f = friendRepository.findFirstByIdFriendAndUser(user_friend,u);
        if(f != null)
        {
            f.setUser(null);
            friendRepository.delete(f);
        }
    }
}
