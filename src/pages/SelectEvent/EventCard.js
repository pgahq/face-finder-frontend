import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Checkbox from '@mui/material/Checkbox'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'

const EventCard = ({ checked, event, onToggle }) => {
  return (
    <ListItem disablePadding sx={{ paddingTop: 1, paddingBottom: 1 }}>
      <ListItemButton
        dense
        alignItems='flex-start'
        sx={{ padding: 0 }}
        onClick={onToggle}
      >
        <Checkbox
          edge='start'
          checked={checked}
          tabIndex={-1}
          disableRipple
          sx={{ paddingTop: 0 }}
        />

        <Grid container flexDirection='column'>
          <Grid item>
            <Avatar
              alt={event.name}
              src='event image' // TODO: show event image
              variant='rounded'
              sx={{ width: 80, height: 80 }}
            />
          </Grid>
          <Grid item>
            <Typography variant='h6'>
              {event.name}
            </Typography>
            <Typography variant='body1'>{`${format(new Date(event.startTime), 'MM/dd/yyyy')} ~ ${format(new Date(event.endTime), 'MM/dd/yyyy')}`}</Typography>
          </Grid>
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

export default EventCard
