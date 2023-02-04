const express = require('express');
const User = require('../models/user.model');
const router = express.Router();
const jwt = require('jsonwebtoken');



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
    console.log(err)
    res.json({ status: 'error', error: 'duplicate data' })
  }
})







router.post('/login/', async (req, res) => {

  console.log('login in express reached')

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  })


  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
      }, 'gLcAdi3ubu3awruQ9th'
    )


  // if (!user) {
  //   return { status: 'error', error: 'Invalid login' }
  // } else {
  //   return { message: 'user found' }
  // }

    return res.json({status: 'ok', user: token})
  } else {
    return res.json({status: 'error', user: false})
  }
  
  console.log("trying to log in")
  // const isPasswordValid = await bcrypt.compare(
  //   req.body.password,
  //   user.password
  // )

  // if (isPasswordValid) {
  //   const token = jwt.sign(
  //     {
  //       name: user.name,
  //       email: user.email,
  //     },
  //     'secret123'
  //   )

  //   return res.json({ status: 'ok', user: token })
  // } else {
  //   return res.json({ status: 'error', user: false })
  // }
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


module.exports = router
