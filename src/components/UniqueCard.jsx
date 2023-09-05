import { Box, Stack, Typography, } from '@mui/material';
import { preferReason } from '../data/PreferData';

export default function UniqueCard() {
    return (
        <div>
            {preferReason.map((data, index) => {
                return (
                    <Box key={index} margin={'5rem'}>
                        <Stack display={'flex'} direction={'row'} justifyContent={'end'} marginTop={'1rem'}>
                            <img width={'10%'} src={data.icon}></img>
                            <Stack display={'flex'} direction={'column'} marginLeft={'2rem'}>
                                <Typography variant='h5'>{data.title}</Typography>
                                <Typography variant='body1' color>{data.content}</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                )
            })}
        </div>
    )
}
