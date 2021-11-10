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
                src='https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=164&h=164&fit=crop&auto=format' // TODO: wait api to get link photo
                alt={item.photo.filename}
                loading='lazy'
                style={{ height: 100, objectFit: 'cover' }}
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
