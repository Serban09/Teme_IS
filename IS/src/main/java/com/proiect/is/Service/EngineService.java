package com.proiect.is.Service;

import com.proiect.is.Model.Engine;
import com.proiect.is.Repository.EngineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public interface EngineService {
    Engine findFirstById(Long id);
    void Insert(Engine ob);
}
