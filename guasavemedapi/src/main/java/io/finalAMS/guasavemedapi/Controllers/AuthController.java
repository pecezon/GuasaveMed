package io.finalAMS.guasavemedapi.Controllers;

import io.finalAMS.guasavemedapi.DTO.EmpleadoDTO;
import io.finalAMS.guasavemedapi.Models.Empleado;
import io.finalAMS.guasavemedapi.Repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    public EmpleadoRepository empleadoRepository;

    @PostMapping("/login")
    public EmpleadoDTO login(@RequestBody Empleado user) {
        Optional<Empleado> empleadoOpt = empleadoRepository.findByUsuarioAndPassword(user.getUsuario(), user.getPassword());

        return empleadoOpt
                .map(empleado -> new EmpleadoDTO(
                        empleado.getId(),
                        empleado.getNombre(),
                        empleado.getTipo(),
                        empleado.getIdDoctor()
                ))
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }
}
