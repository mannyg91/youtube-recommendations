const express = require('express');
const User = require('../models/user.model');
const Stats = require('../models/stats.model')
const updateStats = require('../updateStats')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { sendPasswordResetEmail }= require('../email.js');



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

function generatePasswordResetToken(email) {

	const expiryTime = new Date();
	expiryTime.setHours(expiryTime.getHours() + 1);

	const payload ={
		email: email,
		type: 'password-reset'
	};

	const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: expiryTime.getTime() });
	return token;

	}

function updatePasswordResetToken(email, passwordResetToken, passwordResetTokenExpiration) {
	User.findOneAndUpdate(
		{ email: email },
		{ passwordResetToken: passwordResetToken, passwordResetTokenExpiration: passwordResetTokenExpiration },
		{ new: true }
	)
	.then((user) => {
		console.log('User updated with password reset token:', user);
	})
	.catch(err => {
		console.error('Error updating user with password reset token:', err);
	});
	}




router.post('/signup', async (req, res) => {
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
router.post('/login', async (req, res) => {
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



router.post('/forgot-password', async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({email: email});
	if (!user) {
		return res.json({ status: 'error', error: 'No user found' });
	}

	const token = generatePasswordResetToken(email);
	updatePasswordResetToken(email, token, Date.now() + 3600000);

	console.log(email, token)
	sendPasswordResetEmail(email, token);

	res.status(200).send('Password reset email sent.');
})


router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Verify that the password reset token is valid and has not expired
    const user = await User.findOne({ passwordResetToken: token, passwordResetTokenExpiration: { $gt: Date.now() } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired password reset token' });
    }

    // Validate that the new password meets certain criteria (e.g. minimum length, special characters, etc.)
    if (!newPassword || newPassword.length < 8) {
      return res.status(400).json({ message: 'New password must be at least 8 characters long' });
    }

    // Hash the new password and save it to the user's document
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.passwordResetToken = null;
    user.passwordResetTokenExpiration = null;
    await user.save();

    return res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(`Error resetting password: ${error}`);
    return res.status(500).json({ message: 'Internal server error' });
  }
});



// SAVED VIDEOS ROUTES
router.get('/savedVideos/', authenticateToken, async (req, res) => {
	const userId = req.user.id;
	try {
		const user = await User.findOne({ _id: userId }).select('savedVideos');
		if (!user) {
			return res.status(404).send('User not found');
		}
		const savedVideos = user.savedVideos
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
		
		// if no duplicate video
    if (!duplicateVideo) {
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { savedVideos: { videoId: req.body.video.id.videoId, video: req.body.video } } }
      );
      console.log(`Successfully added saved video: ${updatedUser}`);
    } else { // if duplicate video
      console.log(`Video with videoId ${req.body.video.id.videoId} already exists`);
    }
  } catch (error) {
    console.error(`Error saving video: ${error}`);
  }
});


router.delete('/savedVideos/:videoId', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const videoId = req.params.videoId;
  try {
    const updatedUser = await User.updateOne(
      { _id: userId },
      { $pull: { savedVideos: { videoId: videoId } } }
    );
    console.log(`Successfully removed saved video: ${updatedUser}`);
  } catch (error) {
    console.error(`Error deleting video: ${error}`);
  }
});


// Keyword Ratings Routes

router.get('/keywordRatings/', authenticateToken, async (req, res) => {
	const userId = req.user.id;
	// will return whole list of keyword ratings
	//will want to pull whole list on page load. pull again after new ratings are added
	try {
		const user = await User.findOne({ _id: userId }).select('keywordRatings');
		if (!user) {
			return res.status(404).send('User not found');
		}
		const keywordRatings = user.keywordRatings
		return res.json({ status: 'ok', keywordRatings: keywordRatings });
	} catch (error) {
		console.error(`Error retrieving keyword ratings: ${error}`);
	}
})

router.post('/keywordRatings/', authenticateToken, async (req, res) => {
	console.log("256", req.body)
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    const keywordRatings = user.keywordRatings; // the collection
    const duplicateKeywordRating = keywordRatings.find(keywordRating => keywordRating.keywordRatingId === req.body.keywordRatingId);
    
		// if no duplicate keyword rating
		if (!duplicateKeywordRating) {
      const updatedKeywordRating = await User.updateOne(
        { _id: userId },
        { $push: { keywordRatings: { 
						keywordRatingId: req.body.keywordRating.keywordRatingId, 
						keywordRating: req.body.keywordRating
					} } }
      );
      console.log(`Successfully added keyword rating: ${updatedKeywordRating}`);
    } else {
			//should update existing keyword rating in the future
      console.log(`Keyword rating ${req.body.keywordRating.keywordRatingId} already exists`);
    }
  } catch (error) {
    console.error(`Something went wrong with keywordRating: ${error}`);
  }
});

router.get('/stats', async (req, res) => {
  try {
    const keywordRatingIds = await User.distinct('keywordRatings.keywordRatingId')
		console.log("userRoutes, keywordRatingIds, 279", keywordRatingIds) // valid, has all the proper keywordRatingIds
    const stats = []
    for (const keywordRatingId of keywordRatingIds) {
			console.log("keywordRatingId", keywordRatingId) // "/m/041xxh.facial serum"
      const result = await updateStats(keywordRatingId) // fails
			console.log("userRoutes, result, 283", result) // never gets here
      stats.push(result)
    }
		console.log("userRoutes, stats, 290", stats)
    res.json(stats)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  }
})








module.exports = router
