import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { useHistory } from 'react-router-dom'

import PhotoUploader from './PhotoUploader'
import BottomContainer from '../../components/atoms/BottomContainer'

const SelectImage = () => {
  const history = useHistory()

  const [file, setFile] = useState(null)

  const handleSubmit = () => {
    if (!file) return
    history.push('/verify', { file })
  }

  return (
    <Container style={{ marginTop: '140px' }}>
      <Box mt={1}>
        <PhotoUploader onChange={(fileSelected) => setFile(fileSelected)} />

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
    </Container>
  )
}

export default SelectImage
