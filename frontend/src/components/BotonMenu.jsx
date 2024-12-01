import React from "react";
import { Button } from "@mui/material";

const BotonMenu = ({ text, onClick }) => {
  return (
    <Button
      variant="outlined"
      size="large"
      onClick={onClick}
      sx={{
        fontFamily: "Bayon, sans-serif",
        fontSize: { xs: "12px", sm: "14px", md: "16px" },
        padding: { xs: "1rem 2rem", sm: "1.5rem 3rem", md: "2rem 4rem" },
        borderRadius: "1rem",
        boxShadow: 2,
        color: "#56210A",
        backgroundColor: "#FFFAF4",
        "&:hover": {
          backgroundColor: "#FFBC58",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default BotonMenu;
