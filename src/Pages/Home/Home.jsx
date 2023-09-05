import React from 'react'
import { Box } from '@mui/material';
import HomeReliable from '../../components/HomeReliable';
import Unique from '../../components/Unique';

export default function Home({ bodyDiv }) {

  return (
    <Box>
      <HomeReliable/>
      <Unique bodyDiv={bodyDiv}/>
    </Box>
  )
}
