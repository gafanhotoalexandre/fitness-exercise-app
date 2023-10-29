import { Box, Button, Stack, TextField, Typography } from '@mui/material'

export function SearchExercises() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mt="37px"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          marginTop: { lg: '40px' }
        }}
        mb="50px"
        textAlign="center"
      >
        Exercícios Incríveis que <br /> Você Deve Conhecer
      </Typography>
    </Stack>
  )
}