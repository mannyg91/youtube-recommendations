const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Get blocked channel'
  })
})

router.post('/', async (req, res) => {
  res.status(200).json({
    message: 'Set blocked channel'
  })
})

router.put('/:id', async (req, res) => {
  res.status(200).json({
    message: `Update blocked channel ${req.params.id}`
  })
})

router.delete('/:id', async (req, res) => {
  res.status(200).json({
    message: `Delete blocked channel ${req.params.id}`
  })
})



module.exports =  router


