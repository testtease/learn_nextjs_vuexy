import { Button, Card, CardContent, CardHeader, Stack } from '@mui/material'
import React from 'react'

const Link = () => {
  return (
    <Card>
      <CardHeader title='Kumpulan Link'></CardHeader>
      <CardContent>
        <Stack direction={'row'} spacing={2}>
          <Button variant='tonal' color='primary'>
            Home
          </Button>
          <Button variant='tonal' color='error'>
            Basic Table
          </Button>
          <Button variant='tonal' color='warning'>
            Data Table
          </Button>
          <Button variant='tonal' color='success'>
            Second Page
          </Button>
          <Button variant='tonal' color='info'>
            ACL
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Link
