package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Cita;
import io.finalAMS.guasavemedapi.Models.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CitaRepository extends JpaRepository<Cita, Long> {
    List<Cita> findByPacienteId(Long pacienteId);
    List<Cita> findByEmpleadoId(Long empleadoId);
}
