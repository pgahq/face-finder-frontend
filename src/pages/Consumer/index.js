import React, { useState } from 'react'
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Backdrop,
  CircularProgress
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useMutation } from '@apollo/client'

import { VERIFY_CONSUMER } from './mutation'

const TakeSelfie = styled('div')(({ theme }) => ({
  textAlign: 'center',
  height: 100,
  borderStyle: 'dotted',
  borderRadius: 4,
  borderColor: theme.palette.primary.main
}))

const SelfieImage = styled('img')({
  width: '100%',
  height: 200,
  objectFit: 'contain'
})

const Consumer = () => {
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [email, setEmail] = useState(null)

  const [verifyConsumer, { loading }] = useMutation(VERIFY_CONSUMER)

  const handleUploadImage = (event) => {
    if (event.target && event.target.files) {
      const file = event.target.files[0]
      setFile(file)
      setImage(URL.createObjectURL(file))
    }
  }

  const handleVerifyConsumer = async () => {
    console.log(file)
    await verifyConsumer({
      variables: {
        selfie: file,
        email
      }
    })
  }

  return (
    <Container style={{ marginTop: '60px' }}>
      <Grid container justifyContent='center' alignItems='center'>
        <Box mb={2}>
          <Typography variant='h5'>Login</Typography>
        </Box>
      </Grid>
      <Box display='flex' flexDirection='column' justifyContent='space-around'>
        <label htmlFor='upload-photo'>
          <input
            id='upload-photo'
            name='upload-photo'
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={handleUploadImage}
          />

          {image
            ? (
              <SelfieImage src={image} alt='selfie' />
              )
            : (
              <TakeSelfie>
                <Grid
                  container
                  justifyContent='center'
                  alignItems='center'
                  style={{ height: 100 }}
                >
                  <Typography variant='subtitle1'>Upload image</Typography>
                </Grid>
              </TakeSelfie>
              )}
        </label>

        <Box mt={2}>
          <TextField
            fullWidth
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box mt={2}>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            loading={loading}
            onClick={() => handleVerifyConsumer()}
          >
            Submit
          </Button>
        </Box>
      </Box>

      <Backdrop
        open={loading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </Container>
  )
}

export default Consumer
