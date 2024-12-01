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
        marginTop: {xs: "30%", sm: "20%", md: "7%"}
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

      </Box>
    </Box>
  );
}

export default Login;
