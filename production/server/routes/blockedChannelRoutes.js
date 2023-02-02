const express = require('express');
const router = express.Router();
const { 
  getBlockedChannels,
  setBlockedChannels,
  updateBlockedChannels,
  deleteBlockedChannels
} = require('../controllers/blockedChannelController')

router.get('/', getBlockedChannels) 
router.post('/', setBlockedChannels) 
router.put('/:id', updateBlockedChannels)
router.delete('/:id', deleteBlockedChannels)

module.exports =  router