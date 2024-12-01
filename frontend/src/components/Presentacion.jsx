import { Box, Typography } from "@mui/material";
import React from "react";

const Presentacion = ({ name, rol }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"40%"}
    >
      <Box
        component="img"
        src="/images/WELCOME.png"
        alt="Welcome Image"
        sx={{
          alignItems: "center",
          width: "90%",
        }}
      ></Box>

      <Typography
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          textAlign: "center",
        }}
      >
        {rol === "rg"
          ? "RECEPCIONISTA GENERAL"
          : rol === "rp"
          ? "RECEPCIONISTA PERSONAL"
          : "MÉDICO"}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          marginTop: "2rem",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Presentacion;
