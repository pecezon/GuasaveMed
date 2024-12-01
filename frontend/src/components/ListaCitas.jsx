import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState } from "react";

//Funcion para actualizar un paciente
import { actualizarPaciente } from "../functions/paciente";

//Funcion para actualizar una cita
import { editarCita } from "../functions/cita";

//Componentes personalizados
import EditarRegistroDialog from "./EditarRegistroDialog";

const ListaCitas = ({ citas }) => {
  //Abrir Dialog de edicion de registro

  //Funciones para abrir y cerrar el dialog
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [selectedCita, setSelectedCita] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenForm = (cita) => {
    setSelectedCita(cita);
    setSelectedPaciente(cita.paciente);
    console.log(cita.paciente);
    setOpen(true); // Abre el formulario
  };

  const handleCloseForm = () => {
    setOpen(false);
    setSelectedPaciente(null); // Cierra el formulario
  };

  const handleSavePaciente = async (updatedPaciente, cita) => {
    console.log(updatedPaciente, cita);
    await actualizarPaciente(updatedPaciente.id, updatedPaciente);
    await editarCita(cita.id, cita);
    handleCloseForm();
    alert("Paciente actualizado con exito");
  };

  return (
    <TableContainer component={Paper} sx={{ minWidth: 650, width: "90%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id Cita</TableCell>
            <TableCell align="right">Paciente</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Razon</TableCell>
            <TableCell align="right">Registrar/Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {citas.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.paciente.nombre}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.razonIngreso}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpenForm(row)}
                >
                  Editar
                </Button>
                <EditarRegistroDialog
                  open={open}
                  onClose={handleCloseForm}
                  paciente={selectedPaciente}
                  cita={selectedCita}
                  onSave={handleSavePaciente}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListaCitas;
