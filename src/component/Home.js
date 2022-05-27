import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  
    let location = useLocation()
  return (
    <>
    

    <Typography paragraph sx={{marginLeft:"500px"}} variant='h6'>{location.state.Profile}</Typography>
    <Typography paragraph sx={{marginLeft:"500px"}} variant='h6' >  {location.state.Analysis}</Typography>
    <Typography paragraph sx={{marginLeft:"500px"}} variant='h6' >  {location.state.Account}</Typography>
           
    </>
  )
}
