package com.proiect.is.Repository;

import com.proiect.is.Model.Obiect;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ObiectRepository extends CrudRepository<Obiect,Long> {
    Obiect findFirstById(Long id);

    Obiect save(Obiect entity);
}
