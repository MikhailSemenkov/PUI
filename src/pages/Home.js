import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { Done, Add, PersonOutline } from '@mui/icons-material';

// Home Page
const HomePage = ({ navigate, isAuthorized }) => {
    return (
        <Grid
            container
            direction="column"
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box height={100}></Box>
            <Grid container >
                <Grid container size="grow" />
                <Grid container size={8} direction="column" justifyContent="center">
                    <Typography variant="h3" color="inherit" component="div" align="center">
                        Welcome to TodoApp
                    </Typography>
                    <Box height={20} />
                    <Typography variant="h6" color="inherit" component="div" align="center">
                        Organize your life with our simple and powerful task management system.
                        Create, track, and complete your tasks with ease.
                    </Typography>
                    <Box height={50} />
                    <Grid container spacing={2} align="center" justifyContent="center">
                        <Button variant="contained" sx={{ height: 40 }} onClick={() => navigate(isAuthorized? '/tasks' : '/login')}>View Tasks</Button>
                        <Button variant="contained" sx={{ height: 40 }} color="success" onClick={() => navigate(isAuthorized? '/create-task' : '/login')}>Create New Task</Button>
                    </Grid>
                    <Box height={50} />
                    <Grid container direction="column" spacing={5}>
                        <Container sx={{ p: "20px", borderRadius: 5, bgcolor: "white" }} >
                            <Add sx={{ fontSize: 40, color: "blue" }} />
                            <Typography variant="h5" color="inherit" component="div"><Box component="b">Easy Task Creation</Box></Typography>
                            <Typography variant="p" color="inherit" component="div">
                                Quickly add new tasks with descriptions, priorities, and due dates.
                            </Typography>
                        </Container>
                        <Container height={100} sx={{ borderRadius: 5, p: "20px", bgcolor: "white" }} >
                            <Done sx={{ fontSize: 40, color: "green" }} />
                            <Typography variant="h5" color="inherit" component="div"><Box component="b">Track Progress</Box></Typography>
                            <Typography variant="p" color="inherit" component="div">
                                Monitor your task completion and stay motivated with visual progress.
                            </Typography>
                        </Container>
                        <Container height={100} sx={{ borderRadius: 5, p: "20px", bgcolor: "white" }} >
                            <PersonOutline sx={{ fontSize: 40, color: "purple" }} />
                            <Typography variant="h5" color="inherit" component="div"><Box component="b">Personal Dashboard</Box></Typography>
                            <Typography variant="p" color="inherit" component="div">
                                Manage your profile and customize your task management experience.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid container size="grow" />
                </Grid>
                <Grid container size="grow" />
            </Grid>
        </Grid>
    );
};

export default HomePage;
