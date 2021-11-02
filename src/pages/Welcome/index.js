import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CreateUser } from './mutation'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Container, Typography } from '@mui/material'

const Welcome = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const [createUser] = useMutation(CreateUser, {
    variables: {
      createUserInput: { username, password }
    }
  })
  console.log('us:', username)
  console.log('pw:', password)
  return (
    <Container style={{ marginTop: '60px' }}>
      <Box>
        <Typography variant='h5'>Hello, World</Typography>
        <Box display='flex' flexDirection='column' justifyContent='space-around' style={{ minHeight: '200px' }}>
          <TextField label='username' variant='outlined' onChange={e => setUsername(e.target.value)} />
          <TextField type='password' label='password' onChange={e => setPassword(e.target.value)} />
          <Button variant='filled' color='primary' onClick={() => createUser()}>Submit</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Welcome
