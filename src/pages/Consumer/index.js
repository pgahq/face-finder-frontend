import React, { useState } from 'react'
import { Button, Container, Typography, Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

const TakeSelfie = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
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

  const handleUploadImage = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if (event.target && event.target.files) {
      const file = event.target.files[0]
      setFile(file)
      setImage(URL.createObjectURL(file))
    }
  }

  return (
    <Container style={{ marginTop: '60px' }}>
      <Grid container justifyContent='center' alignItems='center'>
        <Box mb={2}>
          <Typography variant='h5'>Take selfie</Typography>
        </Box>
      </Grid>
      <Box display='flex' flexDirection='column' justifyContent='space-around'>
        <Box>
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
                <SelfieImage
                  src={image}
                  alt='selfie'
                />
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
        </Box>

        <Box mt={2}>
          <Button fullWidth variant='contained' color='primary'>
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Consumer
