import { Stack, Container, Grid } from '@mui/material'

const Footer = () => {
  return (
    <div>
      <Stack width={'100vw'} height={'300px'} sx={{bgcolor:'#0C1116', color:'white', fontSize:'18px'}} justifyContent={'center'} alignItems={'center'}>
        <Container>
        <Grid container>
          <Grid item md={4}>
          <h2 style={{marginBottom:'2rem'}}>LOGO</h2>
          <p style={{marginBottom:'2rem'}}>League of Legends is a registered trademark of Riot Games, Inc. We are in no way affiliated with, associated with or endorsed by Riot Games, Inc.</p>
          <p style={{marginBottom:'2rem'}}>© 2015-2023 ggboost.com | All Rights Reserved</p>

          </Grid>
          <Grid item md={8}>
            <Grid container marginLeft={'2rem'} className='footer-lol'>
              <Grid item xs={3} container direction={'column'} justifyContent={'space-around'}><h3>LOL Boost</h3><p>Division Boost</p><p>Placements</p><p>Duo Games</p><p>Net Wins</p></Grid>
              <Grid item xs={3}><h3>CS Boost</h3><p>Division Boost</p><p>Placements</p><p>Duo Games</p><p>Net Wins</p></Grid>
              <Grid item xs={3}><h3>VALORANT Boost</h3><p>Division Boost</p><p>Placements</p><p>Duo Games</p><p>Net Wins</p></Grid>
              <Grid item xs={3}><h3>TFT Boost</h3><p>Division Boost</p><p>Placements</p><p>Duo Games</p><p>Net Wins</p></Grid>
              <Grid></Grid>
            </Grid>
       

          </Grid>
        </Grid>
        </Container>
        
      </Stack>
    </div>
  )
}

export default Footer
