import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { VERIFY_CONSUMER } from './mutation'
import ConsumerInfo from './ConsumerInfo'
import PhotoUploader from './PhotoUploader'

const IMAGE_PAGE = 'IMAGE'
const INFO_PAGE = 'INFO'

const VerifyConsumer = () => {
  const [file, setFile] = useState(null)
  const [currentPage, setCurrentPage] = useState(IMAGE_PAGE)

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

  const onSubmit = async (data) => {
    try {
      await verifyConsumer({
        variables: {
          email: data.email,
          selfie: file
        }
      })
    } catch (e) {
      // TODO: handle error
      console.log(e.graphQLErrors)
    }
  }

  const [verifyConsumer, { loading }] = useMutation(VERIFY_CONSUMER)

  return (
    <Container style={{ marginTop: '140px' }}>
      {currentPage === INFO_PAGE
        ? (
          <ConsumerInfo register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />
          )
        : (
          <PhotoUploader onChange={(file) => setFile(file)} onSubmit={() => setCurrentPage(INFO_PAGE)} />
          )}

      <Backdrop open={loading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Container>
  )
}

export default VerifyConsumer
