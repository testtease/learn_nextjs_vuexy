// ** MUI Imports
import { Grid, Stack } from '@mui/material'
import Hook from './hook'
import State from './state'
import Effect from './effect'
import Context from './context'
import ThemeProvider from './themeContext'
import Memo from './memo'

import Link from './link'

const Home = () => {
  return (
    <>
      <ThemeProvider>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Stack spacing={4}>
              <Link />
              <Memo />
              <Context />
              <Effect />
              <State />
              <Hook />
            </Stack>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default Home
