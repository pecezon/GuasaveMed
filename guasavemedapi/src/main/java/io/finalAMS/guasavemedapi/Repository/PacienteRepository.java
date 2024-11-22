package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {
}
