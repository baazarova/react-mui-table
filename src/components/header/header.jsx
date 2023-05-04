import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import NotificationsIcon from '@mui/icons-material/Notifications';
import BasicModal from './modal';

export default function Header ({query,setQuery}){
  return (
    <Stack sx={{flexDirection:"row", justifyContent:"space-between", p:'18px 0'}}>
        <Typography variant='h4'>Tickets</Typography>
        <Box sx={{display:"flex",  flexDirection:"row", alignItems:"center"}}>
           <Box sx={{display:"flex", flexDirection:"row"}}>
            <BasicModal query={query} setQuery={setQuery}/>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
           </Box>
        <p>here will be an item soon..</p>

        </Box>
       
    </Stack>
  )
}

