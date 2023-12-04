package com.proiect.is.Repository;

import com.proiect.is.Model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
    User findFirstById(Integer id);

    User findFirstByUsernameAndPassword(String Username, String Password);


}
