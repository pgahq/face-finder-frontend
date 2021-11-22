import React, { useState, useEffect } from 'react'
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
  const [loading, setLoading] = useState(true)

  const { data, stopPolling } = useQuery(MY_EVENTS, { pollInterval: 1000 })

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

  useEffect(() => {
    if (data?.myEvents.status) {
      stopPolling()
      setLoading(false)
    }
  }, [data, stopPolling])

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
        {!loading && data?.myEvents?.events.length === 0 && <EmptyView title='No event' />}

        {data?.myEvents?.events.map((event) => {
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
