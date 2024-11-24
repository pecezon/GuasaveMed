package io.finalAMS.guasavemedapi.Controllers;

import io.finalAMS.guasavemedapi.Models.Receta;
import io.finalAMS.guasavemedapi.Services.RecetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/receta")
public class RecetaController {
    private final RecetaService recetaService;
    @Autowired
    public RecetaController(RecetaService recetaService) {
        this.recetaService = recetaService;
    }

    @PostMapping("/crearReceta")
    public ResponseEntity<Receta> crearReceta(@RequestBody Receta receta){
        Receta recetaGuardada = recetaService.crearReceta(receta);
        return ResponseEntity.status(HttpStatus.CREATED).body(recetaGuardada);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Receta> obtenerRecetaPorId(@PathVariable Long id) {
        Optional<Receta> receta = recetaService.obtenerRecetaPorId(id);
        return receta.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
}
