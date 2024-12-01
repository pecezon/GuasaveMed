package io.finalAMS.guasavemedapi.Controllers;

import io.finalAMS.guasavemedapi.Models.Cita;
import io.finalAMS.guasavemedapi.Services.CitaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/cita")
public class CitaController {
    private final CitaService citaService;

    @Autowired
    public CitaController(CitaService citaService){
        this.citaService = citaService;
    }

    @PostMapping
    public ResponseEntity<Cita> crearCita(@RequestBody Cita cita) {
        Cita citaGuardada = citaService.crearCita(cita);
        return ResponseEntity.status(HttpStatus.CREATED).body(citaGuardada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Cita> borrarCita(@PathVariable Long id){
     citaService.eliminarCita(id);
     return ResponseEntity.status((HttpStatus.NO_CONTENT)).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cita> obtenerCitaPorId(@PathVariable Long id){
        Optional<Cita> citaGuardada = citaService.obtenerCitaPorId(id);
        return citaGuardada.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/paciente/{pacienteId}")
    public ResponseEntity<List<Cita>> obtenerCitasPorPaciente(@PathVariable Long pacienteId) {
        List<Cita> citas = citaService.obtenerCitasPorPaciente(pacienteId);
        if (citas.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(citas);
    }

    @GetMapping("/empleado/{empleadoId}")
    public ResponseEntity<List<Cita>> obtenerCitasPorEmpleado(@PathVariable Long empleadoId) {
        List<Cita> citas = citaService.obtenerCitasPorEmpleado(empleadoId);
        if (citas.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(citas);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cita> modificarCita(@PathVariable Long id, @RequestBody Cita citaActualizada) {
        try {
            Cita cita = citaService.modificarCita(id, citaActualizada);
            return ResponseEntity.ok(cita);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
