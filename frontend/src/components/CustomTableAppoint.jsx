import React from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
} from "@mui/material";
import colors from "../utils/colors";
import EditarCitaDialog from "./EditarCitaDialog";
import CancelarCitaDialog from "./CancelarCitaDialog";

function CustomTableAppoint({ citas, actualizarCitas }) {
  //Open dialog editar cita
  const [open, setOpen] = useState(false);
  const handleClickOpen = (row) => {
    setCitaActual(row);
    console.log(row);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Open dialog eliminar cita
  const [openEliminar, setOpenEliminar] = useState(false);
  const handleClickOpenEliminar = (row) => {
    console.log(row);
    setOpenEliminar(true);
  };
  const handleCloseEliminar = () => {
    setOpenEliminar(false);
  };

  //Cita a editar
  const [citaActual, setCitaActual] = useState({});

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ borderColor: "black", border: "2px solid black" }}>
          {/* Head */}
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: "25%", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                Medico
              </TableCell>
              <TableCell
                sx={{ width: "25%", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                Fecha
              </TableCell>
              <TableCell
                sx={{ width: "25%", fontSize: "1.1rem", fontWeight: "bold" }}
              >
                Consultorio
              </TableCell>
              <TableCell sx={{ width: "25%" }}></TableCell>
            </TableRow>
          </TableHead>

          {/* Body */}
          <TableBody>
            {citas ? (
              citas.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {row.empleado ? row.empleado.nombre : "No disponible"}
                  </TableCell>
                  <TableCell>{row.fecha || "No disponible"}</TableCell>
                  <TableCell>{row.consultorio || "No disponible"}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        gap: "0.15rem",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* 
                      Actualizar cita boton y dialog
                       */}
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginRight: 1 }}
                        onClick={() => handleClickOpen(row)}
                      >
                        Editar
                      </Button>
                      <EditarCitaDialog
                        open={open}
                        onClose={handleClose}
                        cita={citaActual}
                        actualizarCitas={actualizarCitas}
                      ></EditarCitaDialog>

                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleClickOpenEliminar(row)}
                      >
                        Eliminar
                      </Button>
                      <CancelarCitaDialog
                        open={openEliminar}
                        onClose={handleCloseEliminar}
                        cita={citaActual}
                        actualizarCitas={actualizarCitas}
                      ></CancelarCitaDialog>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Typography>No hay citas programadas</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomTableAppoint;
