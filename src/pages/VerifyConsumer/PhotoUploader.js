import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CloudUploadRounded from '@mui/icons-material/CloudUploadRounded'

import BottomContainer from '../../components/atoms/BottomContainer'

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

const PhotoUploader = ({ onChange, onSubmit }) => {
  const [image, setImage] = useState(null)

  const handleSelectImage = (event) => {
    if (event.target && event.target.files) {
      const file = event.target.files[0]
      onChange(file)
      setImage(URL.createObjectURL(file))
    }
  }

  const handleSubmit = () => {
    if (!image) return
    onSubmit()
  }

  return (
    <Box mt={1}>
      <label htmlFor='upload-photo'>
        <input
          id='upload-photo'
          name='upload-photo'
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleSelectImage}
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

      <BottomContainer>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={handleSubmit}
        >
          Next
        </Button>
      </BottomContainer>
    </Box>
  )
}

export default PhotoUploader
