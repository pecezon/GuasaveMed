import React, { useEffect, useState } from "react";

//Imports de material ui
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Typography,
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
import { useNavigate } from "react-router-dom";

//Funciones de la API
import { getDoctores } from "../../functions/empleado";
import { crearCita } from "../../functions/cita";
import { crearPaciente, getPacientes } from "../../functions/paciente";

function General() {
  //React router
  const navigate = useNavigate();

  //Info del usuario
  const user = "JUAN PABLO CARDENAS DE DIOS";

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
    //Filtrar pacientes
    setFilteredPacientes(
      pacientes.filter((item) =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

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
  };
  const [formData, setFormData] = useState(initialFormData);

  //Manejo de ventanas
  const handleSubmit = (dialogType) => {
    console.log("DATOS ENVIADOS: ", formData);
    setFormData(initialFormData);

    if (dialogType === "agendar") {
      //Logica de crear cita/crear paciente
      //Cita actual
      // Al crear una cita, se debe enviar el id del paciente, el id del médico, la fecha y la hora
      // Antes de crear una cita se debe crear un paciente

      crearPaciente({
        nombre: formData.name,
        edad: formData.age,
        telefono: formData.phone,
      })
        .then((res) => {
          console.log("PACIENTE CREADO: ", res);
          if (res && res.id) {
            console.log("Paciente ID: ", res.id);
            crearCita({
              paciente: { id: res.id },
              empleado: { id: formData.medic },
              fecha: formData.date.toISOString(),
              tipo: "cn",
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

      handleCloseAgendar();
    } else if (dialogType === "paciente") {
      handleClosePaciente();
      navigate("/paciente", { state: { selectedItem: selectedPaciente } });
    } else if (dialogType === "emergencia") {
      handleCloseRegistro();
    } else if (dialogType === "modificar") {
      handleCloseModif();
      navigate("/modificar");
    } else if (dialogType === "confirmar") {
      handleCloseConfirm();
      navigate("/confirmar");
    }
  };

  //Doctores guarda el listado de doctores
  const [doctores, setDoctores] = useState([]);

  //Pacientes guarda el listado de pacientes
  const [pacientes, setPacientes] = useState([]);

  //Get doctores y pacientes
  const getMedics = async () => {
    const res = await getDoctores();
    setDoctores(res);
    console.log("MEDICOS: ", res);
  };

  const GetPacientes = async () => {
    const res = await getPacientes();
    setPacientes(res);
    console.log("PACIENTES: ", res);
  };

  //Codigo ejecutado al cargar la pagina
  useEffect(() => {
    GetPacientes();
    getMedics();
  }, []);

  //Filtrar pacientes

  //Manejo de busqueda
  const [searchTerm, setSearchTerm] = useState("");

  const reasons = [
    { value: "1", label: "Exceso de Homosexualidad" },
    { value: "2", label: "Choque" },
  ];

  const [selectMedic, setSelectMedic] = useState("");
  const handleSelection = (e) => {
    setSelectMedic(e.target.value);
  };

  const appointments = Array.from({ length: 100 }, (_, i) => `Cita ${i + 1}`);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {user}
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
              name="phone"
              label="Teléfono"
              type="tel"
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
            />
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
              {doctores.map((medic) => (
                <MenuItem key={medic.id} value={medic.id}>
                  {medic.nombre}
                </MenuItem>
              ))}
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

            <Select
              name="reason"
              value={formData.reason}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, reason: e.target.value }))
              }
              fullWidth
              displayEmpty
            >
              <MenuItem value="" disabled>
                Razon de ingreso
              </MenuItem>
              {reasons.map((reason) => (
                <MenuItem key={reason.value} value={reason.value}>
                  {reason.label}
                </MenuItem>
              ))}
            </Select>
          </CustomDialog>
        </Box>
      </Box>
    </Box>
  );
}

export default General;
