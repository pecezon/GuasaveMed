import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import CustomDialog from "../../components/CustomDialog";
import { useNavigate, useLocation } from "react-router-dom";
import "@fontsource/bayon";

//Funcion para crear expediente
import {
  crearExpediente,
  getExpedientePaciente,
  actualizarExpediente,
} from "../../functions/expediente";

//Funcion para crear receta
import { crearReceta } from "../../functions/receta";

//Funcion para crear pdf de recetas
import { generarRecetaPDF } from "../../functions/pdf";

function Medic() {
  //Obtener el doctor
  const location = useLocation();
  const { doctor } = location.state || {};

  const navigate = useNavigate();
  const usuario = doctor.nombre;

  const [openCrearExp, setOpenCrearExp] = useState(false);
  const [openConsultarHis, setOpenConsultarHis] = useState(false);
  const [openActualizarHis, setOpenActualizarHis] = useState(false);
  const [openRealizarRec, setOpenRealizarRec] = useState(false);

  const [historialClinico, setHistorialClinico] = useState({
    id: "",
    diagnosticos: "",
    padecimiento: "",
    tratamientos: "",
    historiaClinica: "",
  });

  /**
   *
   * CREACION DE EXPEDIENTES
   *
   */

  const [expediente, setExpediente] = useState({
    paciente: {
      id: "",
    },
    diagnosticos: "",
    padecimiento: "",
    tratamientos: "",
    historiaClinica: "",
  });

  const handleChangeExpediente = (e) => {
    const { name, value } = e.target;

    setExpediente((prev) => {
      if (name === "paciente") {
        return { ...prev, paciente: { ...prev.paciente, id: value } };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmitExp = () => {
    crearExpediente(expediente)
      .then((res) => {
        if (res.error) {
          alert("Error al crear expediente");
          return;
        }
        console.log(res);
        alert("Expediente creado con exito");
      })
      .catch((err) => {
        console.log(err);
        alert("Error al crear expediente");
      });
    handleCloseCrearExp();
  };

  /*
  
  Consultar expediente


  */

  const [expedienteConsultar, setExpedienteConsultar] = useState();
  const [idPaciente, setIdPaciente] = useState();

  const buscarExpediente = async (id) => {
    try {
      const res = await getExpedientePaciente(id);
      setExpedienteConsultar(res);
      if (res.error) {
        alert("Error al buscar expediente");
        return;
      }
    } catch (error) {
      alert("Error al buscar expediente");
      console.log(error);
    }
  };

  /*
  
    Crear Receta
  
  */
  const [receta, setReceta] = useState({
    paciente: {
      id: "",
    },
    empleado: {
      id: doctor.id,
    },
    medicamentos: "",
    especificaciones: "",
  });

  const handleRecetaChange = (e) => {
    const { name, value } = e.target;

    setReceta((prev) => {
      if (name === "paciente") {
        return { ...prev, paciente: { ...prev.paciente, id: value } };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleRecetaSubmit = () => {
    crearReceta(receta)
      .then((res) => {
        if (res.error) {
          alert("Error al crear receta");
          return;
        }
        console.log(res);
        alert("Receta creada con exito");
        generarRecetaPDF(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Error al crear receta");
      });
    handleCloseRealizarRec();
  };

  /* 
  
  ACTUALIZAR EXPEDIENTE
  
  */

  const [idPacienteActualizar, setIdPacienteActualizar] = useState();
  const [expedienteActualizar, setExpedienteActualizar] = useState({
    diagnosticos: "",
    padecimiento: "",
    tratamientos: "",
    historiaClinica: "",
  });

  const buscarExpedienteActualizar = async () => {
    try {
      const res = await getExpedientePaciente(idPacienteActualizar);
      if (res.error) {
        alert("Error al buscar expediente");
        return;
      }
      setExpedienteActualizar(res);
    } catch (error) {
      alert("Error al buscar expediente");
      console.log(error);
    }
  };

  const handleChangeExpedienteActualizar = (e) => {
    const { name, value } = e.target;

    setExpedienteActualizar((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleActualizarSubmit = async () => {
    try {
      console.log(expedienteActualizar.id, expedienteActualizar);
      const res = await actualizarExpediente(
        expedienteActualizar.id,
        expedienteActualizar
      );
      if (res.error) {
        alert("Error al actualizar expediente");
        return;
      }
      alert("Expediente actualizado con exito");
    } catch (error) {
      alert("Error al actualizar expediente");
      console.log(error);
    }
  };

  //No se que chingados es esto pero lo dejo por si acaso
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHistorialClinico((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitCon = () => {
    console.log(historialClinico);
    handleCloseConsultarHis();
  };

  const handleSubmitRec = () => {
    console.log(historialClinico);
    handleCloseRealizarRec();
  };

  const handleSubmitActu = () => {
    console.log(historialClinico);
    handleCloseActualizarHis();
  };

  const handleOpenCrearExp = () => setOpenCrearExp(true);
  const handleCloseCrearExp = () => setOpenCrearExp(false);
  const handleOpenConsultarHis = () => setOpenConsultarHis(true);
  const handleCloseConsultarHis = () => setOpenConsultarHis(false);
  const handleOpenActualizarHis = () => setOpenActualizarHis(true);
  const handleCloseActualizarHis = () => setOpenActualizarHis(false);
  const handleOpenRealizarRec = () => setOpenRealizarRec(true);
  const handleCloseRealizarRec = () => setOpenRealizarRec(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        marginTop: { xs: "5vh", sm: "5vh", md: "5vh" },
        alignItems: "center",
        textAlign: "center",
        padding: { xs: "0rem", sm: "0.5rem" },
      }}
    >
      {/* Box para la bienvenida */}
      <Box>
        <Box
          component="img"
          src="/images/WELCOME.png"
          alt="Welcome Image"
          sx={{
            alignItems: "center",
            width: "90%",
          }}
        ></Box>

        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            marginTop: "2rem",
          }}
        >
          DOCTOR
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            marginTop: "2rem",
          }}
        >
          {usuario}
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: { xs: "30%", sm: "20%", md: "7%" },
          width: "80%",
          height: "auto",
          justifyContent: "center",
          display: "flex",
          alignSelf: "center",
          paddingTop: { xs: "1rem", sm: "2rem", md: "4rem" },
          paddingBottom: { xs: "1rem", sm: "2rem", md: "4rem" },
          paddingLeft: { xs: "1rem", sm: "2rem", md: "4rem" },
          paddingRight: { xs: "1rem", sm: "2rem", md: "4rem" },
          borderRadius: 16,
          backgroundColor: "#E6F2FC",
          boxShadow: "inset 0px 4px 47.8px rgba(39,91,158,0.25)",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
            width: "100%",
          }}
        >
          {/* 
          
          Crear expediente
          
          */}

          <Button
            variant="contained" // Use "contained" to enable background color fill
            size="large"
            onClick={handleOpenCrearExp}
            sx={{
              fontFamily: "Bayon, sans-serif",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              padding: { xs: "1rem 2rem", sm: "1.5rem 3rem", md: "2rem 4rem" },
              borderRadius: "1rem",
              boxShadow: 2,
              color: "#56210A",
              backgroundColor: "#FFFAF4",
              "&:hover": {
                backgroundColor: "#FFBC58",
              },
            }}
          >
            CREAR EXPEDIENTE
          </Button>

          <CustomDialog
            open={openCrearExp}
            onClose={handleCloseCrearExp}
            title="Crear expediente"
            onSubmit={handleSubmitExp}
          >
            <TextField
              id="outlined-number"
              label="Id Paciente"
              type="number"
              name="paciente"
              value={expediente.paciente.id}
              onChange={handleChangeExpediente}
              sx={{ marginBottom: "1rem", marginTop: "1rem" }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              label="Diagnósticos anteriores"
              name="diagnosticos"
              value={expediente.diagnosticos}
              onChange={handleChangeExpediente}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Padecimiento actual"
              name="padecimiento"
              value={expediente.padecimiento}
              onChange={handleChangeExpediente}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Tratamientos actuales"
              name="tratamientos"
              value={expediente.tratamientos}
              onChange={handleChangeExpediente}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Historia clínica familiar"
              name="historiaClinica"
              value={expediente.historiaClinica}
              onChange={handleChangeExpediente}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
          </CustomDialog>

          {/* 
          
          Consultar historial
          
          */}

          <Button
            size="large"
            onClick={handleOpenConsultarHis}
            sx={{
              fontFamily: "Bayon, sans-serif",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              padding: { xs: "1rem 2rem", sm: "1.5rem 3rem", md: "2rem 4rem" },
              borderRadius: "1rem",
              boxShadow: 2,
              color: "#56210A",
              backgroundColor: "#FFFAF4",
              "&:hover": {
                backgroundColor: "#FFBC58",
              },
            }}
          >
            CONSULTAR HISTORIAL
          </Button>

          <CustomDialog
            open={openConsultarHis}
            onClose={handleCloseConsultarHis}
            title="Consultar Historial"
            onSubmit={handleSubmitCon}
            colorBoton="red"
            nombreBoton="Cerrar"
          >
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={"1rem"}
              alignItems={"center"}
            >
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                id="numberConsultar"
                label="Id Paciente"
                name="idPaciente"
                value={idPaciente}
                type="number"
                onChange={(e) => setIdPaciente(e.target.value)}
                sx={{ marginBottom: "1rem", marginTop: "1rem" }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{ height: "3rem" }}
                onClick={() => buscarExpediente(idPaciente)}
              >
                Buscar
              </Button>
            </Box>
            <TextField
              disabled
              InputLabelProps={{
                shrink: true,
              }}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              label="Diagnósticos anteriores"
              name="diagnosticos"
              value={expedienteConsultar?.diagnosticos}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              disabled
              InputLabelProps={{
                shrink: true,
              }}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              label="Padecimiento actual"
              name="padecimiento"
              value={expedienteConsultar?.padecimiento}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              disabled
              InputLabelProps={{
                shrink: true,
              }}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              label="Tratamientos actuales"
              name="tratamientos"
              value={expedienteConsultar?.tratamientos}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              disabled
              InputLabelProps={{
                shrink: true,
              }}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
              label="Historia clínica familiar"
              name="historiaFamiliar"
              value={expedienteConsultar?.historiaClinica}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
          </CustomDialog>

          {/* 
          
          Hacer Receta
          
          */}

          <Button
            size="large"
            onClick={handleOpenRealizarRec}
            sx={{
              fontFamily: "Bayon, sans-serif",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              padding: { xs: "1rem 2rem", sm: "1.5rem 3rem", md: "2rem 4rem" },
              borderRadius: "1rem",
              boxShadow: 2,
              color: "#56210A",
              backgroundColor: "#FFFAF4",
              "&:hover": {
                backgroundColor: "#FFBC58",
              },
            }}
          >
            HACER RECETA
          </Button>

          <CustomDialog
            open={openRealizarRec}
            onClose={handleCloseRealizarRec}
            title="Hacer Receta"
            onSubmit={handleRecetaSubmit}
          >
            <TextField
              label="Id Paciente"
              //value={historialClinico.id}
              type="number"
              value={receta.paciente.id}
              name="paciente"
              onChange={handleRecetaChange}
              sx={{ marginBottom: "1rem", marginTop: "1rem" }}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField
              label="Nombre del medicamento"
              name="medicamentos"
              value={receta.medicamentos}
              onChange={handleRecetaChange}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Especificaciones"
              name="especificaciones"
              value={receta.especificaciones}
              onChange={handleRecetaChange}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
          </CustomDialog>

          {/* 
          
          Actualizar Historial
          
          */}

          <Button
            size="large"
            onClick={handleOpenActualizarHis}
            sx={{
              fontFamily: "Bayon, sans-serif",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              padding: { xs: "1rem 2rem", sm: "1.5rem 3rem", md: "2rem 4rem" },
              borderRadius: "1rem",
              boxShadow: 2,
              color: "#56210A",
              backgroundColor: "#FFFAF4",
              "&:hover": {
                backgroundColor: "#FFBC58",
              },
            }}
          >
            ACTUALIZAR DATOS
          </Button>

          <CustomDialog
            open={openActualizarHis}
            onClose={handleCloseActualizarHis}
            title="Actualizar datos"
            onSubmit={handleActualizarSubmit}
            nombreBoton="Actualizar"
            colorBoton="green"
          >
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap={"1rem"}
              alignItems={"center"}
            >
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                id="numberConsultar"
                label="Id Paciente"
                name="idPacienteActualizar"
                value={idPacienteActualizar}
                type="number"
                onChange={(e) => setIdPacienteActualizar(e.target.value)}
                sx={{ marginBottom: "1rem", marginTop: "1rem" }}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{ height: "3rem" }}
                onClick={() => buscarExpedienteActualizar(idPacienteActualizar)}
              >
                Buscar
              </Button>
            </Box>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Diagnósticos anteriores"
              name="diagnosticos"
              value={expedienteActualizar?.diagnosticos}
              onChange={handleChangeExpedienteActualizar}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Padecimiento actual"
              name="padecimiento"
              value={expedienteActualizar?.padecimiento}
              onChange={handleChangeExpedienteActualizar}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Tratamientos actuales"
              name="tratamientos"
              defaultValue={expedienteActualizar?.tratamientos}
              onChange={handleChangeExpedienteActualizar}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Historia clínica familiar"
              name="historiaFamiliar"
              defaultValue={expedienteActualizar?.historiaClinica}
              onChange={handleChangeExpedienteActualizar}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
          </CustomDialog>
        </Box>
      </Box>
    </Box>
  );
}

export default Medic;
