package io.finalAMS.guasavemedapi.Controllers;

import io.finalAMS.guasavemedapi.Models.Paciente;
import io.finalAMS.guasavemedapi.Models.Paciente;
import io.finalAMS.guasavemedapi.Services.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/paciente")
public class PacienteController {

    private final PacienteService pacienteService;

    @Autowired
    public PacienteController(PacienteService pacienteService){
        this.pacienteService = pacienteService;
    }

    //Crear Paciente
    @PostMapping
    public ResponseEntity<Paciente> crearPaciente(@RequestBody Paciente paciente) {
        Paciente pacienteGuardado = pacienteService.crearPaciente(paciente);
        return ResponseEntity.status(HttpStatus.CREATED).body(pacienteGuardado);
    }

    //Obtener Paciente
    @GetMapping("/{id}")
    public ResponseEntity<Paciente> obtenerPacientePorId(@PathVariable Long id) {
        Optional<Paciente> paciente = pacienteService.obtenerPacientePorId(id);
        return paciente.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    //Modificar Paciente
    @PutMapping("/{id}")
    public ResponseEntity<Paciente> modificarPaciente(@PathVariable Long id, @RequestBody Paciente pacienteActualizado) {
        try {
            Paciente paciente = pacienteService.modificarPaciente(id, pacienteActualizado);
            return ResponseEntity.ok(paciente);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    //Obtener Todos Los Pacientes motivos de testing
    @GetMapping
    public List<Paciente> obtenerPacientes(){
        return pacienteService.obtenerPacientes();
    }


}
