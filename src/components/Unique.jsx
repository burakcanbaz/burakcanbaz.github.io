import { Box, Container, Grid, Stack, Modal, Typography, Button } from '@mui/material';
import UniqueCard from './UniqueCard';
import { useRef, useState, useEffect } from 'react';
import useOutsideAlerter from '../csutomHook/useOutsideAlerter';
import LoLGif from '../assets/lolgif.gif';
import Play from '../assets/play-button.png'
import Zed from '../assets/zed.gif';

export default function Unique() {

    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const handleClose = () => setOpen(false);
    useOutsideAlerter(wrapperRef, open, handleClose);
    const handleOpen = () => setOpen(true);
    console.log(wrapperRef);


    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        background: '',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50rem',
        height: '40rem',
        border: 'no',
        borderRadius: '10px',
        boxShadow: 24,
        p: 4,
        outline: 0
      };
      

    return (
        <Grid container sx={{ background: '#F6F9FC' }}>
            <Grid item md={6} marginBottom={'2rem'}>
                <Container>
                    <Box>
                        <UniqueCard />
                    </Box>
                </Container>
            </Grid>
            <Grid item md={6} sx={{ backgroundImage: `url(${Zed})`, display:'flex', alignItems:'center'}} onClick={handleOpen}>
                <Container sx={{display:'flex', justifyContent:'center'}}>
                    <div className='unique-img' style={{backgroundImage:`url(${LoLGif})`, borderRadius:'10rem', width:'20rem', height:'20rem', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
                        <img src={Play} style={{width:'3rem', cursor:'pointer'}}></img>
                    </div>
                    <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} ref={wrapperRef}>
                        <iframe allowfullscreen style={{width: "40rem", height: "30rem", border:'none', borderRadius: '10px'}} src="https://www.youtube.com/embed/vzHrjOMfHPY"></iframe>
                            
                        </Box>
                    </Modal>    
                </Container>
            </Grid>
        </Grid>
    )
}
