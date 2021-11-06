import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useMutation } from '@apollo/client'

import { VERIFY_CONSUMER } from './mutation'
import { BottomContainer } from '../../components/atoms'
import ConsumerInfo from './ConsumerInfo'
import PhotoUploader from './PhotoUploader'

const IMAGE_PAGE = 'IMAGE'
const INFO_PAGE = 'INFO'

const VerifyConsumer = () => {
  const [file, setFile] = useState(null)
  const [email, setEmail] = useState(null)

  const [currentPage, setCurrentPage] = useState(IMAGE_PAGE)

  const [verifyConsumer, { loading }] = useMutation(VERIFY_CONSUMER)

  const handleNextStep = async () => {
    if (!file) return

    if (currentPage === INFO_PAGE) {
      if (!email) return

      try {
        await verifyConsumer({
          variables: {
            email,
            selfie: file
          }
        })
      } catch (e) {
        // TODO: handle error
        console.log(e.graphQLErrors)
      }
    } else {
      setCurrentPage(INFO_PAGE)
    }
  }

  return (
    <Container style={{ marginTop: '140px' }}>
      {currentPage === INFO_PAGE
        ? (
          <ConsumerInfo
            email={email}
            onChangeEmail={(value) => setEmail(value)}
          />
          )
        : (
          <PhotoUploader onChange={(file) => setFile(file)} />
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
