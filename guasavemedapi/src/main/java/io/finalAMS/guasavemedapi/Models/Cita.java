package io.finalAMS.guasavemedapi.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false)
    private Paciente paciente;

    @Column(nullable = false)
    private LocalDateTime fecha;

    @Column(nullable = false)
    private String tipo;

    //Solo para Emergencias NO Criticas
    private String consultorio;

    //Solo para Citas Normales
    @ManyToOne
    @JoinColumn(name = "empleado_id")
    private Empleado empleado;

    //Solo para Emergencias
    private String razonIngreso;

}
