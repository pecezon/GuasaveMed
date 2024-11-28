package io.finalAMS.guasavemedapi.Services;

import io.finalAMS.guasavemedapi.Models.Empleado;
import io.finalAMS.guasavemedapi.Repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Empleado> obtenerEmpleadoPorID(long id) {
        return empleadoRepository.findById(id);
    }

    public List<Empleado> obtenerDoctores(){
        return empleadoRepository.findByTipo("doctor");
    }
}
