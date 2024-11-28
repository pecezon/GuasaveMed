import React from 'react'; 
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/backgroundDoodles.png')",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.12,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -700,
          left: -70,
          width: "110%",
          height: "140%",
          background: "linear-gradient(180deg, rgba(222, 239, 255), #E6F2FF)",
          borderTopLeftRadius: "100%",
          borderTopRightRadius: "100%",
          zIndex: 2,
        }}
      />

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          zIndex: 3,
          marginTop: "15%", 
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Usuario"
          color="56210A"
          variant="outlined"
          focused
          sx={{
            width: "170%",
            "& .MuiInputBase-root": {
              backgroundColor: "#FFFAF4", 
              borderRadius: "5",
            },
            "& .MuiInputBase-input": {
              fontSize: "120%", 
              color: "#56210A",
            },
            "& .MuiInputLabel-root": {
              fontSize: "120%",
              color: "#56210A", 
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#56210A", 
              },
              "&:hover fieldset": {
                borderColor: "#56210A", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "#56210A", 
              },
            },
          }}
        />

        <TextField
          label="Contrasena"
          color="56210A"
          variant="outlined"
          focused
          sx={{
            width: "170%",
            "& .MuiInputBase-root": {
              backgroundColor: "#FFFAF4", 
              borderRadius: "5",
            },
            "& .MuiInputBase-input": {
              fontSize: "120%", 
              color: "#56210A",
            },
            "& .MuiInputLabel-root": {
              fontSize: "120%",
              color: "#56210A", 
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#56210A", 
              },
              "&:hover fieldset": {
                borderColor: "#56210A", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "#56210A", 
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            label: "Iniciar sesion",
            width: "170%",
            height: "200%",
            background: "linear-gradient(90deg, #A3D79F, #7CC572)",
            color: "white",
            borderRadius: "7%",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "120%",
          }}
        >
          Iniciar Sesion
        </Button>
      </Box>
      <Box
        component="img"
        src="/images/WELCOME.png"
        alt="Imagen de bienvenida"
        sx={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "auto",
          zIndex: 3,
        }}
      />
      <Box
        component="img"
        src="/images/ninaGlobos.png"
        alt="Niña con globos"
        sx={{
          position: "absolute",
          top: "11%",
          left: "7%",
          width: "15%",
          height: "auto",
          zIndex: 2,
        }}
      />
      <Box
        component="img"
        src="/images/blocks.png"
        alt="Bloques ABC"
        sx={{
          position: "absolute",
          bottom: "4%",
          right: "7%",
          width: "20%",
          height: "auto",
          zIndex: 2,
        }}
      />
    </Box>
  );
}

export default Login;
