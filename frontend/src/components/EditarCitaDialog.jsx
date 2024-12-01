import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import CustomDialog from "./CustomDialog";

//Manejo de fechas
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

//Funcion para editar una cita
import { editarCita } from "../functions/cita";

const EditarCitaDialog = ({ open, onClose, cita, actualizarCitas }) => {
  const [formData, setFormData] = useState(cita);

  useEffect(() => {
    if (cita) {
      setFormData(cita);
    }
  }, [cita]);

  const handleClose = () => {
    console.log(formData);
    onClose();
  };

  const handleSubmit = async () => {
    try {
      await editarCita(formData.id, formData);
      actualizarCitas();
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
      nombreBoton={"Editar"}
      onSubmit={() => handleSubmit()}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="20px"
      >
        <TextField
          disabled
          id="outlined-disabled"
          label="Doctor"
          defaultValue={formData.empleado ? formData.empleado.nombre : ""}
        />

        {/* Manejo de fecha y horas*/}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            sx={{ marginTop: 2 }}
            label="Fecha y Hora"
            value={formData.fecha ? dayjs(formData.fecha) : null}
            onChange={(newValue) =>
              setFormData((prev) => ({ ...prev, fecha: newValue }))
            }
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Box>
    </CustomDialog>
  );
};

export default EditarCitaDialog;
