import React, { useState } from 'react'; 
import { Box, Typography, Button, TextField} from '@mui/material'; 
import CustomDialog from '../../components/CustomDialog'; 
import { useNavigate } from 'react-router-dom';
import '@fontsource/bayon';

function Medic() {
  const navegar = useNavigate();
  const usuario = "Ramiro (El pinche friote)";

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
        alignItems: 'center',
        width: '90%',
      }}
      >
      </Box>
      
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            marginTop: "2rem",
          }}
        >
          DOCTOR
        </Typography>
        <Typography sx= {{
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          marginTop: "2rem",
        }}>
          {usuario}
        </Typography>
    </Box>   

    <Box sx = {{
      marginTop: { xs: "30%", sm: "20%", md: "7%" },
      width: '80%',
      height: 'auto',
      justifyContent: 'center',
      display: 'flex',
      alignSelf: 'center',
      paddingTop: {xs: '1rem', sm: '2rem', md: '4rem'},
      paddingBottom: {xs: '1rem', sm: '2rem', md: '4rem'},
      paddingLeft: {xs: '1rem', sm: '2rem', md: '4rem'},
      paddingRight: {xs: '1rem', sm: '2rem', md: '4rem'},
      borderRadius: 16,
      backgroundColor:'#E6F2FC',
      boxShadow: 'inset 0px 4px 47.8px rgba(39,91,158,0.25)',
      zIndex: 2,
    }}>
      <Box sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
          width: '100%',
        }}
      >
        
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
            color: '#56210A',
            backgroundColor: '#FFFAF4',
            "&:hover": {
              backgroundColor: '#FFBC58'},
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
            label="Id"
            type="number"
            sx={{ marginBottom: '1rem', marginTop: '1rem' }}
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

          <Button size = 'large' onClick={handleOpenConsultarHis} 
            sx={{
              fontFamily: "Bayon, sans-serif", 
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              padding: { xs: "1rem 2rem", sm: "1.5rem 3rem", md: "2rem 4rem" },
              borderRadius: "1rem",
              boxShadow: 2,
              color: '#56210A',
              backgroundColor: '#FFFAF4',
              "&:hover": {
                backgroundColor: '#FFBC58'},
            }}
          >
            CONSULTAR HISTORIAL
          </Button>

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

          <Button size = 'large' onClick={handleOpenRealizarRec} 
            sx={{
              fontFamily: "Bayon, sans-serif", 
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              padding: { xs: "1rem 2rem", sm: "1.5rem 3rem", md: "2rem 4rem" },
              borderRadius: "1rem",
              boxShadow: 2,
              color: '#56210A',
              backgroundColor: '#FFFAF4',
              "&:hover": {
                backgroundColor: '#FFBC58'},
            }}
          >
            HACER RECETA
            </Button>

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

          <Button size = 'large' onClick={handleOpenActualizarHis} 
            sx={{
              fontFamily: "Bayon, sans-serif", 
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              padding: { xs: "1rem 2rem", sm: "1.5rem 3rem", md: "2rem 4rem" },
              borderRadius: "1rem",
              boxShadow: 2,
              color: '#56210A',
              backgroundColor: '#FFFAF4',
              "&:hover": {
                backgroundColor: '#FFBC58'},
            }}
          >
            ACTUALIZAR DATOS
          </Button>
          
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
    
  </Box>
  );
}

export default Medic;