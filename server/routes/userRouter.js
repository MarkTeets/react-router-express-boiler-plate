const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();


const data = {
  message: 'I\'m the one you want',
}

userRouter.get('/', (req, res) => {
  console.log(data)
  res.status(200).json(data)
});

// userRouter.get('/database-data',
//   (req, res) => {
//   console.log(data)
//   res.status(200).json(data)
// });

module.exports = userRouter;