import React from 'react'
import { useTheme, useThemeUpdate } from './themeContext'
import { Button, Card, CardContent } from '@mui/material'

const Context = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    borderRadius: '0.3rem'
  }

  return (
    <Card>
      <CardContent>
        <Button onClick={toggleTheme} variant='outlined' color='info' sx={{ mb: 2 }}>
          Toggle Context
        </Button>
        <div style={themeStyles}>Context</div>
      </CardContent>
    </Card>
  )
}

export default Context
