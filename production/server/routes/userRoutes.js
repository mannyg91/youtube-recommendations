const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Get user'
  })
})



router.post('/register/', async (req, res) => {
  console.log(req.body)

  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
    res.send(user)
  } catch (err) {
    res.json({ status: 'error', error: 'duplicate data'})
  }

  res.status(200).json({
    message: 'Registering user'
  })
})


router.post('/login/', async (req, res) => {
    const user = await User.findOne({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })

    if (user) {
      return res.json({ status: 'ok', user: true})
    } else {
      return res.json({ status: 'error', user: false})
    }

})








router.put('/:username', async (req, res) => {
  res.status(200).json({
    message: `Update user ${req.params.username}`
  })
})



router.delete('/:username', async (req, res) => {
  res.status(200).json({
    message: `Delete user ${req.params.username}`
  })
})


module.exports =  router
