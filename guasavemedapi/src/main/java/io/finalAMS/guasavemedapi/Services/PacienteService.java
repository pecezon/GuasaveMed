package io.finalAMS.guasavemedapi.Services;

import io.finalAMS.guasavemedapi.Models.Gato;
import io.finalAMS.guasavemedapi.Models.Paciente;
import io.finalAMS.guasavemedapi.Repository.GatoRepository;
import io.finalAMS.guasavemedapi.Repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    private final PacienteRepository pacienteRepository;

    @Autowired
    public PacienteService(PacienteRepository pacienteRepository){
        this.pacienteRepository = pacienteRepository;
    }

    public Paciente crearPaciente(Paciente paciente){
        return pacienteRepository.save(paciente);
    }

    public Optional<Paciente> obtenerPacientePorId(long id){
        return pacienteRepository.findById(id);
    }

    public List<Paciente> obtenerPacientes(){
        return pacienteRepository.findAll();
    }

    // Método para actualizar un paciente
    public Paciente modificarPaciente(Long id, Paciente pacienteModificado) {
        return pacienteRepository.findById(id).map(paciente -> {
            paciente.setNombre(pacienteModificado.getNombre());
            paciente.setEdad(pacienteModificado.getEdad());
            paciente.setTelefono(pacienteModificado.getTelefono());
            return pacienteRepository.save(paciente);
        }).orElseThrow(() -> new RuntimeException("Paciente no encontrado"));
    }
}
