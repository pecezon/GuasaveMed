import React, { useEffect, useState } from 'react'
import { Box, Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText, MenuItem, Select, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomDialog from '../../components/CustomDialog';
import Cancel from '../general/Cancel';
import { useNavigate } from 'react-router-dom';

function General() {
  const navigate = useNavigate();
  const user = "JUAN PABLO CARDENAS DE DIOS";

  const [openAgendar, setOpenAgendar] = useState(false);
  const [openCancelar, setOpenCancelar] = useState(false);
  const [openRegistro, setOpenRegistro] = useState(false);
  const [openModif, setOpenModif] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const initialFormData = {
    name: '',
    age: '',
    phone: '',
    medic: '',
    date: '',
    reason: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleOpenAgendar = () => setOpenAgendar(true);
  const handleCloseAgendar = () => setOpenAgendar(false);

  const handleOpenCancelar = () => setOpenCancelar(true);
  const handleCloseCancelar = () => setOpenCancelar(false);

  const handleOpenRegistro = () => setOpenRegistro(true);
  const handleCloseRegistro = () => setOpenRegistro(false);

  const handleOpenModif = () => setOpenModif(true);
  const handleCloseModif = () => setOpenModif(false);

  const handleOpenConfirm = () => setOpenConfirm(true);
  const handleCloseConfirm = () => setOpenConfirm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value}));
  };

  const handleSubmit = (dialogType) => {
    console.log('DATOS ENVIADOS: ', formData);
    setFormData(initialFormData);

    if (dialogType === 'agendar') {
      handleCloseAgendar();
    } else if (dialogType === 'cancelar') {
      handleCloseCancelar();
      navigate('/cancelar');
    } else if (dialogType === 'emergencia') {
      handleCloseRegistro();
    } else if (dialogType === 'modificar') {
      handleCloseModif();
      navigate('/modificar');
    } else if ( dialogType === 'confirmar') {
      handleCloseConfirm();
      navigate('/confirmar');
    }
  };
  
  const medics = [
    { value: '1', label: 'MARTIN CARDENAS'},
    { value: '2', label: 'FERNANDO QUEVEDO'},
    { value: '3', label: 'ESTELA DE DIOS'}
  ];

  const reasons = [
    { value: '1', label: 'Exceso de Homosexualidad'},
    { value: '2', label: 'Choque'},
  ];

  const [selectMedic, setSelectMedic] = useState('');
  const handleSelection = (e) => {
    setSelectMedic(e.target.value);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const items = Array.from({ length: 100 }, (_, i) => `Nombre ${i + 1}`);

  const appointments = Array.from({ length: 100 }, (_, i) => `Cita ${i + 1}`);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box 
    sx = {{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      marginTop: {xs: '5vh', sm: '5vh', md: '5vh'},
      alignItems: 'center',
      textAlign: 'center',
      padding: { xs: '0rem', sm: '0.5rem'},
    }}>

      <Box>
        <Typography sx = {{
        fontSize: {xs: '1.5rem', sm: '2rem', md: '2.5rem'},
        textAlign: 'center',
      }}>RECEPCIONISTA GENERAL</Typography>

      <Typography sx = {{
        fontSize: {xs: '1rem', sm: '1.5rem', md: '2rem'},
        marginTop: '2rem',
      }}>HOLA {user}</Typography>
      </Box>

      <Box sx = {{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        gap: { xs: '0.5rem', sm: '1rem', md: '1.5rem' },
        marginTop: {xs: '30vh', sm: '30vh', md: '30vh'},
        width: {xs: '80%', sm: '70%', md: '60%'},
      }}>

        <Button variant='outlined' size = 'large' onClick={handleOpenAgendar} sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>AGENDAR CITA</Button>

        {/*Dialog to create pop ups */}
        <CustomDialog 
        open={openAgendar}
        onClose={handleCloseAgendar}
        title={"FORMULARIO AGENDAR CITA"}
        onSubmit={() => handleSubmit('agendar')}
        >
          <TextField autoFocus 
            margin="dense" 
            name="name" 
            label="Nombre" 
            type="text" 
            fullWidth 
            variant='outlined' 
            value={formData.name} 
            onChange={handleChange}/>

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
              onChange={(e) => setFormData((prev) => ({ ...prev, medic: e.target.value }))}
              fullWidth
              displayEmpty
            >
              <MenuItem value="" disabled>
                Seleccione un médico
              </MenuItem>
              {medics.map((medic) => (
                <MenuItem key={medic.value} value={medic.value}>
                  {medic.label}
                </MenuItem>
              ))}
            </Select>


            <TextField
              margin="dense"
              name="date"
              label="Fecha de Cita"
              type="date"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={formData.date}
              onChange={handleChange}
            />
        </CustomDialog>

        <Button variant='outlined' size = 'large' onClick={handleOpenCancelar} sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>CANCELAR CITA</Button>

        <CustomDialog
        open={openCancelar}
        onClose={handleCloseCancelar}
        title={"FORMULARIO CANCELAR CITA"}
        onSubmit={() => handleSubmit('cancelar')}
        >

        <TextField
          label="Buscar"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          sx={{ marginBottom: 2, marginTop: 2}}
        />

        <List sx = {{
          maxHeight: {xs: '15vh', sm: '25vh', md: '40vh'},
          overflowY: 'auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '0.5rem',
        }}>
          {filteredItems.map((item, index) => (
            <ListItem key={index} sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        </CustomDialog>

        <Button variant='outlined' size = 'large' onClick={handleOpenModif} sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>MODIFICAR CITA</Button>

        <CustomDialog
        open={openModif}
        onClose={handleCloseModif}
        title={"FORMULARIO MODIFICAR CITA"}
        onSubmit={() => handleSubmit('modificar')}
        >

        <TextField
          label="Modificar"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          sx={{ marginBottom: 2, marginTop: 2}}
        />

        <List sx = {{
          maxHeight: {xs: '15vh', sm: '25vh', md: '40vh'},
          overflowY: 'auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '0.5rem',
        }}>
          {filteredItems.map((item, index) => (
            <ListItem key={index} sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        </CustomDialog>


        <Button variant='outlined' size = 'large' onClick={handleOpenConfirm}sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>CONFIRMAR CITA</Button>

        <CustomDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title={"FORMULARIO CONFIRMAR CITA"}
        onSubmit={() => handleSubmit('confirmar')}
        >

        <TextField
          label="Confirmar"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          sx={{ marginBottom: 2, marginTop: 2}}
        />

        <List sx = {{
          maxHeight: {xs: '15vh', sm: '25vh', md: '40vh'},
          overflowY: 'auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '0.5rem',
        }}>
          {filteredAppointments.map((appointment, index) => (
            <ListItem key={index} sx={{ textAlign: 'left' }}>
              <ListItemText primary={appointment} />
            </ListItem>
          ))}
        </List>
        </CustomDialog>

        <Button variant='outlined' size = 'large' onClick={handleOpenRegistro} sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>REGISTRO DE EMERGENCIA</Button>

        <CustomDialog
        open = {openRegistro}
        onClose = {handleCloseRegistro}
        title = {"FORMULARIO REGISTRO DE EMERGENCIA"}
        onSubmit={() => handleSubmit('emergencia')}
        >

          <TextField autoFocus 
            margin="dense" 
            name="name" 
            label="Nombre" 
            type="text" 
            fullWidth 
            variant='outlined' 
            value={formData.name} 
            onChange={handleChange}/>

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
              onChange={(e) => setFormData((prev) => ({ ...prev, reason: e.target.value }))}
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
  )
}

export default General;