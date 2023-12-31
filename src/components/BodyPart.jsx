import { Stack } from '@mui/material'

import Icon from '../assets/icons/gym.png'

// eslint-disable-next-line
export function BodyPart({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
    >
      <img src={Icon} alt="dumbbell" style={{
        width: '40px', height: '40px'
      }} />
    </Stack>
  )
}