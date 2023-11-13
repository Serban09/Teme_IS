package com.proiect.is.Service;

import com.proiect.is.Model.Obiect;
import com.proiect.is.Model.User;
import org.springframework.stereotype.Component;

@Component
public interface ObiectService {

    Obiect findFirstById(Long id);

    void Insert(Obiect ob);
}
