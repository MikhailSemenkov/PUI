import { useState } from "react";
import { PersonOutline } from "@mui/icons-material";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import { colors } from "@mui/material";

// Profile Page
const ProfilePage = ({ navigate, user, onUserUpdate }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [bio, setBio] = useState(user.bio);

    const handleSave = () => {
        const oldEmail = user.email;
        user.name = name;
        user.email = email;
        user.bio = bio;
        onUserUpdate(oldEmail, user);
    };

    return (
        <Grid container direction="column">
            <Box height={100}></Box>

            <Typography variant="h5" color="inherit" component="div"><Box component="b">Profile</Box></Typography>
            
            <Box height={20} />

            <Grid container direction="column" spacing={3} sx={{ bgcolor: colors.common.white, borderRadius: 5, p: 5 }}>
                <Grid container direction="row" alignItems="center">
                    <PersonOutline sx={{ fontSize: 60, bgcolor: colors.blue[100], color: colors.blue[600], borderRadius: '50%', p: 1 }}/>
                    <Grid container direction="column" spacing={0}>
                        <Typography variant='p' color='inherit'><Box component="b">{user.name}</Box></Typography>
                        <Typography variant='span' color='inherit'>{user.email}</Typography>
                    </Grid>
                </Grid>

                <Grid container direction="column" spacing={2}>
                    <Grid container direction="column" spacing={0}>
                        <Typography variant="label">Name</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </Grid>

                    <Grid container direction="column" spacing={0}>
                        <Typography variant="label">Email</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </Grid>

                    <Grid container direction="column" spacing={0}>
                        <Typography variant="label">Bio</Typography>
                        <TextField
                            required
                            rows={3}
                            id="outlined-required"
                            value={bio}
                            onChange={(e) => {setBio(e.target.value)}}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Button variant="contained" sx={{ height: 40 }} onClick={() => {handleSave()}}>Save Changes</Button>
                </Grid>
            </Grid>
    </Grid>
  );
};

export default ProfilePage;