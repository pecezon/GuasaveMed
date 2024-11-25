package io.finalAMS.guasavemedapi.Services;

import io.finalAMS.guasavemedapi.Models.Cita;
import io.finalAMS.guasavemedapi.Models.Expediente;
import io.finalAMS.guasavemedapi.Models.Paciente;
import io.finalAMS.guasavemedapi.Repository.ExpedienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class ExpedienteSerivce {
    private final ExpedienteRepository expedienteRepository;
    @Autowired
    public ExpedienteSerivce(ExpedienteRepository expedienteRepository) {
        this.expedienteRepository = expedienteRepository;
    }
    public Expediente crearExpediente(Expediente expediente){
        return expedienteRepository.save(expediente);
    }
    public Optional<Expediente> obtenerExpedientePorId(long id){
        return expedienteRepository.findById(id);
    }
    public List<Expediente> obtenerExpedientes(){
        return expedienteRepository.findAll();
    }

    public Expediente obtenerExpedientePorPaciente(Long pacienteId) {
        return expedienteRepository.findByPacienteId(pacienteId);
    }

    public Expediente modificarExpediente(Long id, Expediente expedienteActualizado) {
        Expediente expedienteExistente = expedienteRepository.findById(id).orElse(null);

        if (expedienteExistente == null) {
            return null;
        }

        expedienteExistente.setDiagnosticos(expedienteActualizado.getDiagnosticos());
        expedienteExistente.setPadecimiento(expedienteActualizado.getPadecimiento());
        expedienteExistente.setTratamientos(expedienteActualizado.getTratamientos());
        expedienteExistente.setHistoriaClinica(expedienteActualizado.getHistoriaClinica());
        expedienteExistente.setPaciente(expedienteActualizado.getPaciente());

        return expedienteRepository.save(expedienteExistente);
    }
}
