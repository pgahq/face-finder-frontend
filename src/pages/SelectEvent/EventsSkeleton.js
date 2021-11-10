import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

const EventsSkeleton = () => {
  return (
    <>
      {[...Array(4).keys()].map((value) => (
        <Grid container key={value}>
          <Grid item xs={1}>
            <Skeleton variant='rectangular' width={20} height={20} />
          </Grid>
          <Grid item xs={11}>
            <Box key={value}>
              <Skeleton variant='rectangular' width={80} height={80} />
              <Skeleton variant='text' animation='wave' />
              <Skeleton variant='text' animation='wave' />
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  )
}

export default EventsSkeleton
