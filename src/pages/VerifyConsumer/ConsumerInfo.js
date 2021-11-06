import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const ConsumerInfo = ({ email, onChangeEmail }) => {
  return (
    <Box>
      <Box mb={1}>
        <Typography variant='title'>Name</Typography>
      </Box>
      <TextField fullWidth placeholder='Enter your name' />
      <Box mt={2} mb={1}>
        <Typography variant='title'>Email</Typography>
      </Box>
      <TextField
        fullWidth
        placeholder='Enter your email address'
        value={email || ''}
        onChange={(e) => onChangeEmail(e.target.value)}
      />
      <Box mt={2} mb={1}>
        <Typography variant='title'>Twitter</Typography>
      </Box>
      <TextField fullWidth placeholder='Enter your twitter id' />
    </Box>
  )
}

export default ConsumerInfo
