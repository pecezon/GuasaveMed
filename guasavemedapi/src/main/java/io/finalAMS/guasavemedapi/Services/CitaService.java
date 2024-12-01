package io.finalAMS.guasavemedapi.Services;

import io.finalAMS.guasavemedapi.Models.Cita;
import io.finalAMS.guasavemedapi.Models.Paciente;
import io.finalAMS.guasavemedapi.Repository.CitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CitaService {
    private final CitaRepository citaRepository;

    @Autowired
    public CitaService(CitaRepository citaRepository) {
        this.citaRepository = citaRepository;
    }

    public Cita crearCita(Cita cita) {
        return citaRepository.save(cita);
    }
    public void eliminarCita(Long id){
        citaRepository.deleteById(id);
    }
    public Optional<Cita> obtenerCitaPorId(Long id){
        return citaRepository.findById(id);
    }

    public Cita modificarCita(Long id, Cita citaModificada) {
        return citaRepository.findById(id).map(cita -> {
            cita.setEmpleado(citaModificada.getEmpleado());
            cita.setTipo(citaModificada.getTipo());
            cita.setPaciente(citaModificada.getPaciente());
            cita.setConsultorio(citaModificada.getConsultorio());
            cita.setRazonIngreso(citaModificada.getRazonIngreso());
            cita.setFecha(citaModificada.getFecha());
            return citaRepository.save(cita);
        }).orElseThrow(() -> new RuntimeException("Cita no encontrado"));
    }

    public List<Cita> obtenerCitasPorPaciente(Long citaId) {
        return citaRepository.findByPacienteId(citaId);
    }

    public List<Cita> obtenerCitasPorEmpleado(Long empleadoId) {
        return citaRepository.findByEmpleadoId(empleadoId);
    }
}
