package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Cita;
import io.finalAMS.guasavemedapi.Models.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CitaRepository extends JpaRepository<Cita, Long> {
}
