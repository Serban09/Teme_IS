package com.proiect.is.Service;

import com.proiect.is.Model.Friend;
import com.proiect.is.Model.User;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component

public interface FriendService {
    List<Friend> allFriends();

    Friend save(Friend f);
    void deleteByIdFriendAndUser(Integer user_friend, User u);
}
