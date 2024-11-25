import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button} from '@mui/material';

function CustomTable() {
  
  const rows = [
    { name: 'Juan Pablo Cardenas De Dios', age: 19, tel: 6871679008},
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{borderColor: 'black', border: '2px solid black'}}>
        
        {/* Head */}
        <TableHead>
          <TableRow>
            <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Nombre</TableCell>
            <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Edad</TableCell>
            <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Telefono</TableCell>
            <TableCell sx = {{width: '25%'}}></TableCell>
          </TableRow>
        </TableHead>

        {/* Body */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.tel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
