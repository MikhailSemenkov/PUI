import React, { useState } from 'react';
import { Grid, Button, Box, Typography, IconButton, Container, colors } from '@mui/material';
import { Add, DeleteOutline, Done, EditOutlined } from '@mui/icons-material';

// Tasks List Page
const TasksListPage = ({ navigate, tasks, onTasksUpdate, onCurrentTaskUpdate }) => {
    const [filter, setFilter] = useState('all');

    const toggleTask = (id) => {
        onTasksUpdate(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        onTasksUpdate(tasks.filter(task => task.id !== id));
    };

    const selectTask = (id) => {
        tasks.map(task => {
            if (task.id === id)
                onCurrentTaskUpdate(task);
        });

        navigate(`/task/${id}`);
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

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
            <Grid container direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h5" color="inherit" component="div"><Box component="b">My Tasks</Box></Typography>
                <Button variant="contained" sx={{ height: 40 }} startIcon={<Add />} onClick={() => navigate('/create-task')}> New Task</Button>
            </Grid>

            <Box height={20} />

            <Grid container spacing={3}>
                {['all', 'pending', 'completed'].map(filterType => (
                    <Button variant='contained' color={filter === filterType ? 'primary' : 'inherit'} sx={{ height: 40 }} onClick={() => setFilter(filterType)}>
                        {filterType}
                    </Button>
                ))}
            </Grid>

            <Box height={30} />

            {/* Tasks grid */}
            <Grid container direction="column" spacing={4}>
                {filteredTasks.map(task => (
                    <Container
                        key={task.id}
                        sx={{ bgcolor: "white", p: "20px", borderLeft: 4, borderLeftColor: task.completed ? colors.green[500] : colors.blue[500], borderRadius: 5 }}
                    >
                        <Grid container direction="row" justifyContent="space-between">
                            <Grid container direction="column" spacing={2}>
                                <Grid container direction="row" spacing={2}>
                                    <IconButton variant="contained" sx={{ height: 40, bgcolor: task.completed? colors.green[600] : colors.grey[200], color: task.completed? colors.common.white : colors.grey[500]}} onClick={() => toggleTask(task.id)}><Done /></IconButton>
                                    <Typography variant='h5' color='inherit' sx={{ textDecoration: task.completed ? 'line-through' : '' }} onClick={() => selectTask(task.id)}><Box component="b">{task.title}</Box></Typography>
                                </Grid>
                                <Typography variant='p' color='inherit' sx={{textDecoration: task.completed? 'line-through' : ''}}>{task.description}</Typography>
                                <Grid container direction="row" sx={{ justifyContent: "flex-start"}}>
                                    <Container  flex="fit" sx={{ m: 0, width: 'fit-content', borderRadius: 15, bgcolor: getPriorityColor(task.priority)[100], color: getPriorityColor(task.priority)[800] }}>
                                        {task.priority}
                                    </Container>
                                    <Typography variant='span' color='inherit'>Due: {task.dueDate}</Typography>
                                </Grid>
                            </Grid>

                            <Grid container spacing={1} justifyContent="right">
                                <IconButton variant="contained" sx={{ height: 40 }} color="primary" onClick={() => selectTask(task.id)}><EditOutlined /></IconButton>
                                <IconButton variant="contained" sx={{ height: 40 }} color="error" onClick={() => deleteTask(task.id)}><DeleteOutline /></IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                ))}
            </Grid>

            {filteredTasks.length === 0 && (
                <Grid container direction="column" spacing={3} alignItems="center" >
                    <Box height={10} />
                    <Typography variant="p" color="inherit" component="div"><Box component="l">No tasks found.</Box></Typography>
                    <Button variant="contained" sx={{ height: 40 }} startIcon={<Add />} onClick={() => navigate('/create-task')}> Create Your First Task</Button>
                </Grid>

            )}
        </Grid>
    );
};

export default TasksListPage;