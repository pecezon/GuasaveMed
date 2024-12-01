package io.finalAMS.guasavemedapi.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmpleadoDTO {
    private Long id;
    private String nombre;
    private String tipo;
    private Long idDoctor;
}
