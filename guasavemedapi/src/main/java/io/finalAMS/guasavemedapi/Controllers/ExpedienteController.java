package io.finalAMS.guasavemedapi.Controllers;

import io.finalAMS.guasavemedapi.Models.Expediente;
import io.finalAMS.guasavemedapi.Models.Paciente;
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

    @PostMapping
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

    @GetMapping("/paciente/{id}")
    public ResponseEntity<Expediente> obtenerExpedientePorPaciente(@PathVariable Long id) {
        Optional<Expediente> expediente = Optional.ofNullable(expedienteSerivce.obtenerExpedientePorPaciente(id));
        return expediente.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Expediente> modificarExpediente(@PathVariable Long id, @RequestBody Expediente expedienteActualizado) {
        try {
            Expediente paciente = expedienteSerivce.modificarExpediente(id, expedienteActualizado);
            return ResponseEntity.ok(paciente);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}
