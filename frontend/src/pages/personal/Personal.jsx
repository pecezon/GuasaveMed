import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

// Importar funciones de personal
import { getEmpleado } from "../../functions/empleado";

//Importaciones de componentes personalizados
import Presentacion from "../../components/Presentacion";
import BotonMenu from "../../components/BotonMenu";

//React Router
import { useNavigate, useLocation } from "react-router-dom";

export default function Personal() {
  //Hook para redireccionar
  const navigate = useNavigate();

  //Obtener el id del empleado
  const location = useLocation();
  const { id } = location.state || {};

  //Cargamos la recepcionista y el medico
  const [loadingRecepcionista, setLoadingRecepcionista] = useState(true);
  const [recepcionista, setRecepcionista] = useState({});

  function cargarRecepcionista() {
    setLoadingRecepcionista(true);
    getEmpleado(id)
      .then((data) => {
        setRecepcionista(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al obtener recepcionista:", error);
      })
      .finally(() => {
        setLoadingRecepcionista(false);
      });
  }

  useEffect(() => {
    cargarRecepcionista();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {loadingRecepcionista ? (
        <h1>Cargando...</h1>
      ) : recepcionista ? (
        <>
          {/* Presentacion */}
          <Presentacion name={recepcionista.nombre} rol={recepcionista.tipo} />

          <Box
            display={"flex"}
            flexDirection={"row"}
            width={"100%"}
            margin={"2rem 0"}
            height={"60%"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"2rem"}
          >
            {/* Recepcionista General */}
            <BotonMenu
              text={"Recepcionista General"}
              onClick={() => {
                navigate("/general");
              }}
            />

            {/* Recepcionista Personal */}
            <BotonMenu
              text={"Recepcionista Personal"}
              onClick={() => {
                console.log(recepcionista.idDoctor);
                navigate("/personal/citas", {
                  state: { idDoctor: recepcionista.idDoctor },
                });
              }}
            />
          </Box>
        </>
      ) : (
        <h1>Error: No se pudo cargar el recepcionista</h1>
      )}
    </Box>
  );
}
