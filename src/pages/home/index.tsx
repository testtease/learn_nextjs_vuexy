// ** MUI Imports
import { Grid, Stack } from '@mui/material'
import Hook from './hook'
import State from './state'
import Effect from './effect'
import Context from './context'
import { createContext, useState } from 'react'

const userContext = createContext()

const Home = () => {
  const [user, setUser] = useState('TestTease')

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} onClick={() => setUser('T')}>
        {user}

        <Stack spacing={4}>
          <Context />
          <Effect />
          <State />
          <Hook />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Home
