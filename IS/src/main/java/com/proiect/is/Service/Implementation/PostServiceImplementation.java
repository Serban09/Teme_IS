package com.proiect.is.Service.Implementation;

import com.proiect.is.Model.Post;
import com.proiect.is.Repository.PostRepository;
import com.proiect.is.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImplementation implements PostService {
    @Autowired
    private PostRepository postRepository;
    @Override
    public Post save(Post p) {
        return postRepository.save(p);
    }

    public List<Post> returnAllPosts(){
        return postRepository.findAll();
    }

    public Post findFirstById(Integer id){
        return postRepository.findFirstById(id);
    }
    public void deleteById(Integer id){
        Post p = postRepository.findFirstById(id);
        p.setUser(null);
        postRepository.delete(p);
    }
}
