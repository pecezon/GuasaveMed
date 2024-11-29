import React from 'react';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';

const CustomDialog = ({ open, onClose, title, children, onSubmit, nombreBoton = "Enviar" }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{textAlign:'center'}}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <Button onClick={onSubmit} color="primary" variant="contained" sx={{ m: 2 }}>
        {nombreBoton}
      </Button>
    </Dialog>
  );
};

export default CustomDialog;
