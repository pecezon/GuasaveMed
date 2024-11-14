import React from "react";
//import { Flex, Image, Text } from '@chakra-ui/react';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      Ramiro gei
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Typography component="legend">Controlled</Typography>
        <Rating name="simple-controlled" value={value} />
        <Typography component="legend">Uncontrolled</Typography>
        <Rating name="simple-uncontrolled" defaultValue={2} />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>
    </div>
  );
};

export default Home;
