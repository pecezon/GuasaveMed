package io.finalAMS.guasavemedapi.Controllers;

import io.finalAMS.guasavemedapi.Models.Gato;
import io.finalAMS.guasavemedapi.Services.GatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/gatos")
public class GatoController {

    private final GatoService gatoService;

    @Autowired
    public GatoController(GatoService gatoService) {
        this.gatoService = gatoService;
    }

    // Endpoint para obtener todos los gatos
    @GetMapping
    public List<Gato> getAllGatos() {
        return gatoService.getAllGatos();
    }

    // Endpoint para obtener un gato por ID
    @GetMapping("/{id}")
    public ResponseEntity<Gato> getGatoById(@PathVariable Long id) {
        Optional<Gato> gato = gatoService.getGatoById(id);
        return gato.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Endpoint para crear un nuevo gato
    @PostMapping
    public ResponseEntity<Gato> createGato(@RequestBody Gato gato) {
        Gato savedGato = gatoService.saveGato(gato);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGato);
    }

    // Endpoint para actualizar un gato existente
    @PutMapping("/{id}")
    public ResponseEntity<Gato> updateGato(@PathVariable Long id, @RequestBody Gato updatedGato) {
        try {
            Gato gato = gatoService.updateGato(id, updatedGato);
            return ResponseEntity.ok(gato);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    // Endpoint para eliminar un gato
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGato(@PathVariable Long id) {
        gatoService.deleteGato(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
