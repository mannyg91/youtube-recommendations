const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()



app.use(cors())
app.use(express.json())


const connectDB = async () => {
  try {
    //mongodb uri here
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (err) {
    console.error(err);
  }
}

connectDB();



app.use('/api/blockedChannels', require('./routes/blockedChannelRoutes'))
app.use('/api/user', require('./routes/userRoutes'))


app.get('/', (req, res) => {
  res.send('Express server is active')
})


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')

  app.listen(port, () => {
    console.log(`server started on port ${port}`)
  })
})
