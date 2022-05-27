import {Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'

export default function Login() {
    const paperStyle = { padding: '30px 20px', width: 500, margin: '20px auto' }
    const marginTopStyle = { marginTop: '10px' }
    const bgColor = { bgcolor: '#a8dadc' }
    return (
        <>
           <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid  align='center' md={8}>
                        <Avatar sx={bgColor} />
                        <Typography variant='h4'>LogIn</Typography>
                        <Typography variant='caption'>Please fill this form to create an account!</Typography>
                        <TextField fullWidth id="standard-basic" label="Full Name" variant="standard" />
                        <TextField fullWidth id="standard-basic" type='Email' label="Email" variant="standard" sx={marginTopStyle} />
                        <TextField fullWidth id="standard-basic" type='password' label="Password" variant="standard" sx={marginTopStyle} />
                       <Button variant="contained" color='success' sx={marginTopStyle}>Log In</Button> 
                    </Grid>
                </Paper>
            </Grid>
        </>
    )
}
