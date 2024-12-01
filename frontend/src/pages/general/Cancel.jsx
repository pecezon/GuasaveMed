import React from "react";
import { useState } from "react";

// Importar componentes de Material-UI
import { Box, Typography } from "@mui/material";

// Importar componentes personalizados
import CustomTable from "../../components/CustomTable";
import CustomTableAppoint from "../../components/CustomTableAppoint";
import CustomTablePast from "../../components/CustomTablePast";

// Importar hook para obtener la ubicacion actual
import { useLocation } from "react-router-dom";

//Importar funciones de citas
import { getCitasPorPaciente } from "../../functions/cita";

function Cancel() {
  //Conectar con la pagina padre que nos redirige a esta pagina
  const location = useLocation();
  const { paciente } = location.state || {};

  //Paciente actual
  const pacient = paciente || "Paciente no seleccionado";

  //Obtener citas del paciente
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);

  //Actualizar citas
  function updateCitas() {
    setLoading(true);
    getCitasPorPaciente(pacient.id)
      .then((data) => {
        setCitas(data);
      })
      .catch((error) => {
        console.error("Error al obtener citas:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useState(() => {
    updateCitas();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: { xs: "1rem", sm: "2rem" },
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ alignContent: "center", alignItems: "center" }}>
        {/* Titulo */}
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
          }}
        >
          PORTAL PACIENTES
        </Typography>

        {/* Nombre del paciente */}
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          PACIENTE: {pacient.nombre}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-between",
          gap: "2rem",
          marginTop: "1rem",
          width: { xs: "90%", sm: "100%", md: "100%" },
          height: "auto",
          alignSelf: "center",
        }}
      >
        {/* Informacion del paciente */}
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "auto",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            textAlign: "center",
            padding: "0.5rem",
          }}
        >
          <Typography sx={{ marginBottom: "1rem" }}>
            INFORMACION DEL PACIENTE
          </Typography>

          {/* Tabla personalizada */}
          <CustomTable pacientes={[paciente]} />
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "auto",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            textAlign: "center",
            padding: "0.5rem",
          }}
        >
          <Typography sx={{ marginBottom: "1rem" }}>
            CITAS PROGRAMADAS
          </Typography>

          {/* Tabla personalizada para citas programadas */}
          {loading ? (
            <Typography>Cargando...</Typography>
          ) : Array.isArray(citas) && citas.length > 0 ? (
            <CustomTableAppoint citas={citas} actualizarCitas={updateCitas} />
          ) : (
            <Typography>No hay citas disponibles</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Cancel;
