package com.proiect.is.Repository;

import com.proiect.is.Model.Friend;
import com.proiect.is.Model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FriendRepository extends CrudRepository<Friend,Integer> {
    List<Friend> findAll();
    Friend findFirstByIdFriendAndUser(Integer user_friend, User uger);
}
