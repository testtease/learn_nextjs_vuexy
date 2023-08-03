import { Button, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const BoxCard = () => {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography>Ini text yang dihide</Typography>
      </CardContent>
    </Card>
  )
}

const State = () => {
  const [card, setCard] = useState(false)

  return (
    <Card>
      <CardHeader title='Tes Show & Hide Component'></CardHeader>
      <CardContent>
        <Stack direction='row' spacing={2}>
          <Button variant='outlined' onClick={() => setCard(true)}>
            Show
          </Button>
          <Button variant='outlined' color='error' onClick={() => setCard(false)}>
            Hide
          </Button>
        </Stack>
        {card && <BoxCard />}
      </CardContent>
    </Card>
  )
}

export default State
