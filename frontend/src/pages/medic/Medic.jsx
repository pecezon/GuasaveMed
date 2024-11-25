import React, { useState } from 'react'; 
import { Box, Typography, Button, TextField} from '@mui/material'; 
import CustomDialog from '../../components/CustomDialog'; 
import { useNavigate } from 'react-router-dom';

function Medic() {
  const navegar = useNavigate();
  const usuario = "Ramiro (La Cabra)";

  const [openCrearExp, setOpenCrearExp] = useState(false);
  const [openConsultarHis, setOpenConsultarHis] = useState(false);
  const [openActualizarHis, setOpenActualizarHis] = useState(false);
  const [openRealizarRec, setOpenRealizarRec] = useState(false);

  const [historialClinico, setHistorialClinico] = useState({
    id: '',
    diagnosticos: '',
    padecimiento: '',
    tratamientos: '',
    historiaFamiliar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHistorialClinico((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitExp = () => {
    console.log(historialClinico);
    handleCloseCrearExp();  
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
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        marginTop: {xs: '5vh', sm: '5vh', md: '5vh'},
        alignItems: 'center',
        textAlign: 'center',
        padding: { xs: '0rem', sm: '0.5rem'},
      }}>

      <Box>
        <Typography sx={{ fontSize: {xs: '1.5rem', sm: '2rem', md: '2.5rem'}, textAlign: 'center' }}>
          Médico
        </Typography>
        <Typography sx={{ fontSize: {xs: '1rem', sm: '1.5rem', md: '2rem'}, marginTop: '2rem' }}>
          Bienvenido Dr. {usuario}
        </Typography>

        
        <Button variant='outlined' size = 'large' onClick={handleOpenCrearExp} sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>CREAR EXPEDIENTE</Button>
        
        <CustomDialog 
          open={openCrearExp}
          onClose={handleCloseCrearExp}
          title="Crear expediente" 
          onSubmit={handleSubmitExp} 
        >
          <TextField
          id="outlined-number"
          label="Id"
          type="number"
          sx={{ marginBottom: '1rem' , marginTop: '1rem'}}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          />
          <TextField
            label="Diagnósticos anteriores"
            name="diagnosticos"
            value={historialClinico.diagnosticos}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Padecimiento actual"
            name="padecimiento"
            value={historialClinico.padecimiento}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Tratamientos actuales"
            name="tratamientos"
            value={historialClinico.tratamientos}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Historia clínica familiar"
            name="historiaFamiliar"
            value={historialClinico.historiaFamiliar}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
        </CustomDialog>

        <Button variant='outlined' size = 'large' onClick={handleOpenConsultarHis} sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>CONSULTAR HISTORIAL</Button>

        <CustomDialog 
          open={openConsultarHis}
          onClose={handleCloseConsultarHis}
          title="Consultar Historial" 
          onSubmit={handleSubmitCon} 
        >
          <TextField
            id='numberConsultar'
            label="Id"
            //value={historialClinico.id}
            type="number"
            sx={{ marginBottom: '1rem' , marginTop: '1rem'}}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          
          />
          <TextField
            disabled

            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            label="Diagnósticos anteriores"
            name="diagnosticos"
            value={historialClinico.diagnosticos}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            disabled

            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            label="Padecimiento actual"
            name="padecimiento"
            value={historialClinico.padecimiento}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
          disabled
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            label="Tratamientos actuales"
            name="tratamientos"
            value={historialClinico.tratamientos}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
          disabled
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            label="Historia clínica familiar"
            name="historiaFamiliar"
            value={historialClinico.historiaFamiliar}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
        </CustomDialog>

        <Button variant='outlined' size = 'large' onClick={handleOpenRealizarRec} sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>HACER RECETA</Button>

        <CustomDialog 
          open={openRealizarRec}
          onClose={handleCloseRealizarRec}
          title="Hacer Receta" 
          onSubmit={handleSubmitRec} 
        >
          <TextField
            label="numberReceta"
            //value={historialClinico.id}
            type="number"
            sx={{ marginBottom: '1rem' , marginTop: '1rem'}}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <TextField
            label="Nombre del medicamento"
            name="medicamentos"
            //value={historialClinico.diagnosticos}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Especificaciones"
            name="Especificaciones"
            //value={historialClinico.padecimiento}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          
        </CustomDialog>

        <Button variant='outlined' size = 'large' onClick={handleOpenActualizarHis} sx = {{
          fontSize: {xs: '12px',sm: '14px', md: '16px'},
          padding: {xs: '1rem 2rem', sm: '1.5rem 3rem', md: '2rem 4rem'},
          borderRadius: '1rem',
          boxShadow: 2,
        }}>ACTUALIZAR DATOS</Button>
        
        <CustomDialog 
          open={openActualizarHis}
          onClose={handleCloseActualizarHis}
          title="Actualizar datos" 
          onSubmit={handleSubmitActu} 
        >
          <TextField
          id="numberActu"
          label="Id"
          type="number"
          sx={{ marginBottom: '1rem' , marginTop: '1rem'}}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          />
          <TextField
            label="Diagnósticos anteriores"
            name="diagnosticos"
            defaultValue={historialClinico.diagnosticos}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Padecimiento actual"
            name="padecimiento"
            defaultValue={historialClinico.padecimiento}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Tratamientos actuales"
            name="tratamientos"
            defaultValue={historialClinico.tratamientos}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Historia clínica familiar"
            name="historiaFamiliar"
            defaultValue={historialClinico.historiaFamiliar}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '1rem' }}
          />
        </CustomDialog>
      </Box>
    </Box>
  );
}

export default Medic;