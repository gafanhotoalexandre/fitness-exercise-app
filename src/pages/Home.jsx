import { useState } from 'react'
import { Box } from '@mui/material'

import { HeroBanner } from '../components/HeroBanner'
import { SearchExercises } from '../components/SearchExercises'
import { Exercises } from '../components/Exercises'

export function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}      
      />
    </Box>
  )
}