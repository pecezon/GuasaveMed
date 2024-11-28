import React, { useEffect } from "react";
import { useState } from "react";
import { getPacientes } from "../../functions/paciente";
import { Box, TextField, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import TablaTest from "../../components/TablaTest";
import {
  getPaciente,
  crearPaciente,
  actualizarPaciente,
} from "../../functions/paciente";

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
  //obtener todos los pacientes
  const [pacientes, setPacientes] = useState([]);

  //obtener paciente por id
  const [idPaciente, setIdPaciente] = useState("");
  const [paciente, setPaciente] = useState([]);

  //crear paciente
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [telefono, setTelefono] = useState("");

  //Sacar todos los pacientes de una
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

  //Sacar un paciente por id
  function getPacienteById() {
    try {
      getPaciente(idPaciente).then((data) => {
        setPaciente(data);
        console.log(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  //Crear un paciente
  function createPaciente() {
    try {
      const newPaciente = {
        nombre: nombre,
        edad: edad,
        telefono: telefono,
      };
      crearPaciente(newPaciente).then((data) => {
        console.log(data);
        alert("Paciente creado con exito id: " + data.id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  //Actualizar un paciente
  function updatePaciente() {
    try {
      const newPaciente = {
        nombre: nombre,
        edad: edad,
        telefono: telefono,
      };
      actualizarPaciente(idPaciente, newPaciente).then((data) => {
        console.log(data);
        alert("Paciente actualizado con exito id: " + data.id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  //Get paciente para actualizar
  function getPacienteByIdParaActualizar() {
    try {
      getPaciente(idPaciente).then((data) => {
        setNombre(data.nombre);
        setEdad(data.edad);
        setTelefono(data.telefono);
        console.log(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      padding="1rem"
      alignItems="center"
    >
      <h1>Testing de funciones de Paciente</h1>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="1rem"
        width={"100%"}
        gap={2}
      >
        <h2>1) Obtener todos los pacientes</h2>
        <TablaTest
          rows={pacientes}
          columns={columnas}
          height={400}
          width="700px"
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="1rem"
        width={"100%"}
        gap={2}
      >
        <h2>2) Obtener paciente por id</h2>
        <TextField
          id="outlined-number"
          label="Id del paciente"
          type="number"
          value={idPaciente}
          onChange={(e) => setIdPaciente(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <Button variant="contained" color="primary" onClick={getPacienteById}>
          Buscar
        </Button>
        <Typography>
          Datos del paciente buscado id: {paciente.id}
          <br /> {paciente.nombre} <br /> {paciente.edad} <br />{" "}
          {paciente.telefono}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="1rem"
        width={"100%"}
        gap={2}
      >
        <h2>3) Crear Paciente</h2>
        <TextField
          id="outlined-number"
          label="Nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="outlined-number"
          label="Edad"
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="outlined-number"
          label="Telefono"
          type="number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <Button variant="contained" color="primary" onClick={createPaciente}>
          Crear
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="1rem"
        width={"100%"}
        gap={2}
      >
        <h2>4) Editar Paciente</h2>
        <TextField
          id="outlined-number"
          label="Id del paciente"
          type="number"
          value={idPaciente}
          onChange={(e) => setIdPaciente(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={getPacienteByIdParaActualizar}
        >
          Buscar
        </Button>
        <TextField
          id="outlined-number"
          label="Nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="outlined-number"
          label="Edad"
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="outlined-number"
          label="Telefono"
          type="number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <Button variant="contained" color="primary" onClick={updatePaciente}>
          Actualizar
        </Button>
      </Box>
    </Box>
  );
};

export default PacienteFunctionsTesting;
