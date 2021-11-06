import React, { useState } from 'react'
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Backdrop,
  CircularProgress,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useMutation } from '@apollo/client'

import CloudUploadRounded from '@mui/icons-material/CloudUploadRounded'
import Close from '@mui/icons-material/Close'

import { VERIFY_CONSUMER } from './mutation'

const SelectImageContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  height: 100,
  borderStyle: 'dashed',
  borderRadius: 4,
  borderColor: 'grey'
}))

const SelfieImage = styled('img')({
  width: 80,
  height: 80,
  objectFit: 'cover',
  borderRadius: 8
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
    await verifyConsumer({
      variables: {
        email,
        selfie: file
      }
    })
  }

  return (
    <Container style={{ marginTop: '50px' }}>
      <Grid container justifyContent='center' alignItems='center'>
        <Box mb={2}>
          <Typography variant='h5'>Verify consumer</Typography>
        </Box>
      </Grid>

      <Box>
        <Box mb={1}>
          <Typography variant='title'>Email</Typography>
        </Box>
        <TextField
          fullWidth
          placeholder='Enter your email address'
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>

      <Box mt={1}>
        <Box mt={2} mb={1}>
          <Typography variant='title'>Selfie image</Typography>
        </Box>
        <label htmlFor='upload-photo'>
          <input
            id='upload-photo'
            name='upload-photo'
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={handleUploadImage}
          />

          <SelectImageContainer>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              style={{ height: 100 }}
            >
              <CloudUploadRounded color='primary' fontSize='large' />
              <Typography variant='subtitle1'>Upload image</Typography>
            </Grid>
          </SelectImageContainer>
        </label>

        {image && (
          <Box mt={1}>
            <ListItem disablePadding>
              <ListItemAvatar>
                <SelfieImage src={image} alt='selfie' />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <Typography noWrap type='body2'>
                    {file?.name}
                  </Typography>
                }
                style={{ paddingLeft: 4, paddingRight: 4 }}
              />
              <IconButton>
                <Close />
              </IconButton>
            </ListItem>
          </Box>
        )}
      </Box>

      <Box mt={2}>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={() => handleVerifyConsumer()}
        >
          Submit
        </Button>
      </Box>

      <Backdrop open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Container>
  )
}

export default Consumer
