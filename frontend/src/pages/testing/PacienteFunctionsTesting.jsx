import React, { useEffect } from "react";
import { useState } from "react";
import { getPacientes } from "../../functions/paciente";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import TablaTest from "../../components/TablaTest";

//columnas de la tabla
const columnas = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "edad",
    headerName: "Edad",
    width: 150,
    editable: true,
  },
  {
    field: "telefono",
    headerName: "Telefono",
    type: "number",
    width: 110,
    editable: true,
  },
];

const PacienteFunctionsTesting = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    try {
      getPacientes().then((data) => {
        setPacientes(data);
        console.log(data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Box width="100%" display="flex" flexDirection="column" padding="1rem">
      <h1>Testing de funciones de Paciente</h1>
      <h2>1) Obtener todos los pacientes</h2>
      <TablaTest rows={pacientes} columns={columnas} height={400} width="80%" />
    </Box>
  );
};

export default PacienteFunctionsTesting;
