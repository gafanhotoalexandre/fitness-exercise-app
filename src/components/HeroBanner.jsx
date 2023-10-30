import { Box, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/Banner.png'
export function HeroBanner() {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" p="20px" >
      <Typography
        color="#ff2625"
        fontWeight="600"
        fontSize="26px"
        sx={{
          mt: { lg: '-120px' }
        }}
      >
        Clube Fitness
      </Typography>

      <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px" mt="30px"
      >
        Sue, Sorria <br /> e Repita
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Confira os exercícios mais eficazes
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: '#ff2526',
          padding: '10px 15px'
        }}
      >Explorar Exercícios</Button>

      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
      >
        Exercício
      </Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}