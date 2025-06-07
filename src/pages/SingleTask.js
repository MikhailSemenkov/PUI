import React, { useState } from 'react';
import { Grid, Box, Typography, IconButton, Button, Container, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ArrowBack, Done, Edit } from '@mui/icons-material';
import { colors } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

// Single Task Page
const SingleTaskPage = ({ navigate, tasks, onTasksUpdate, task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState(task);

    const handleSave = () => {
        setIsEditing(false);
         onTasksUpdate(tasks.map(t =>
            t.id === task.id ? editForm : t
        ));
    };

    const toggleCompletion = () => {
        const updatedTask = { ...task, completed: !task.completed };
        setEditForm(updatedTask);
        onTasksUpdate(tasks.map(t =>
            t.id === task.id ? updatedTask : t
        ));
    };

    const getPriorityColor = (priority) => {
        switch (priority.toLowerCase()) {
            case 'high': return colors.red;
            case 'medium': return colors.yellow;
            case 'low': return colors.green;
            default: return colors.grey;
        }
    };

    return (
        <Grid container direction="column">
            <Box height={100}></Box>
            <Grid container direction="row" alignItems="center">
                <IconButton variant="contained" sx={{ height: 40 }} onClick={() => navigate('/tasks')}><ArrowBack /></IconButton>
                <Typography variant="h5" color="inherit" component="div"><Box component="b">Task Details</Box></Typography>
            </Grid>
            
            <Box height={20} />

            <Grid container direction="column" spacing={3} sx={{ bgcolor: colors.common.white, borderRadius: 5, p: 5 }}>
                {!isEditing ? (
                    <Grid container direction="column" spacing={2}>
                        <Grid container direction="column" spacing={1}>
                            <Grid container direction="row" justifyContent="space-between">
                                <Grid container direction="row" spacing={2}>
                                    <IconButton variant="contained" sx={{ height: 40, bgcolor: task.completed ? colors.green[600] : colors.grey[200], color: task.completed ? colors.common.white : colors.grey[500] }} onClick={() => toggleCompletion()}><Done /></IconButton>
                                    <Typography variant='h5' color='inherit' sx={{ textDecoration: task.completed ? 'line-through' : '' }} onClick={() => navigate(`/task/${task.id}`)}><Box component="b">{task.title}</Box></Typography>
                                </Grid>
                                <Button variant="contained" sx={{ height: 40 }} startIcon={<Edit />} onClick={() => setIsEditing(true)}> Edit</Button>
                            </Grid>
                            <Grid container direction="row" sx={{ justifyContent: "flex-start"}} spacing={5}>
                                <Container  flex="fit" sx={{ m: 0, width: 'fit-content', borderRadius: 15, bgcolor: getPriorityColor(task.priority)[100], color: getPriorityColor(task.priority)[800] }}>
                                    {task.priority} Priority
                                </Container>
                                <Typography variant='span' color='inherit'>Due: {task.dueDate}</Typography>
                                <Typography variant='span' color='inherit'>Created: {task.createdAt}</Typography>
                            </Grid>
                        </Grid>

                        <Box height={10}></Box>

                        <Grid container direction="column" spacing={1}>
                            <Typography variant='h5' color='inherit'><Box component="b">Description</Box></Typography>
                            <Typography variant='p' color='inherit' sx={{textDecoration: task.completed? 'line-through' : ''}}>{task.description}</Typography>
                        </Grid>

                        {task.notes && (
                        <Grid container direction="column" spacing={1}>
                            <Typography variant='h5' color='inherit'><Box component="b">Notes</Box></Typography>
                            <Typography variant='p' color='inherit' sx={{textDecoration: task.completed? 'line-through' : ''}}>{task.notes}</Typography>
                        </Grid>
                        )}

                        <Grid container direction="column" spacing={1}>
                            <Typography variant='h5' color='inherit'><Box component="b">Status</Box></Typography>
                            <Container  flex="fit" sx={{ m: 0, width: 'fit-content', borderRadius: 15, bgcolor: task.completed? colors.green[100] : colors.yellow[100], color: task.completed? colors.green[800] : colors.yellow[800]}}>
                                {task.completed ? 'Completed' : 'In Progress'}
                            </Container>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container direction="column" spacing={2}>
                        <Grid container direction="column" spacing={0}>
                            <Typography variant="label">Title *</Typography>
                            <TextField
                                required
                                id="outlined-required"
                                value={editForm.title}
                                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                            />
                        </Grid>

                        <Grid container direction="column" spacing={0}>
                            <Typography variant="label">Description *</Typography>
                            <TextField
                                multiline
                                rows={4}
                                id="outlined-basic"
                                value={editForm.description}
                                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                            />
                        </Grid>


                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Priority</InputLabel>
                            <Select
                                value={editForm.priority}
                                label="Priority"
                                onChange={(e) => setEditForm({ ...editForm, priority: e.target.value })}
                            >
                                <MenuItem value="Low">Low</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="High">High</MenuItem>
                            </Select>
                        </FormControl>

                        <Grid container direction="column" spacing={0}>
                            <Typography variant="label">Due Date</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker onChange={(value, context) => setEditForm({ ...editForm, dueDate: value })} />
                            </LocalizationProvider>
                        </Grid>

                        <Grid container direction="column" spacing={0}>
                            <Typography variant="label">Notes *</Typography>
                            <TextField
                                multiline
                                rows={3}
                                id="outlined-basic"
                                value={editForm.notes}
                                onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                            />
                        </Grid>

                        <Grid container spacing={2}>
                            <Button variant="contained" color="primary" sx={{ height: 40 }} onClick={(e) => handleSave(e)} >Save Changes</Button>
                            <Button variant="contained" sx={{ height: 40, bgcolor: colors.grey[700] }} onClick={() => setIsEditing(false)}>Cancel</Button>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default SingleTaskPage;

