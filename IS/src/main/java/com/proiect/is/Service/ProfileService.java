package com.proiect.is.Service;
import com.proiect.is.Model.Profile;

import org.springframework.stereotype.Component;

@Component

public interface ProfileService {
    Profile save(Profile p);
    Profile findFirstById(Integer id);
}
