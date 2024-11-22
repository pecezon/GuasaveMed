package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Empleado;
import io.finalAMS.guasavemedapi.Models.Receta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecetaRepository extends JpaRepository<Receta, Long> {
}
