import React from 'react'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import ImageListItem from '@mui/material/ImageListItem'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { MY_PHOTOS_IN_EVENT } from './query'
import BottomContainer from '../../components/atoms/BottomContainer'
import ViewPhotoSkeleton from './ViewPhotoSkeleton'

const ViewPhoto = () => {
  const { eventId } = useParams()

  const { data, loading } = useQuery(MY_PHOTOS_IN_EVENT, {
    variables: { eventId: Number(eventId) }
  })

  return (
    <Container sx={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 8 }}>
      {loading && <ViewPhotoSkeleton />}

      <Grid container rowSpacing={1}>
        {data?.myPhotosInEvent.map((item) => (
          <Grid item xs={4} key={item.id} container justifyContent='center'>
            <ImageListItem>
              <img
                src={item.photo.url}
                alt={item.photo.filename}
                loading='lazy'
                style={{ height: 100, width: 100, objectFit: 'cover' }}
              />
            </ImageListItem>
          </Grid>
        ))}
      </Grid>

      <BottomContainer>
        <Button fullWidth variant='contained' color='primary'>
          Next
        </Button>
      </BottomContainer>
    </Container>
  )
}

export default ViewPhoto
