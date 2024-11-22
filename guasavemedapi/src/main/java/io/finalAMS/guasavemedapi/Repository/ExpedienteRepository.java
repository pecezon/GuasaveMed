package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Expediente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpedienteRepository extends JpaRepository<Expediente, Long> {
}
