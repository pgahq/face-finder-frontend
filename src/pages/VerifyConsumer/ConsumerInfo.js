import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const ConsumerInfo = ({ register, errors }) => {
  return (
    <Box>
      <TextField
        fullWidth
        margin='dense'
        name='name'
        label='Name'
        placeholder='Enter your name'
        {...register('name')}
      />
      <TextField
        required
        fullWidth
        margin='dense'
        placeholder='Enter your email address'
        type='email'
        name='email'
        label='Email'
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
      />
      <TextField
        fullWidth
        margin='dense'
        label='Twitter'
        placeholder='Enter your twitter id'
        {...register('twitter')}
      />
    </Box>
  )
}

export default ConsumerInfo
