const express = require('express');
const User = require('../models/user.model');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


router.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Get user'
  })
})


router.post('/signup/', async (req, res) => {
  console.log(req.body)

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

		await User.create({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Email has already been registered.' })
	}
})

    


router.post('/login/', async (req, res) => {

  console.log('login in express reached')

	const user = await User.findOne({
		email: req.body.email,
	})

	console.log(req.body)

  if (!user) {
		return { status: 'error', error: 'No user found' }
	}

  const isValid = await bcrypt.compare(
		req.body.password,
    user.password
	)

	console.log(isValid)

	if (isValid) {
		const token = jwt.sign(
			{
				id: user._id,
				username: user.username,
				email: user.email,
			}, 'gLcAdi3ubu3awruQ9th'
    )

    return res.json({status: 'ok', user: token})
  } else {
    return res.json({status: 'error', user: false})
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





router.post('/savedVideos/', async (req, res) => {
	console.log(req.body)
	try {
		const updatedUser = await User.updateOne(
			{ _id: req.body.id },
			{ $push: { savedVideos: req.body.video } }
		);
		console.log(`Successfully added saved video: ${updatedUser}`);
	} catch (error) {
		console.error(`Error saving video: ${error}`);
	}
})







module.exports = router
