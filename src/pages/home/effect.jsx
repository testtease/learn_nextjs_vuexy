import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Effect = () => {
  const date = new Date()
  const showDate = date.getDate()
  const showMonth = date.getMonth() + 1
  const showYear = date.getFullYear()
  const getCurrentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

  const [currentTime, setCurrentTime] = useState(getCurrentTime)

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(getCurrentTime)
    }, 1000)
  })

  return (
    <Card>
      <CardHeader title='Test useEffect dengan menggunakan waktu'></CardHeader>
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
