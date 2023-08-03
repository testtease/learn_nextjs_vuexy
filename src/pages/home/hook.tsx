import { Button, Card, CardContent, CardHeader, Stack } from '@mui/material'
import React, { useState } from 'react'

const Hook = () => {
  const [warna, setWarna] = useState('red')

  return (
    <Card>
      <CardHeader title='Tes Hook'></CardHeader>
      <CardContent>
        <h1>Tes Rubah Warna Menjadi {warna}</h1>
        <Stack direction='row' spacing={2}>
          <Button variant='tonal' color='error' onClick={() => setWarna('red')}>
            Red
          </Button>
          <Button variant='tonal' onClick={() => setWarna('blue')}>
            Blue
          </Button>
          <Button variant='tonal' color='success' onClick={() => setWarna('green')}>
            Green
          </Button>
          <Button variant='tonal' color='warning' onClick={() => setWarna('orange')}>
            Orange
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Hook
