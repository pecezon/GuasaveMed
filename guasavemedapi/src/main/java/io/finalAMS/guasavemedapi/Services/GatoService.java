package io.finalAMS.guasavemedapi.Services;

import io.finalAMS.guasavemedapi.Models.Gato;
import io.finalAMS.guasavemedapi.Repository.GatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class GatoService {

    private final GatoRepository gatoRepository;

    @Autowired
    public GatoService(GatoRepository gatoRepository) {
        this.gatoRepository = gatoRepository;
    }

    // Método para obtener todos los gatos
    public List<Gato> getAllGatos() {
        return gatoRepository.findAll();
    }

    // Método para obtener un gato por ID
    public Optional<Gato> getGatoById(Long id) {
        return gatoRepository.findById(id);
    }

    // Método para guardar un nuevo gato
    public Gato saveGato(Gato gato) {
        return gatoRepository.save(gato);
    }

    // Método para actualizar un gato
    public Gato updateGato(Long id, Gato updatedGato) {
        return gatoRepository.findById(id).map(gato -> {
            gato.setNombre(updatedGato.getNombre()); // Asumiendo que "nombre" es un atributo de Gato
            gato.setEdad(updatedGato.getEdad()); // Otro atributo
            return gatoRepository.save(gato);
        }).orElseThrow(() -> new RuntimeException("Gato no encontrado"));
    }

    // Método para eliminar un gato
    public void deleteGato(Long id) {
        gatoRepository.deleteById(id);
    }
}
