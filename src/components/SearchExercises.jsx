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

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: 'none',
              borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          heigth="76px"
          value=""
          onChange={() => {}}
          placeholder="Buscar exercícios"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            heigth: '56px',
            position: 'absolute'
          }}
          heigth="76px"
        >Search</Button>
      </Box>
    </Stack>
  )
}