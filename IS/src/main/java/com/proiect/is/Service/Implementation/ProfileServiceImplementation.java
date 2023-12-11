package com.proiect.is.Service.Implementation;

import com.proiect.is.Model.Profile;
import com.proiect.is.Model.User;
import com.proiect.is.Repository.ProfileRepository;
import com.proiect.is.Service.ProfileService;
import com.proiect.is.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImplementation implements ProfileService {
    @Autowired
    private ProfileRepository profileRepository;
    @Override
    public Profile findFirstById(Integer id ){
        return profileRepository.findFirstById(id);
    }
    @Override
    public Profile save(Profile u){
        return profileRepository.save(u);
    }
}
