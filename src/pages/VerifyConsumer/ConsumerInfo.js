import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const ConsumerInfo = ({ register, errors }) => {
  return (
    <Box>
      <Box mb={1}>
        <Typography variant='title'>Name</Typography>
      </Box>
      <TextField
        fullWidth
        name='name'
        placeholder='Enter your name'
        {...register('name')}
      />
      <Box mt={2} mb={1}>
        <Typography variant='title'>Email</Typography>
      </Box>
      <TextField
        required
        fullWidth
        placeholder='Enter your email address'
        type='email'
        name='email'
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
      />
      <Box mt={2} mb={1}>
        <Typography variant='title'>Twitter</Typography>
      </Box>
      <TextField
        fullWidth
        placeholder='Enter your twitter id'
        {...register('twitter')}
      />
    </Box>
  )
}

export default ConsumerInfo
