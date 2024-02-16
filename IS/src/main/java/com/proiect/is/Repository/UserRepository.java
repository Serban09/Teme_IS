package com.proiect.is.Repository;

import com.proiect.is.Model.Friend;
import com.proiect.is.Model.Post;
import com.proiect.is.Model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.sql.Blob;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {

    List<User> findAll();
    User findFirstById(Integer id);
    User findFirstByUsernameAndPassword(String Username, String Password);
    @Query("SELECT u.photo FROM User u WHERE u.id = :id")
    Blob findPhoto(Integer id);
    @Query("SELECT CONCAT(u.firstName, ' ', u.lastName) AS fullName FROM User u WHERE u.id = :id")
    String fullName(Integer id);
    List<User> getUserByFriendList(User u);
    @Query("SELECT u.postList FROM User u WHERE u.id = :id")
    List<Post> getPostList(Integer id);

}
