import React from 'react'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import ImageList from '@mui/material/ImageList'
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

      <ImageList variant='masonry' cols={2} gap={8}>
        {data?.myPhotosInEvent.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.photo.url}
              alt={item.photo.filename}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>

      <BottomContainer>
        <Button fullWidth variant='contained' color='primary'>
          Next
        </Button>
      </BottomContainer>
    </Container>
  )
}

export default ViewPhoto
