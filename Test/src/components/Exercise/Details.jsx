import React from 'react'
import {Typography, Stack, Button} from '@mui/material';

const Details = ({ExerciseDetail}) => {
  const {gifUrl, name} = ExerciseDetail;
  
  return (
    <Stack gap="60px" sx={{ flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading= "lazy"/>
      <Stack sx= {{ gap: {lg: '35px', xs: '20px'}}}>
        <Typography sx= {{fontSize: {lg: '64px', xs: '30px'}}} fontWeight={700} textTransform='capitalize'>
          {name}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Details