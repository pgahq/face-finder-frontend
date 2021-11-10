import React from 'react'
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

const ViewPhotoSkeleton = () => {
  return (
    <Grid container rowSpacing={1} justifyContent='center'>
      {[...Array(12).keys()].map((value) => (
        <Grid item xs={4} key={value} container justifyContent='center'>
          <Skeleton variant='rectangular' width={100} height={100} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ViewPhotoSkeleton
