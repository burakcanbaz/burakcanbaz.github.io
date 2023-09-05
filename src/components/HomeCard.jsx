import { data } from '../data/CardData';
import React from 'react'
import { Card, Grid,Typography, CardMedia, CardContent, CardActionArea } from '@mui/material';
import Badges from '../assets/badges.png'

export default function HomeCard() {
  return (
    data.map((item, index) => {
        return (
          <Grid key={index} item md={8}>
            <Card sx={{ display: 'flex', flexDirection: 'row',  gap: '2rem', background: '#E7F7FF', justifyContent: 'center', alignItems:'center'}}>
            <CardMedia 
            component="img"
            sx={{ width: '7rem', height:'6rem',  marginLeft: '2rem' }}
            image={item.icon}
            alt="Live from space album cover"/>
            <CardContent>
              <Typography>
                {item.name}
              </Typography>
              <Typography>
                {item.content}
              </Typography>
            </CardContent>
            </Card>
          </Grid>
        )
      })
  )
}
