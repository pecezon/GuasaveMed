import React from 'react'
import { Box, Typography } from '@mui/material'

function Cancel() {

    const pacient = "LAMINE YAMAL";

  return (
    <Box sx = {{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        // marginTop: {xs: '10vh', sm: '10vh', md: '10vh'},
        // marginBottom: {xs: '1rem', sm: '1rem', md: '2rem'},
        // margin: '1rem',
        padding: { xs: '1rem', sm: '2rem'},
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}>

        <Box sx = {{alignContent: 'center', alignItems: 'center'}}>
            <Typography sx = {{
                fontSize: {xs: '1.5rem', sm: '2rem', md: '2.5rem'},
                textAlign: 'center',
            }}>PORTAL PACIENTES</Typography>

            <Typography>PACIENTE {pacient}</Typography>
        </Box>

        <Box sx = {{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-evenly',
            gap: { xs: '0.5rem', sm: '1rem', md: '1.5rem' },
            marginTop: '1rem',
            width: '100%',
            height: 'calc(100vh - 100px)',
            alignSelf: 'center',
        }}>
            <Box sx = {{
                backgroundColor: 'white', 
                width: '33%',
                height: '100%',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                textAlign: 'center',
                padding: '0.5rem',
                borderColor: 'black',
                border: '2px solid black',
                }}>
                <Typography>INFORMACION DEL PACIENTE</Typography>
            </Box>

            <Box sx = {{
                backgroundColor: 'white', 
                width: '33%',
                height: '100%',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                textAlign: 'center',
                padding: '0.5rem',
                borderColor: 'black',
                border: '2px solid black',
            }}>
                <Typography>CITAS PROGRAMADAS</Typography>
            </Box>

            <Box sx = {{
                backgroundColor: 'white', 
                width: '33%',
                height: '100%',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                textAlign: 'center',
                padding: '0.5rem',
                borderColor: 'black',
                border: '2px solid black',
            }}>
                <Typography>CITAS PASADAS</Typography>
            </Box>

        </Box>
    </Box>
  )
}

export default Cancel