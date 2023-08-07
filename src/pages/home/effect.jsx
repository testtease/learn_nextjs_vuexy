import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTheme } from './themeContext'

const Effect = () => {
  const date = new Date()
  const showDate = date.getDate()
  const showMonth = date.getMonth() + 1
  const showYear = date.getFullYear()
  const getSecond = (date.getSeconds() + 100).toString().substr(1)
  const getMinute = (date.getMinutes() + 100).toString().substr(1)
  const getHour = (date.getHours() + 100).toString().substr(1)
  const getCurrentTime = getHour + ':' + getMinute + ':' + getSecond
  const darkTheme = useTheme()
  const cardTitle = `Test useEffect dengan menggunakan waktu dan sekarang ${darkTheme ? 'Dark' : 'Light'}`

  const [currentTime, setCurrentTime] = useState(getCurrentTime)

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(getCurrentTime)
    }, 1000)
  })

  return (
    <Card>
      <CardHeader title={cardTitle}></CardHeader>
      <CardContent>
        <Typography>
          {showDate}-{showMonth}-{showYear}
        </Typography>
        {currentTime}
      </CardContent>
    </Card>
  )
}

export default Effect
