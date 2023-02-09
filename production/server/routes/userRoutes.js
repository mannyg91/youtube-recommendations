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

function authenticateToken(req, res, next) {
	// must send token in authorization header
	const authHeader = req.headers['authorization'];
	
	// extracts token string from the header
	const token = authHeader && authHeader.split(' ')[1]; // typically formatted "bearer","<token>"

	// if there is no token, rejected, it may be that this is already handled client-side
	if (token == null) return res.sendStatus(401);

	// otherwise, checks token, then sends back the user object to the route method
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}





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
		console.log(err)
		res.json({ status: 'error', error: 'Email has already been registered.' })
	}
})


//doesn't need client-side encryption if using TLS? 
router.post('/login/', async (req, res) => {
	console.log("logging in")
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) {
		return res.json({ status: 'error', error: 'No user found' });
	}

	const isValid = await bcrypt.compare(password, user.password);
	if (!isValid) {
		return res.json({ status: 'error', error: 'Incorrect password' });
	}

	const token = jwt.sign({ id: user._id, username: user.username, email: user.email }, process.env.ACCESS_TOKEN_SECRET);
	return res.json({ status: 'ok', user: token });
});




router.get('/username/', authenticateToken, async (req, res) => {
	const userId = req.user.id;
	try {
		const user = await User.findOne({ _id: userId }).select('username');
		if (!user) {
			return res.status(404).send('User not found');
		}
		const username = user.username
		return res.json({ status: 'ok', username: username });
	} catch (error) {
		console.error(`Error retrieving username: ${error}`);
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



router.get('/savedVideos/', authenticateToken, async (req, res) => {
	const userId = req.user.id;
	try {
		const user = await User.findOne({ _id: userId }).select('savedVideos');
		if (!user) {
			return res.status(404).send('User not found');
		}
		const savedVideos = user.savedVideos
		console.log(savedVideos)
		return res.json({ status: 'ok', savedVideos: savedVideos });
	} catch (error) {
		console.error(`Error retrieving saved videos: ${error}`);
	}
})

router.post('/savedVideos/', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    const savedVideos = user.savedVideos;
    const duplicateVideo = savedVideos.find(video => video.videoId === req.body.video.id.videoId);
    if (!duplicateVideo) {
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { savedVideos: { videoId: req.body.video.id.videoId, video: req.body.video } } }
      );
      console.log(`Successfully added saved video: ${updatedUser}`);
    } else {
      console.log(`Video with videoId ${req.body.video.id.videoId} already exists`);
    }
  } catch (error) {
    console.error(`Error saving video: ${error}`);
  }
});











module.exports = router
