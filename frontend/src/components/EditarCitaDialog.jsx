import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import CustomDialog from "./CustomDialog";

//Manejo de fechas
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

//Funcion para editar una cita
import { editarCita } from "../functions/cita";

const EditarCitaDialog = ({ open, onClose, cita }) => {
  const [formData, setFormData] = useState(cita);

  const handleClose = () => {
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    try {
      editarCita(formData.id, formData);
      alert("Cita editada correctamente");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      title={"FORMULARIO AGENDAR CITA"}
      onSubmit={() => handleSubmit()}
    >
      <Select
        name="medic"
        value={formData.empleado ? formData.empleado.nombre : ""}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, medic: e.target.value }))
        }
        fullWidth
        displayEmpty
      >
        <MenuItem value="" disabled>
          {formData.empleado ? formData.empleado.nombre : ""}
        </MenuItem>
      </Select>

      {/* Manejo de fecha y horas*/}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          sx={{ marginTop: 2 }}
          label="Fecha y Hora"
          value={formData.date}
          onChange={(newValue) =>
            setFormData((prev) => ({ ...prev, date: newValue }))
          }
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </CustomDialog>
  );
};

export default EditarCitaDialog;
