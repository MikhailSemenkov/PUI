import React, { useState } from 'react';
import { Grid, Box, Button, TextField, Typography } from '@mui/material';
import { colors } from '@mui/material';
import { userRegister } from '../utils/LocalStorage.js';

// Register Page
const RegisterPage = ({ navigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    userRegister({ name: name, email: email, password: password });
    navigate('/login');
  };

  return (
    <Grid container direction="column" justifyContent="center">
            <Box height={100}/>
            <Grid container direction="column" alignItems="center" spacing={3} sx={{ bgcolor: colors.common.white, borderRadius: 5, p: 5 }}>
                <Typography variant="h5" color="inherit" component="div"><Box component="b">Register</Box></Typography>

                <Grid container direction="column" spacing={0}>
                    <Typography variant="label">Name</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        size='small'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>

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

                <Grid container direction="column" spacing={0}>
                    <Typography variant="label">Confirm Password</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        size='small'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Grid>

                <Button variant="contained" sx={{ height: 40 }} onClick={handleSubmit}>Register</Button>

                <Grid container direction="row" spacing={1}>
                    <Typography variant='p' color='inherit'>
                        Already have an account?
                    </Typography>
                    <Typography variant='p' color='primary' onClick={() => navigate('/login')}>
                        Login here
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
  );
};

export default RegisterPage;