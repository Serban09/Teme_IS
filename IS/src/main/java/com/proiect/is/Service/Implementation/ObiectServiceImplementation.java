package com.proiect.is.Service.Implementation;

import com.proiect.is.Model.Obiect;
import com.proiect.is.Repository.ObiectRepository;
import com.proiect.is.Service.ObiectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ObiectServiceImplementation implements ObiectService {
    @Autowired
    private ObiectRepository obiectRepository;

    @Override
    public Obiect findFirstById(Long id){
        return obiectRepository.findFirstById(id);
    }
    @Override
    public void Insert(Obiect ob){
        obiectRepository.save(ob);
    }
}
