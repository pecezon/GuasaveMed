package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {

}
