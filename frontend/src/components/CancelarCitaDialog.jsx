import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CustomDialog from "./CustomDialog";

//Funcion para cancelar una cita
import { borrarCita } from "../functions/cita";

const CancelarCitaDialog = ({ open, onClose, cita, actualizarCitas }) => {
  const [formData, setFormData] = useState(cita);

  useEffect(() => {
    console.log(cita.id);
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
      await borrarCita(cita.id);
      actualizarCitas();
      alert("Cita eliminada correctamente");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      title={"Seguro que desea cancelar la cita?"}
      nombreBoton={"Cancelar"}
      onSubmit={() => handleSubmit()}
      colorBoton="error"
    ></CustomDialog>
  );
};

export default CancelarCitaDialog;
