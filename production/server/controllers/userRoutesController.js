

//GET
const getUser = (req, res) => {
  res.status(200).json({
    message: 'Get user'
  })
}

//POST
const setUser = (req, res) => {
  console.log(req.body)
  res.status(200).json({
    message: 'Registering user'
  })
}

const updateUser = (req, res) => {
  res.status(200).json({
    message: `Update user ${req.params.username}`
  })
}

const deleteUser = (req, res) => {
  res.status(200).json({
    message: `Delete user ${req.params.username}`
  })
}


module.exports = {
  getUser, setUser, updateUser, deleteUser
}