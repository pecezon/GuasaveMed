package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
    public List<Empleado> findByTipo(String tipo);
    Optional<Empleado> findByUsuarioAndPassword(String usuario, String password);
}
