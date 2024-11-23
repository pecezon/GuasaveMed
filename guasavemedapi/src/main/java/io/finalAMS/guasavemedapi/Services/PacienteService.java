package io.finalAMS.guasavemedapi.Services;

import io.finalAMS.guasavemedapi.Models.Paciente;
import io.finalAMS.guasavemedapi.Repository.GatoRepository;
import io.finalAMS.guasavemedapi.Repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PacienteService {

    private PacienteRepository pacienteRepository;

    @Autowired
    public PacienteService(PacienteRepository pacienteRepository){
        this.pacienteRepository = pacienteRepository;
    }

    public Paciente crearPaciente(Paciente paciente){
        return pacienteRepository.save(paciente);
    }
}
