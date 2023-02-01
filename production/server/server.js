const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.get('/api/blockedChannels', (req, res) => {
  res.send('Get blocked channel IDs')
})

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})