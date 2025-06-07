import React, { useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import { Grid, Box, Typography, IconButton, TextField, colors, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Create Task Page
const CreateTaskPage = ({ navigate, tasks, onTasksUpdate }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'Medium',
        dueDate: '',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        formData.id = tasks[tasks.length - 1].id + 1;
        onTasksUpdate([...tasks, formData]);
        navigate('/tasks');
    };

    return (
        <Grid container direction="column">
            <Box height={100}></Box>
            <Grid container direction="row" alignItems="center">
                <IconButton variant="contained" sx={{ height: 40 }} onClick={() => navigate('/tasks')}><ArrowBack /></IconButton>
                <Typography variant="h5" color="inherit" component="div"><Box component="b">Create New Task</Box></Typography>
            </Grid>

            <Box height={20} />

            <Grid container direction="column" spacing={3} sx={{ bgcolor: colors.common.white, borderRadius: 5, p: 5 }}>
                <Grid container direction="column" spacing={0}>
                    <Typography variant="label">Title *</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </Grid>

                <Grid container direction="column" spacing={0}>
                    <Typography variant="label">Description *</Typography>
                    <TextField
                        multiline
                        rows={4}
                        id="outlined-basic"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </Grid>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Priority</InputLabel>
                    <Select
                        value={formData.priority}
                        label="Priority"
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </Select>
                </FormControl>
                <Grid container direction="column" spacing={0}>
                    <Typography variant="label">Due Date</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker onChange={(value, context) => setFormData({ ...formData, dueDate: value.toString })} />
                    </LocalizationProvider>
                </Grid>
                <Grid container direction="column" spacing={0}>
                    <Typography variant="label">Notes *</Typography>
                    <TextField
                        multiline
                        rows={3}
                        id="outlined-basic"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                </Grid>

                <Grid container spacing={2}>
                    <Button variant="contained" color="primary" sx={{ height: 40 }} onClick={(e) => handleSubmit(e)} >Create Task</Button>
                    <Button variant="contained" sx={{ height: 40, bgcolor: colors.grey[700] }} onClick={() => navigate('/tasks')}>Cancel</Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CreateTaskPage;