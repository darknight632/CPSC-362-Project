import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
const Video = ({ video, name }) => {

  if (video.length == 0) return <Loader />
  return (
    <Box sx={{ mt: { lg: '50px', xs: '20px' } }} p='20px'>
        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '50px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alighItems="center" >
          {video?.slice(0, 6)?.map((item, index) => (
            <a key={index} href={`https://youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
              <img style={{ borderTopLeftRadius: '10px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography sx={{ fontSize: { lg: '15px', xs: '15px' } }} fontWeight={600} color="#00000">
                  {item.video.title}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
    </Box>
  )
}

export default Video