package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Cita;
import io.finalAMS.guasavemedapi.Models.Expediente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpedienteRepository extends JpaRepository<Expediente, Long> {
    Expediente findByPacienteId(Long pacienteId);
}
