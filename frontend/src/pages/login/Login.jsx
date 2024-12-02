import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

import { login } from "../../functions/login";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ usuario: user, password: password });

      //Desestructuramos la respuesta
      const { tipo } = response;

      console.log(tipo);
      console.log(response);

      //Si es recepcionista general
      if (tipo === "rg")
        navigate("/general", { state: { nombre: response.nombre } });
      //Si es recepcionista personal
      else if (tipo === "rp")
        navigate("/personal", { state: { id: response.id } });
      //Si es doctor
      else if (tipo === "doctor")
        navigate("/medic", { state: { doctor: response } });
      //Si es un intruso
      else alert("Quien sos?");
    } catch (error) {
      //Si hay un error (malas credenciales)
      alert("Ponga bien su contra o usuario wei");
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
          width: { xs: "80%", sm: "50%", md: "30%" },
          //marginTop: {xs: "30%", sm: "20%", md: "7%"}
        }}
      >
        <TextField
          autoFocus
          margin="dense"
          name="user"
          label="Usuario"
          color="56210A"
          variant="outlined"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
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
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
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
          onClick={handleLogin}
        >
          Iniciar Sesion
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          backgroundImage: "url('/images/ninaGlobos.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          alignSelf: "baseline",
          width: 400,
          height: 400,
          marginTop: "0%",
          marginLeft: "10%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          backgroundImage: "url('/images/blocks.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: 400,
          height: 400,
          marginTop: "25%",
          marginLeft: "60%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
}

export default Login;
