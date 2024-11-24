package io.finalAMS.guasavemedapi.Controllers;

import io.finalAMS.guasavemedapi.Models.Expediente;
import io.finalAMS.guasavemedapi.Services.ExpedienteSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/expediente")
public class ExpedienteController {
    private final ExpedienteSerivce expedienteSerivce;
    @Autowired
    public ExpedienteController(ExpedienteSerivce expedienteSerivce) {
        this.expedienteSerivce = expedienteSerivce;
    }

    @PostMapping("/crearExpediente")
    public ResponseEntity<Expediente> crearExpediente(@RequestBody Expediente expediente){
        Expediente expedienteGuardado = expedienteSerivce.crearExpediente(expediente);
        return ResponseEntity.status(HttpStatus.CREATED).body(expedienteGuardado);
    }

    @GetMapping
    public List<Expediente> obtenerExpedientes(){
        return expedienteSerivce.obtenerExpedientes();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Expediente> obtenerExpedientePorId(@PathVariable Long id) {
        Optional<Expediente> expediente = expedienteSerivce.obtenerExpedientePorId(id);
        return expediente.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

}
