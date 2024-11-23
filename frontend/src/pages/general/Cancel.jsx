import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomTable from '../../components/CustomTable';
import CustomTableAppoint from '../../components/CustomTableAppoint';
import CustomTablePast from '../../components/CustomTablePast';
import { useLocation } from 'react-router-dom';

function Cancel() {
    const location = useLocation();
    const { selectedItem } = location.state || {};

    const pacient = selectedItem || "Paciente no seleccionado"; 

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                padding: { xs: '1rem', sm: '2rem' },
                overflowX: 'hidden',
                boxSizing: 'border-box',
            }}
        >
            <Box sx={{ alignContent: 'center', alignItems: 'center' }}>
                <Typography
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        textAlign: 'center',
                    }}
                >
                    PORTAL PACIENTES
                </Typography>

                <Typography
                    sx={{
                        textAlign: 'center',
                        marginTop: '2rem',
                        marginBottom: '1rem',
                    }}
                >
                    PACIENTE: {pacient}
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    marginTop: '1rem',
                    width: { xs: '90%', sm: '100%', md: '100%' },
                    height: 'auto',
                    alignSelf: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 'auto',
                        borderTopLeftRadius: '1rem',
                        borderTopRightRadius: '1rem',
                        textAlign: 'center',
                        padding: '0.5rem',
                    }}
                >
                    <Typography sx={{ marginBottom: '1rem' }}>
                        INFORMACION DEL PACIENTE
                    </Typography>

                    <CustomTable />
                </Box>

                <Box
                    sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 'auto',
                        borderTopLeftRadius: '1rem',
                        borderTopRightRadius: '1rem',
                        textAlign: 'center',
                        padding: '0.5rem',
                    }}
                >
                    <Typography sx={{ marginBottom: '1rem' }}>
                        CITAS PROGRAMADAS
                    </Typography>

                    <CustomTableAppoint />
                </Box>

                <Box
                    sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 'auto',
                        borderTopLeftRadius: '1rem',
                        borderTopRightRadius: '1rem',
                        textAlign: 'center',
                        padding: '0.5rem',
                    }}
                >
                    <Typography sx={{ marginBottom: '1rem' }}>
                        CITAS PASADAS
                    </Typography>
                    <CustomTablePast />
                </Box>
            </Box>
        </Box>
    );
}

export default Cancel;
