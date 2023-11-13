package com.proiect.is.Repository;

import com.proiect.is.Model.Engine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EngineRepository extends CrudRepository<Engine,Long> {
    Engine findFirstById(Long id);
    Engine save(Engine entity);

}
