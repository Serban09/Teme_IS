package com.proiect.is.Repository;
import com.proiect.is.Model.Profile;
import com.proiect.is.Model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ProfileRepository extends CrudRepository<Profile, Integer> {
    Profile findFirstById(Integer id);
}