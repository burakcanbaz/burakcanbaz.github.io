import { AppBar, Container, IconButton, Stack, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LoL from '../assets/lol2.png';
import Cs from '../assets/csgo.png';
import Valo from '../assets/valorant.png';

const Navbar = () => {
  return (
    <nav>
    <AppBar sx={{bgcolor: 'aliceblue', color:'black'}}>
        <Container >
            <Toolbar sx={{marginTop:'1rem', marginBottom:'1rem'}}>
                <IconButton>
                    <SportsEsportsIcon fontSize='large'/>
                </IconButton>
                {/* <Typography variant='h5'> Games </Typography> */}
            <Stack direction={'row'} marginLeft={'auto'} spacing={4}>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <img src={LoL} width={48} height={48} style={{borderRadius: '50%'}}></img>
                    <Typography variant='h6'> League Of Legends </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <img src={Cs} width={48} height={48} style={{borderRadius: '50%'}}></img>
                    <Typography variant='h6'> Counter Strike </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <img src={Valo} width={48} height={48} style={{borderRadius: '50%'}}></img>
                    <Typography variant='h6'> Valorant </Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <img src={LoL} width={48} height={48} style={{borderRadius: '50%'}}></img>
                    <Typography variant='h6'> TFT </Typography>
                </Box>
            </Stack>
            </Toolbar>
            
        </Container>
    </AppBar>
    </nav>
  )
}

export default Navbar;
