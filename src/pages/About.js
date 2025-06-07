import { Grid, Typography, Button, Box } from "@mui/material";
import { colors } from "@mui/material";

// About Page
const AboutPage = ({ navigate }) => {
    return (
        <Grid container direction="column">
            <Box height={100}></Box>
            <Grid container direction="row" justifyContent="center">
                {/* <IconButton variant="contained" sx={{ height: 40 }} onClick={() => navigate('/tasks')}><ArrowBack /></IconButton> */}
                <Typography variant="h4" color="inherit" component="div"><Box component="b">About TodoApp</Box></Typography>
            </Grid>

            <Box height={20}></Box>

            <Grid container direction="column" spacing={3} sx={{ bgcolor: colors.common.white, borderRadius: 5, p: 5 }}>
                <Grid container direction="column" spacing={1}>
                    <Typography variant='h5' color='inherit'><Box component="b">Our Mission</Box></Typography>
                    <Typography variant='p' color='inherit'>
                        TodoApp is designed to help you stay organized and productive. We believe that
                        task management should be simple, intuitive, and accessible to everyone. Our
                        application provides all the essential features you need to manage your daily
                        tasks effectively.
                    </Typography>
                </Grid>

                <Grid container direction="column" spacing={1}>
                    <Typography variant='h5' color='inherit'><Box component="b">Features</Box></Typography>
                    <Typography variant='p' component='li' color='inherit'>
                        Create and organize tasks with priorities and due dates
                    </Typography>
                    <Typography variant='p' component='li' color='inherit'>
                        Track task completion and progress
                    </Typography>
                    <Typography variant='p' component='li' color='inherit'>
                        User authentication and profile management
                    </Typography>
                    <Typography variant='p' component='li' color='inherit'>
                        Responsive design that works on all devices
                    </Typography>
                    <Typography variant='p' component='li' color='inherit'>
                        Clean and intuitive user interface
                    </Typography>
                </Grid>

                <Grid container direction="column" spacing={1}>
                    <Typography variant='h5' color='inherit'><Box component="b">Technology</Box></Typography>
                    <Typography variant='p' color='inherit'>
                        Built with modern web technologies including React.js and Material UI.
                        The application is designed to be fast, responsive,
                        and user-friendly across all platforms.
                    </Typography>
                </Grid>
            </Grid>

            <Box height={20}></Box>

            <Grid container justifyContent="center">
                <Button variant="contained" sx={{ height: 40 }} onClick={() => navigate('/tasks')}>Get Started</Button>
            </Grid>
        </Grid>
  );
};

export default AboutPage;