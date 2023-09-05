import { AppBar, Box, ButtonGroup, Button, Container, Grid, Stack, Toolbar, IconButton, Typography } from '@mui/material';
import Stars from '../assets/stars.gif'
import App from '../App';
import LoL from '../assets/lol2.png';
import Cs from '../assets/csgo.png';
import Valo from '../assets/valorant.png';
import bird from '../assets/bird.jpg';
import Paper from '@mui/material/Paper';
import Typewriter from 'typewriter-effect';
import AnimatedText from './AnimatedText';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


export default function NavbarBigger() {
    


const customTheme = createTheme({
  
});

const GamesButton = styled(Button)`
  ${({ theme }) => `
  color: white;
  cursor: pointer;
  font-size: 19px;
  padding: 15px 100px;
  background-color: rgb(211, 219, 213, 0.1);
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: 500,
    easing: theme.transitions.easing.sharp
  })};
  &:hover {
    transform: scale(1.1);
    border: none;
  }
  `}
`;

/*background-image: radial-gradient(circle,  #adbed9 20%, #030617 60%);
    opacity: .9;*/
const StyledButton = styled(Button)`
  ${({ theme }) => `
  color: white;
  cursor: pointer;
  font-size: 19px;
  
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.sharp
  })};
  &:hover {
    background-color: #2a2a2b;
    transform: scale(1.1);
  }
  `}
`;

    
    const handleWrite =  (writer) => {

         writer.typeString("Elo Boosting").deleteChars(12).typeString("The BEST Elo Boosting Experience").start()
        
    }


    const mainGridStyle = { 
        backgroundImage: `url(${Stars})`,
        backgroundSize: "contain",
        backgroundRepeat: "round",
        height: "50rem",
        width: "100vw",
        opacity: '0.99',
    }

    const style = {
        color: 'white',
        fontSize: '19px',
        ':hover': {bgcolor: 'primary.main', color: 'white', },
        
    }

  return (


    <Box style={mainGridStyle} >
        <Grid container>
            <AppBar direction='row' position="static"  style={{ background: 'transparent', boxShadow: 'none', }} >
            <Container>
                <Toolbar>
                <Stack direction={'row'} marginLeft={'auto'} marginTop={'10px'} spacing={2} style={{fontSize:'40px'}}>
                <ThemeProvider theme={customTheme}>
                    <StyledButton>Blog</StyledButton>
                    <StyledButton>Reviews</StyledButton>
                    <StyledButton>Tutorial</StyledButton>
                    <Button size={'large'} sx={{background:'#345FDB', paddingRight:'20px', paddingLeft:'20px', color:'white', fontSize: '19px', ':hover':{background:'white', color:'#345FDB'}}}> My Account</Button>
                    <Button size={'large'} sx={{background:'red', paddingRight:'20px', paddingLeft:'20px', color:'white', fontSize: '19px', ':hover':{background:'white', color:'red'}}}>Our Games</Button>
                    </ThemeProvider>
                </Stack>
                </Toolbar>
                </Container>
            </AppBar>
        </Grid>
        <Grid container direction={'column'} color={'white'}  alignItems={'center'} marginTop={'10rem'} justifyContent={'center'} textAlign='center'>
            <Grid sx={{ xs:6, sm:6, md:6, lg:6}} >
                <Typography gutterBottom variant="h3" component="div">
                <Typewriter  options={{deleteSpeed:'40'}} onInit={(typewriter) => handleWrite(typewriter)}/>
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                Get your <AnimatedText style={{display:'inline'}}/> now !
                </Typography>
            </Grid>
            <Grid sx={{ xs:6, sm:6, md:6, lg:6}}  marginTop='2rem' justifyContent={'center'} alignItems={'center'}>
                <Button sx={{background:'#345FDB', color:'white', margin:'0 .5rem', ':hover':{background:'white', color:'#345FDB', }}} size="large">CHECK TUTORIAL</Button>
                <Button sx={{background:'#345FDB', fontFamily: 'Boogaloo', color:'white', margin:'0 .5rem', ':hover':{background:'white', color:'#345FDB'}}} size="large">BUY BOOST NOW</Button>
                
            </Grid>
        </Grid>
        <Grid container alignItems={'center'} marginTop={'10rem'} justifyContent={'center'}>
            <ButtonGroup variant='none'>
                <GamesButton>
                    <img  width='64' height='64' src={LoL}></img>
                </GamesButton>
                <GamesButton><img width='64' height='64' src={Cs}></img></GamesButton>
                <GamesButton><img  width='64' height='64' src={Valo}></img></GamesButton>
                <GamesButton><img  width='64' height='64' src={LoL}></img></GamesButton>
            </ButtonGroup>
        </Grid>
    </Box>

  )
}
