package com.proiect.is.Repository;

import com.proiect.is.Model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends CrudRepository<Post,Integer> {

   List<Post> findAll();
   Post findFirstById(Integer id);
}
