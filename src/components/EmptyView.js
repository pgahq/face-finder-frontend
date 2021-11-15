import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SearchOffOutlined from '@mui/icons-material/SearchOffOutlined'

const EmptyView = ({ title, Icon = SearchOffOutlined }) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      sx={{ height: 500 }}
    >
      <Grid item>
        <Icon color='primary' sx={{ fontSize: 100 }} />
      </Grid>
      <Grid>
        <Typography variant='h5'>{title}</Typography>
      </Grid>
    </Grid>
  )
}

export default EmptyView
