const express = require('express');
const router = express.Router();
const { 
  getUser,
  setUser,
  updateUser,
  deleteUser
} = require('../controllers/userRoutesController')

router.get('/', getUser) 
router.post('/register/', setUser) 
router.put('/:username', updateUser)
router.delete('/:username', deleteUser)

module.exports =  router