import React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Welcome from "../../images/WELCOME.png";
import { Card, CardMedia } from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FFFDFA',
        },
      },
    },
  },
});

function Login() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx ={{ 
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        display: 'flex',
        flex: 1,
        }}>
        <Card sx = {{width: 557, alignContent: 'center', alignItems:'center', alignSelf:'center'}}>
          <CardMedia 
          component="img"
          height={'auto'}
          width={'auto'}
          image= {Welcome}
          alt='Image'
          />
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
