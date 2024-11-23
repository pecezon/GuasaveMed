import React from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';

function CustomTablePast() {
  
  const rows = [
    { medic: 'Martin Fernando Cardenas De Dios', date: "4/11/24", reason: "Diarrea"},
    
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{borderColor: 'black', border: '2px solid black'}}>
        
        {/* Head */}
        <TableHead>
          <TableRow>
            <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Medico</TableCell>
            <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Fecha</TableCell>
            <TableCell sx={{width: '25%', fontSize: '1.1rem', fontWeight:'bold'}}>Asunto</TableCell>
            <TableCell sx={{width: '25%'}}></TableCell>
          </TableRow>
        </TableHead>

        {/* Body */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.medic}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTablePast;
