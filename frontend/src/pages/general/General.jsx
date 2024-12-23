import React, { useEffect, useState } from "react";

//Imports de material ui
import {
  Box,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  Checkbox,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CustomDialog from "../../components/CustomDialog";
import Cancel from "../general/Cancel";

//Manejo de fechas
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

//React router
import { useNavigate, useLocation } from "react-router-dom";

//Funciones de la API
import { getDoctores } from "../../functions/empleado";
import { crearCita } from "../../functions/cita";
import {
  crearPaciente,
  getPacientes,
  getPaciente,
} from "../../functions/paciente";

function General() {
  //React router
  const navigate = useNavigate();

  //Obtener el id del empleado
  const location = useLocation();
  const { nombre } = location.state || {};

  //Pop ups y sus funciones
  const [openAgendar, setOpenAgendar] = useState(false);
  const [openPaciente, setOpenPaciente] = useState(false);
  const [openRegistro, setOpenRegistro] = useState(false);
  const [openModif, setOpenModif] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [filteredPacientes, setFilteredPacientes] = useState([]);

  const handleOpenAgendar = () => setOpenAgendar(true);
  const handleCloseAgendar = () => setOpenAgendar(false);

  //Que pasa cuando se abre el dialogo del portal pacientes
  const handleOpenPaciente = () => {
    //Cerrar si no ha cargado
    if (pacientesLoading) {
      return;
    }

    //Filtrar pacientes
    if (searchTerm === "") {
      setFilteredPacientes(pacientes);
    } else {
      setFilteredPacientes(
        pacientes.filter((item) =>
          item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    //Mostrar dialogo
    setOpenPaciente(true);
  };

  const handleClosePaciente = () => setOpenPaciente(false);

  const handleOpenRegistro = () => setOpenRegistro(true);
  const handleCloseRegistro = () => setOpenRegistro(false);

  const handleOpenModif = () => setOpenModif(true);
  const handleCloseModif = () => setOpenModif(false);

  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //Manejo de formularios
  const initialFormData = {
    name: "",
    age: "",
    phone: "",
    medic: "",
    date: dayjs(),
    reason: "",
    consultorio: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  //Es paciente critico?
  const [critico, setCritico] = useState(false);

  //Es paciente existente?
  const [existente, setExistente] = useState(false);

  //Id del paciente a actualizar
  const [idPacienteActualizar, setIdPacienteActualizar] = useState("");

  //Manejo de checkbox critico
  const handleChangeCritico = (e) => {
    if (e.target.checked) {
      setCritico(true);
    } else {
      setCritico(false);
    }
  };

  //Manejo de ventanas
  const handleSubmit = (dialogType) => {
    setFormData(initialFormData);

    if (dialogType === "agendar") {
      //Logica de crear cita/crear paciente
      //Cita actual
      // Al crear una cita, se debe enviar el id del paciente, el id del médico, la fecha y la hora
      // Antes de crear una cita se debe crear un paciente

      if (existente) {
        //Crear cita con paciente existente
        crearCita({
          paciente: { id: idPacienteActualizar },
          empleado: { id: formData.medic },
          fecha: formData.date.toISOString(),
          tipo: "cn",
          consultorio: formData.consultorio,
        })
          .then((res) => {
            if (res.error) {
              console.error("Error creando cita: ", res.error);
              window.alert("Error creando cita: " + res.error);
              return;
            }
            console.log("CITA CREADA: ", res);
            window.alert(
              "Cita creada exitosamente id del paciente: " + res.paciente.id
            );
          })
          .catch((err) => console.error("Error creando cita: ", err));
      } else {
        crearPaciente({
          nombre: formData.name,
          edad: formData.age,
          telefono: formData.phone,
        })
          .then((res) => {
            if (res.error) {
              console.error("Error creando paciente: ", res.error);
              window.alert("Error creando paciente: " + res.error);
              return;
            }
            console.log("PACIENTE CREADO: ", res);
            if (res && res.id) {
              console.log("Paciente ID: ", res.id);
              crearCita({
                paciente: { id: res.id },
                empleado: { id: formData.medic },
                fecha: formData.date.toISOString(),
                tipo: "cn",
                consultorio: formData.consultorio,
              })
                .then((res) => {
                  if (res.error) {
                    console.error("Error creando cita: ", res.error);
                    window.alert("Error creando cita: " + res.error);
                    return;
                  }
                  console.log("CITA CREADA: ", res);
                  window.alert(
                    "Cita creada exitosamente id del paciente: " +
                      res.paciente.id
                  );
                })
                .catch((err) => console.error("Error creando cita: ", err));
            } else {
              console.error("Paciente ID no encontrado");
            }
          })
          .catch((err) => console.error("Error creando paciente: ", err));

        handleCloseAgendar();
      }
    } else if (dialogType === "paciente") {
      handleClosePaciente();
      navigate("/paciente", { state: { selectedItem: selectedPaciente } });

      //Hacer cita de emergencia
    } else if (dialogType === "emergencia") {
      //Crear paciente
      crearPaciente({
        nombre: formData.name,
        edad: formData.age,
      })
        .then((res) => {
          console.log("PACIENTE CREADO: ", res);
          if (res && res.id) {
            console.log("Paciente ID: ", res.id);
            crearCita({
              paciente: { id: res.id },
              fecha: dayjs().toISOString(),
              tipo: critico ? "cec" : "ce",
              razon: formData.reason,
              consultorio: critico ? null : formData.consultorio,
            })
              .then((res) => {
                console.log("CITA CREADA: ", res);
                window.alert(
                  "Cita creada exitosamente id del paciente: " + res.paciente.id
                );
              })
              .catch((err) => console.error("Error creando cita: ", err));
          } else {
            console.error("Paciente ID no encontrado");
          }
        })
        .catch((err) => console.error("Error creando paciente: ", err));
    }
  };

  //Doctores guarda el listado de doctores
  const [doctores, setDoctores] = useState([]);
  const [doctoresLoading, setDoctoresLoading] = useState(true);

  //Pacientes guarda el listado de pacientes
  const [pacientes, setPacientes] = useState([]);
  const [pacientesLoading, setPacientesLoading] = useState(true);

  //Get doctores y pacientes
  const getMedics = async () => {
    const res = await getDoctores();
    setDoctores(res);
    setDoctoresLoading(false);
    console.log("MEDICOS: ", res);
  };

  const GetPacientes = async () => {
    const res = await getPacientes();
    setPacientes(res);
    setPacientesLoading(false);
    console.log("PACIENTES: ", res);
  };

  //Codigo ejecutado al cargar la pagina
  useEffect(() => {
    const fetchData = async () => {
      await GetPacientes();
      await getMedics();
    };
    fetchData();
  }, []);

  //Manejo de busqueda
  const [searchTerm, setSearchTerm] = useState("");

  const reasons = [
    { value: "1", label: "Exceso de Homosexualidad" },
    { value: "2", label: "Choque" },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

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
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
          }}
        >
          RECEPCIONISTA GENERAL
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            marginTop: "2rem",
          }}
        >
          {nombre}
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
          <Button
            variant="outlined"
            size="large"
            onClick={handleOpenAgendar}
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
            AGENDAR CITA
          </Button>

          {/*Dialog to create pop ups */}
          <CustomDialog
            open={openAgendar}
            onClose={handleCloseAgendar}
            title={"FORMULARIO AGENDAR CITA"}
            onSubmit={() => handleSubmit("agendar")}
          >
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Typography>Paciente Existente?</Typography>
              <Checkbox
                checked={existente}
                onChange={(e) => setExistente(e.target.checked)}
                inputProps={{ "aria-label": "controlled checkbox" }}
              />
            </Box>
            {!existente ? (
              <>
                <TextField
                  margin="dense"
                  name="name"
                  label="Nombre"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  name="age"
                  label="Edad"
                  type="number"
                  fullWidth
                  variant="outlined"
                  value={formData.age}
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  name="phone"
                  label="Teléfono"
                  type="tel"
                  fullWidth
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </>
            ) : (
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
            )}
            <Select
              name="medic"
              value={formData.medic}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, medic: e.target.value }))
              }
              fullWidth
              displayEmpty
            >
              <MenuItem value="" disabled>
                Seleccione un médico
              </MenuItem>

              {/* Doctores (Cargarlos hasta que esten listos)*/}
              {!doctoresLoading ? (
                doctores.map((medic) => (
                  <MenuItem key={medic.id} value={medic.id}>
                    {medic.nombre}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="" disabled>
                  Cargando...
                </MenuItem>
              )}
            </Select>

            {/* Manejo de fecha y horas*/}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                sx={{ marginTop: 2 }}
                label="Fecha y Hora"
                value={formData.date}
                onChange={(newValue) =>
                  setFormData((prev) => ({ ...prev, date: newValue }))
                }
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>

            <TextField
              margin="dense"
              name="consultorio"
              label="Consultorio (Opcional)"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.consultorio}
              onChange={handleChange}
            />
          </CustomDialog>

          {/* Boton Pacientes */}
          <Button
            variant="outlined"
            size="large"
            onClick={handleOpenPaciente}
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
            PORTAL PACIENTES
          </Button>

          {/* Dialog de portal pacientes */}
          <CustomDialog
            open={openPaciente}
            onClose={handleClosePaciente}
            title={"BUSCAR PACIENTE"}
            onSubmit={() => handleSubmit("paciente")}
          >
            {/* Buscador */}
            <TextField
              label="Buscar"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={handleSearch}
              sx={{ marginBottom: 2, marginTop: 2 }}
            />

            {/* Paciente seleccionado */}
            <Typography>
              {selectedPaciente && (
                <p>Paciente seleccionado: {selectedPaciente}</p>
              )}
            </Typography>

            {/* Lista de pacientes */}
            <List>
              {filteredPacientes.length > 0 ? (
                filteredPacientes.map((paciente) => (
                  <ListItem
                    key={paciente.id}
                    sx={{ textAlign: "left", cursor: "pointer" }}
                    onClick={() => {
                      setSelectedPaciente(paciente);
                      navigate("/cancelar", { state: { paciente: paciente } });
                    }}
                  >
                    <ListItemText primary={paciente.nombre} />
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <ListItemText primary="No se encontraron resultados" />
                </ListItem>
              )}
            </List>
          </CustomDialog>

          {/* Registro de emergencias */}
          <Button
            variant="outlined"
            size="large"
            onClick={handleOpenRegistro}
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
            REGISTRO DE EMERGENCIA
          </Button>

          <CustomDialog
            open={openRegistro}
            onClose={handleCloseRegistro}
            title={"FORMULARIO REGISTRO DE EMERGENCIA"}
            onSubmit={() => handleSubmit("emergencia")}
          >
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Typography>Emergencia Critica</Typography>
              <Checkbox
                checked={critico}
                onChange={handleChangeCritico}
                inputProps={{ "aria-label": "controlled checkbox" }}
              />
            </Box>

            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Nombre"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />

            <TextField
              margin="dense"
              name="age"
              label="Edad"
              type="number"
              fullWidth
              variant="outlined"
              value={formData.age}
              onChange={handleChange}
            />

            <TextField
              margin="dense"
              name="reason"
              label="Razon de Ingreso"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.reason}
              onChange={handleChange}
            />

            {!critico ? (
              <TextField
                margin="dense"
                name="consultorio"
                label="Consultorio"
                type="text"
                fullWidth
                variant="outlined"
                value={formData.consultorio}
                onChange={handleChange}
              />
            ) : (
              <></>
            )}
          </CustomDialog>
        </Box>
      </Box>
    </Box>
  );
}

export default General;
