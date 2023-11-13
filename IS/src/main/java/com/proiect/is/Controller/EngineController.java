package com.proiect.is.Controller;

import com.proiect.is.Model.Engine;
import com.proiect.is.Service.Implementation.EngineServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/Engine")
public class EngineController {
    private final EngineServiceImplementation engineServiceImplementation;
    @GetMapping("/ReadData")
    public String getData(){
        return "asdas";
    }
    @PostMapping("/Insert")
        public void insert(@RequestBody Engine engine){
            engineServiceImplementation.Insert(engine);
        }


    @PostMapping("GetById")
    public ResponseEntity ReadById(@RequestBody Long id){
        Engine engine  = engineServiceImplementation.findFirstById(id);
        return ResponseEntity.status(HttpStatus.OK).body(engine);
    }

}
