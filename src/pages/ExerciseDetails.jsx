import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {exerciseOptions,youtubeOptions, fetchData} from '../utility/fetchData';
import Details from '../components/Exercise/Details';
import Videos from '../components/Exercise/Video';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, [id]);

  if(exerciseDetail == '0') return <div>No Data</div>
  return (
    <Box sx={{mt: {lg: '96px', xs: '60px'}}}>
      <Details ExerciseDetail={exerciseDetail} />
      <Videos video={exerciseVideos} name={exerciseDetail.name}/>
    </Box>  
  )
}

export default ExerciseDetails