import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

//Funcion para obtener el doctor
import { getEmpleado } from "../../functions/empleado";
import { getCitasPorDoctor } from "../../functions/cita";

//Componentes de Material UI
import { Box, Typography } from "@mui/material";

//Colores
import colors from "../../utils/colors";

//Componentes personalizados
import ListaCitas from "../../components/ListaCitas";

const GestionadorCitas = () => {
  //Obtener Doctor
  const location = useLocation();
  const { idDoctor } = location.state || {};

  const [doctor, setDoctor] = useState({});
  const [loading, setLoading] = useState(true);

  const [citas, setCitas] = useState([]);
  const [loadingCitas, setLoadingCitas] = useState(true);

  async function obtenerDoctor() {
    setLoading(true);
    try {
      const data = await getEmpleado(idDoctor);
      setDoctor(data);
      obtenerCitas(data.id);
    } catch (error) {
      console.error("Error al obtener doctor:", error);
    } finally {
      setLoading(false);
    }
  }

  //Obtener citas
  async function obtenerCitas(id) {
    setLoadingCitas(true);
    try {
      const data = await getCitasPorDoctor(id);
      setCitas(data);
    } catch (error) {
      console.error("Error al obtener citas:", error);
    } finally {
      setLoadingCitas(false);
    }
  }

  useEffect(() => {
    obtenerDoctor();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      width={"100%"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* Panel izquierdo */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"35%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={colors.lightgray}
        gap={"2rem"}
      >
        {/* Presentacion */}
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
          }}
        >
          Gestionando citas de Dr(a):
        </Typography>
        {loading ? (
          <Typography>Cargando...</Typography>
        ) : (
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            }}
          >
            {doctor.nombre}
          </Typography>
        )}
        <Box
          component="img"
          src="/images/importanteNoBorrar.jpeg"
          alt="Dr Frio"
          sx={{
            alignItems: "center",
            width: "50%",
            maxWidth: "300px",
          }}
        />
      </Box>

      {/* Panel derecho */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"65%"}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Citas
        </Typography>
        {loadingCitas ? (
          <Typography>Cargando...</Typography>
        ) : (
          <ListaCitas citas={citas} />
        )}
      </Box>
    </Box>
  );
};

export default GestionadorCitas;
