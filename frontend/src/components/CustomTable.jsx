import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button} from '@mui/material';

function CustomTable({pacientes}) {
  
  // Filas de la tabla
  const rows = pacientes;

  return (
    <TableContainer component={Paper}>
      <Table sx={{borderColor: 'black', border: '2px solid black'}}>
        
        {/* Head */}
        <TableHead>
          <TableRow>
            <TableCell sx={{width: '20%', fontSize: '1.1rem', fontWeight:'bold'}}>Id</TableCell>
            <TableCell sx={{width: '20%', fontSize: '1.1rem', fontWeight:'bold'}}>Nombre</TableCell>
            <TableCell sx={{width: '20%', fontSize: '1.1rem', fontWeight:'bold'}}>Edad</TableCell>
            <TableCell sx={{width: '20%', fontSize: '1.1rem', fontWeight:'bold'}}>Telefono</TableCell>
            <TableCell sx = {{width: '20%'}}></TableCell>
          </TableRow>
        </TableHead>

        {/* Body */}
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.nombre}</TableCell>
              <TableCell>{row.edad}</TableCell>
              <TableCell>{row.telefono}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
