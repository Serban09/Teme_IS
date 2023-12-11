package com.proiect.is.Service.Implementation;

import com.proiect.is.Repository.FriendRepository;
import com.proiect.is.Service.FriendService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FriendServiceImplementation implements FriendService {
    @Autowired
    private FriendRepository friendRepository;
}
