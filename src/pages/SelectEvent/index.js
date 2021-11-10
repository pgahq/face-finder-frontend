import React, { useState } from 'react'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { MY_EVENTS } from './query'
import EmptyView from '../../components/EmptyView'
import BottomContainer from '../../components/atoms/BottomContainer'
import EventCard from './EventCard'
import EventsSkeleton from './EventsSkeleton'

const SelectEvent = () => {
  const history = useHistory()

  const [selectedEvent, setSelectedEvent] = useState(null)

  const { data, loading } = useQuery(MY_EVENTS)

  const handleToggle = (value) => {
    if (selectedEvent === value) {
      setSelectedEvent(null)
    } else {
      setSelectedEvent(value)
    }
  }

  const handleSubmit = () => {
    if (selectedEvent) {
      history.push(`/events/${selectedEvent}/photos`)
    }
  }

  return (
    <Container sx={{ padding: 0 }}>
      <Grid container justifyContent='center'>
        <Typography variant='h5'>Events</Typography>
      </Grid>
      {loading && <EventsSkeleton />}

      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper'
        }}
      >
        {data?.myEvents.length === 0 && <EmptyView title='No event' />}

        {data?.myEvents.map((event) => {
          return (
            <EventCard
              key={event.id}
              event={event}
              checked={selectedEvent === event.id}
              onToggle={() => handleToggle(event.id)}
            />
          )
        })}
      </List>

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
    </Container>
  )
}

export default SelectEvent
