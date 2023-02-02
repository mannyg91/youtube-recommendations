const getBlockedChannels = (req, res) => {
  res.status(200).json({
    message: 'Get blocked channel'
  })
}

const setBlockedChannels = (req, res) => {
  res.status(200).json({
    message: 'Set blocked channel'
  })
}

const updateBlockedChannels = (req, res) => {
  res.status(200).json({
    message: `Update blocked channel ${req.params.id}`
  })
}

const deleteBlockedChannels = (req, res) => {
  res.status(200).json({
    message: `Delete blocked channel ${req.params.id}`
  })
}


module.exports = {
  getBlockedChannels, setBlockedChannels, updateBlockedChannels, deleteBlockedChannels
}