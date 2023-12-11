package com.proiect.is.Repository;

import com.proiect.is.Model.Friend;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FriendRepository extends CrudRepository<Friend,Integer> {
}
