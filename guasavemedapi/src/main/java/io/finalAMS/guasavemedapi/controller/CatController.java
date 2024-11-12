package io.finalAMS.guasavemedapi.controller;

import io.finalAMS.guasavemedapi.model.Cat;
import io.finalAMS.guasavemedapi.service.CatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cats")
public class CatController {

    @Autowired
    private CatService catService;

    @GetMapping
    public List<Cat> getAllCats() {
        return catService.getAllCats();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cat> getCatById(@PathVariable Long id) {
        return catService.getCatById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Cat createCat(@RequestBody Cat cat) {
        return catService.createCat(cat);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cat> updateCat(@PathVariable Long id, @RequestBody Cat catDetails) {
        try {
            Cat updatedCat = catService.updateCat(id, catDetails);
            return ResponseEntity.ok(updatedCat);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCat(@PathVariable Long id) {
        catService.deleteCat(id);
        return ResponseEntity.noContent().build();
    }
}
