import React, {useEffect,useState} from 'react';
import { Box } from '@mui/material';

import Search from '../components/Exercise/Search';
import ExerciseMain from '../components/Exercise/ExerciseMain';



const Exercise = () => {

const [exercises, setExercises] = useState([]);
const [bodyPart,setBodyPart] = useState('all');

  return (
    <Box>
      <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <ExerciseMain setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />

    </Box>
  )
}

export default Exercise