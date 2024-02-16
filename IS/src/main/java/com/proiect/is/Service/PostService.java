package com.proiect.is.Service;

import com.proiect.is.Model.Post;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public interface PostService {
    Post save(Post u);


}
