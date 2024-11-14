package io.finalAMS.guasavemedapi.Repository;

import io.finalAMS.guasavemedapi.Models.Gato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GatoRepository extends JpaRepository<Gato, Long> {
}