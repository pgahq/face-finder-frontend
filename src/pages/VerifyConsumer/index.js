import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import Resizer from 'react-image-file-resizer'

import { VERIFY_CONSUMER } from './mutation'
import ConsumerInfo from './ConsumerInfo'
import PhotoUploader from './PhotoUploader'
import BottomContainer from '../../components/atoms/BottomContainer'

const VerifyConsumer = () => {
  const history = useHistory()

  const [file, setFile] = useState(null)
  const [visibleError, setVisibleError] = useState(false)

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    twitter: Yup.string()
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const [verifyConsumer, { loading, error }] = useMutation(VERIFY_CONSUMER)

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        85,
        0,
        (uri) => {
          resolve(uri)
        },
        'file'
      )
    })

  const onSubmit = async (data) => {
    if (!file) return
    const newFile = await resizeFile(file)

    try {
      const { data: verifyData } = await verifyConsumer({
        variables: {
          email: data.email,
          selfie: newFile
        }
      })
      const { accessToken } = verifyData.verifyConsumer
      window.localStorage.setItem('accessToken', accessToken)

      history.push('/events')
    } catch (e) {
      setVisibleError(true)
    }
  }

  return (
    <Container>
      <PhotoUploader onChange={(fileSelected) => setFile(fileSelected)} />
      <ConsumerInfo register={register} errors={errors} />

      <BottomContainer>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          onClick={handleSubmit(onSubmit)}
        >
          Next
        </Button>
      </BottomContainer>

      <Backdrop open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>

      <Snackbar
        open={visibleError}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setVisibleError(false)}
      >
        <Alert
          elevation={6}
          variant='filled'
          severity='error'
          sx={{ width: '100%' }}
        >
          {error?.message}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default VerifyConsumer
