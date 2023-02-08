const express = require('express');
const User = require('../models/user.model');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');




// router.get('/', async (req, res) => {
//   res.status(200).json({
//     message: 'Get user'
//   })
// })


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


//doesn't need client-side encryption if using TLS
router.post('/login/', async (req, res) => {
	console.log("logging in")
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) {
		console.log("no user")
		return res.json({ status: 'error', error: 'No user found' });
	}

	const isValid = await bcrypt.compare(password, user.password);
	if (!isValid) {
		console.log("not valid")
		return res.json({ status: 'error', error: 'Incorrect password' });
	}

	console.log("1")
	const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, process.env.ACCESS_TOKEN_SECRET);
	console.log("valid")
	console.log(token)
	return res.json({ status: 'ok', user: token });
});



router.get('/username/', async (req, res) => {
  res.status(200).json({
    message: 'Get user'
  })
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


router.post('/savedVideos/', async (req, res) => {
	console.log(req.body)
	try {
		const user = await User.findOne({ _id: req.body.id });
		if (!user) {
			return res.status(404).send('User not found');
		}
		res.send(user.savedVideos);
	} catch (error) {
		console.error(`Error retrieving saved videos: ${error}`);
	}
})




function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1]; // typically formatted "bearer","<token>"
	console.log(token)
	if (token == null) return res.sendStatus(401);

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}





module.exports = router
