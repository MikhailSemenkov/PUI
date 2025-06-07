import React, { useState } from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { colors } from '@mui/material';
import { userLogin } from '../utils/LocalStorage.js';

// Login Page
const LoginPage = ({ navigate, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = userLogin(email);
        if (!user || user.password !== password) {
            alert('Passwords do not match!');
            return;
        }
        onLogin(user);
    };

    return (
        <Grid container direction="column" justifyContent="center">
            <Box height={100}/>
            <Grid container direction="column" alignItems="center" spacing={3} sx={{ bgcolor: colors.common.white, borderRadius: 5, p: 5 }}>
                <Typography variant="h5" color="inherit" component="div"><Box component="b">Login</Box></Typography>

                <Grid container direction="column" spacing={0}>
                    <Typography variant="label">Email</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        size='small'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>

                <Grid container direction="column" spacing={0}>
                    <Typography variant="label">Password</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        size='small'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>

                <Button variant="contained" sx={{ height: 40 }} onClick={handleSubmit}>Login</Button>

                <Grid container direction="row" spacing={1}>
                    <Typography variant='p' color='inherit'>
                        Don't have an account?
                    </Typography>
                    <Typography variant='p' color='primary' onClick={() => navigate('/register')}>
                        Register here
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
  );
};

export default LoginPage;