import React, { useState, useEffect } from "react";
import CustomDialog from "./CustomDialog";

//Componentes de Material UI
import { TextField } from "@mui/material";

const EditarRegistroDialog = ({ open, onClose, paciente, onSave, cita }) => {
  //Plantilla de los datos
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    edad: "",
    telefono: "",
  });

  //Cita
  const [razon, setRazon] = useState("");

  //Funcion para llenar los datos
  useEffect(() => {
    if (paciente) {
      setFormData({
        id: paciente.id,
        nombre: paciente.nombre,
        edad: paciente.edad,
        telefono: paciente.telefono,
      });
    }
    if (cita) {
      setRazon(cita.razonIngreso);
    }
  }, [paciente, cita]);

  //Funcion para manejar los cambios en los inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler para guardar los datos editados
  const handleSave = () => {
    // Actualizar la razón de la cita
    cita.razonIngreso = razon;

    // Actualiza el paciente si se modifica algún dato
    const updatedPaciente = {
      ...formData, // Aquí obtenemos los datos del paciente actualizados
    };

    // Actualizamos al paciente
    onSave(updatedPaciente, cita); // Pasamos los datos actualizados tanto del paciente como de la cita
  };

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={"Editar Registro"}
      onSubmit={handleSave}
      nombreBoton="Guardar"
    >
      {/* Campo ID (deshabilitado) */}
      <TextField
        label="ID"
        name="id"
        value={formData.id}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        disabled
      />
      {/* Campo Nombre del Paciente */}
      <TextField
        label="Nombre del Paciente"
        name="nombre"
        value={formData.nombre}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      {/* Campo Edad */}
      <TextField
        label="Edad"
        name="edad"
        value={formData.edad}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      {/* Campo Teléfono */}
      <TextField
        label="Teléfono"
        name="telefono"
        value={formData.telefono}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      {/* Campo Razon */}
      <TextField
        label="Razon"
        name="razonIngreso"
        value={razon}
        onChange={(event) => {
          setRazon(event.target.value);
        }}
        fullWidth
        margin="normal"
      />
    </CustomDialog>
  );
};

export default EditarRegistroDialog;
