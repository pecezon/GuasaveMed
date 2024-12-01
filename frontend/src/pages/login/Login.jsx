import React, { useState } from 'react'; 
import { Box, Button, IconButton, InputAdornment, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const intialFormData = {
    user: "",
    password: "",
  };

  const [formData, setFormData] = useState(intialFormData);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value}));
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSubmit = () => navigate("/general");
  const image = "url('images/blocks.png)";
  
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
        />
      </Box>

      <Box sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
        width: {xs: "80%", sm: "50%", md: "30%"},
        
      }}>

        <TextField 
          autoFocus
          margin="dense"
          name="user"
          label="Usuario"
          type="text"
          fullWidth
          variant="outlined"
          value={formData.user}
          onChange={handleChange}
          sx={{
            marginTop: {xs: "30%", sm: "20%", md: "40%"},
            backgroundColor: '#FFFAF4',
            boxShadow: 2,
          }}
        />

        <TextField 
          autoFocus
          margin="dense"
          name="password"
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff/> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          sx = {{
            backgroundColor: '#FFFAF4',
            boxShadow: 2,
          }}
        />

        <Button
          variant='outlined'
          size= "large"
          onClick={handleSubmit}
          sx={{
            fontFamily: "Bayon, sans-serif",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              padding: { xs: "1rem 0.5rem", sm: "1rem 1rem", md: "1rem 2rem" },
              borderRadius: "1rem",
              boxShadow: 2,
              color: "#56210A",
              backgroundColor: "#FFFAF4",
              "&:hover": {
                backgroundColor: "#FFBC58",
              },
          }}
        >
          INICIAR SESION
        </Button>

        <Box 
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/backgroundDoodles.png')",
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            opacity: 0.12,
            zIndex: -2,
            pointerEvents: "none",
          }}
        />

        <Box
         sx={{
            position: "absolute",
            bottom: "00%",
            alignSelf: 'center',
            width: "100%",
            height: "60%",
            background: "linear-gradient(180deg, rgba(222, 239, 255), #E6F2FF)",
            borderTopLeftRadius: "60%",
            borderTopRightRadius: "60%",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />

        <Box
        sx={{
          position: "absolute",
          backgroundImage: "url('/images/ninaGlobos.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          alignSelf: 'baseline',
          width: 400,
          height: 400,
          marginTop: "-10%",
          marginLeft: "-60%",
          zIndex: -1,
          pointerEvents: 'none',
        }}
        />

        <Box
          sx={{
            position: "absolute",
            backgroundImage: "url('/images/blocks.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: 400,
            height: 400,
            marginTop: "25%",
            marginLeft: "60%",
            zIndex: -1,
            pointerEvents: 'none',
          }}
        />
      </Box>
    </Box>
  );
}

export default Login;
