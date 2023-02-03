const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()



app.use(cors())
app.use(express.json())

//mongodb URL here
mongoose.connect(process.env.DATABASE_URI)

app.use('/api/blockedChannels', require('./routes/blockedChannelRoutes'))
app.use('/api/user', require('./routes/userRoutes'))



app.listen(port, () => {
  console.log(`server started on port ${port}`)
})