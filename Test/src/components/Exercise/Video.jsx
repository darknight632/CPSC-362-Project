import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
const Video = ({video, name}) => {

  if(video.length == 0) return <Loader />  
  return (
    <Box sx= {{mt: {lg: '203px', xs: '20px'}}} p='203px'>
        <Stack>
            {video?.slice(0,3)?.map((item,index) =>(
                <a key ={index} href={`https://youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
                    <img style={{ borderTopLeftRadius: '20px'}} src={item.video.thumbnails[0].url} alt={item.video.title} />
                    
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default Video