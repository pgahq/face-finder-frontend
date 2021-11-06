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

import CloudUploadRounded from '@mui/icons-material/CloudUploadRounded'

import { VERIFY_CONSUMER } from './mutation'
import { BottomContainer } from '../../components'

const SelectImageContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  height: 300,
  borderStyle: 'dashed',
  borderRadius: 4,
  borderColor: 'grey'
}))

const SelfieImage = styled('img')({
  width: 300,
  height: 300,
  objectFit: 'cover',
  borderRadius: 8
})

const IMAGE_PAGE = 'IMAGE'
const INFO_PAGE = 'INFO'

const VerifyConsumer = () => {
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [email, setEmail] = useState(null)

  const [currentPage, setCurrentPage] = useState(IMAGE_PAGE)

  const [verifyConsumer, { loading }] = useMutation(VERIFY_CONSUMER)

  const handleUploadImage = (event) => {
    if (event.target && event.target.files) {
      const file = event.target.files[0]
      setFile(file)
      setImage(URL.createObjectURL(file))
    }
  }

  const handleNextStep = async () => {
    if (!image) return

    if (currentPage === INFO_PAGE) {
      if (!email) return

      await verifyConsumer({
        variables: {
          email,
          selfie: file
        }
      })
    } else {
      setCurrentPage(INFO_PAGE)
    }
  }

  return (
    <Container style={{ marginTop: '140px' }}>
      {currentPage === INFO_PAGE
        ? (
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box mt={2} mb={1}>
              <Typography variant='title'>Twitter</Typography>
            </Box>
            <TextField fullWidth placeholder='Enter your twitter id' />
          </Box>
          )
        : (
          <Box mt={1}>
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
                  <Grid container justifyContent='center'>
                    <SelfieImage src={image} alt='selfie' />
                  </Grid>
                  )
                : (
                  <SelectImageContainer>
                    <Grid
                      container
                      justifyContent='center'
                      alignItems='center'
                      flexDirection='column'
                      style={{ height: 300 }}
                    >
                      <CloudUploadRounded color='primary' fontSize='large' />
                      <Typography variant='subtitle1'>Select image</Typography>
                    </Grid>
                  </SelectImageContainer>
                  )}
            </label>
          </Box>
          )}

      <BottomContainer>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={handleNextStep}
        >
          Next
        </Button>
      </BottomContainer>

      <Backdrop open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Container>
  )
}

export default VerifyConsumer
