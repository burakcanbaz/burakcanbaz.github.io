import { Container, Grid, Typography, } from '@mui/material';
import LoL from '../assets/LolHomePage.jpg';
import HomeCard from './HomeCard';


export default function HomeReliable() {
    return (
        <Grid container columnSpacing={8} style={{background: '#dbc7c5'}}>
            <Grid item md={6} className='fade-in-img'>
                <img width={'100%'} height={'100%'} src={LoL} className='imgWrap' ></img>
            </Grid>
            <Grid item md={6} display={'flex'} marginTop={'1rem'}>
                <Container>
                    <Grid container direction={'column'}>
                        <Grid item><Typography variant='h4' component={'h4'}>Best-Selling League of Legends &</Typography></Grid>
                        <Grid item><Typography variant='h4' component={'h4'}>Valorant Boosting Services</Typography></Grid>
                    </Grid>
                    <Grid container spacing={3} marginTop={'2px'}>
                        <HomeCard />
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}
