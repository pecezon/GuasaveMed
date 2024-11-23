import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button, Box} from '@mui/material';
import colors from '../utils/colors';

function CustomTableAppoint() {
  
  const rows = [
    { medic: 'Martin Fernando Cardenas De Dios', date: "4/12/24", reason: "Gripe Viral"},
    { medic: 'Regina Ibarra Bustamante' , date: "13/12/24", reason: "Diarrea"},
    
  ];

  return (
    <Box sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '100%',
      height: '100%',
    }}>
        <TableContainer component={Paper}>
        <Table sx={{borderColor: 'black', border: '2px solid black'}}>
          
          {/* Head */}
          <TableHead>
            <TableRow>
              <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Medico</TableCell>
              <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Fecha</TableCell>
              <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Asunto</TableCell>
              <TableCell sx = {{width: '25%'}}></TableCell>
            </TableRow>
          </TableHead>

          {/* Body */}
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.medic}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.reason}</TableCell>
                <TableCell>
                  <Box sx={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    gap: '0.15rem',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                      <Button
                      variant="contained"
                      color = "primary"
                      sx={{ marginRight: 1 }}
                      onClick={() => alert(`Editando cita con ${row.medic}`)}
                    >
                      Editar
                    </Button>

                    <Button
                      variant="contained"
                      color="success"
                      sx={{ marginRight: 1 }}
                      onClick={() => alert(`Confirmando cita con ${row.medic}`)}
                    >
                      Confirmar
                    </Button>

                    <Button
                      variant="outlined"
                      color= "error"
                      onClick={() => alert(`Eliminando cita con ${row.medic}`)}
                    >
                      Eliminar
                    </Button>
                  </Box>
                
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    
  );
}

export default CustomTableAppoint;
