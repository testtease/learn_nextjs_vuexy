import { Button, Card, CardContent, CardHeader, Stack, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'

const Memo = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  return (
    <Card>
      <CardHeader title='Learn useMemo'></CardHeader>
      <CardContent>
        <Stack direction={'row'} alignItems={'center'} spacing={2} sx={{ mb: 2 }}>
          <Typography>{dark ? 'Dark' : 'Not Dark'}</Typography>
          <Button variant='outlined' color='success' onClick={() => setDark(prevDark => !prevDark)}>
            {dark ? 'Ubah Jadi Not Dark' : 'Ubah Jadi Dark'}
          </Button>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Typography>{doubleNumber}</Typography>
          <TextField type='number' onChange={e => setNumber(parseInt(e.target.value))} />
        </Stack>
      </CardContent>
    </Card>
  )
}

function slowFunction(number) {
  console.log('Calling Slow Function')

  // for (let i = 0; i < 1000000000; i++) {}

  return number * 2
}

export default Memo
