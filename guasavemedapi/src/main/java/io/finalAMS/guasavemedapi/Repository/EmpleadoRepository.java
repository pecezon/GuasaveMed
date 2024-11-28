package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
    public List<Empleado> findByTipo(String tipo);
}
