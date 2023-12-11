package com.proiect.is.Service.Implementation;

import com.proiect.is.Repository.PostRepository;
import com.proiect.is.Repository.UserRepository;
import com.proiect.is.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostServiceImplementation implements PostService {
    @Autowired
    private PostRepository postRepository;
}
