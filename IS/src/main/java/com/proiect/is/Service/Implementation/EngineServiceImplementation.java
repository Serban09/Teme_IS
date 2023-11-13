package com.proiect.is.Service.Implementation;

import com.proiect.is.Model.Engine;
import com.proiect.is.Service.EngineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class EngineServiceImplementation implements EngineService {
    @Qualifier("")
    @Autowired
    private  EngineService engineRepository;
    @Override
    public Engine findFirstById(Long id){
        return engineRepository.findFirstById(id);
    }

    @Override
    public void Insert(Engine engine){
        engineRepository.save(engine);

    }
}
