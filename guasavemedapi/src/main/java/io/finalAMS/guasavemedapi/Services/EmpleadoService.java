package io.finalAMS.guasavemedapi.Services;

import io.finalAMS.guasavemedapi.Models.Empleado;
import io.finalAMS.guasavemedapi.Models.Gato;
import io.finalAMS.guasavemedapi.Repository.EmpleadoRepository;
import io.finalAMS.guasavemedapi.Repository.GatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpleadoService {

    private final EmpleadoRepository empleadoRepository;

    @Autowired
    public EmpleadoService(EmpleadoRepository empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }

    public Empleado crearEmpleado(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }
}
