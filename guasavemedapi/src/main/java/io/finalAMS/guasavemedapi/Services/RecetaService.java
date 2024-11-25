package io.finalAMS.guasavemedapi.Services;

import io.finalAMS.guasavemedapi.Models.Receta;
import io.finalAMS.guasavemedapi.Repository.RecetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RecetaService {
    private final RecetaRepository recetaRepository;
    @Autowired
    public RecetaService(RecetaRepository recetaRepository) {
        this.recetaRepository = recetaRepository;
    }
    public Receta crearReceta(Receta receta){
        return recetaRepository.save(receta);
    }
    public Optional<Receta> obtenerRecetaPorId(long id){
        return recetaRepository.findById(id);
        }
}
