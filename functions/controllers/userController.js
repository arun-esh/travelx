const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: `success`,
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getOneUser = (req, res) => {
  res.status(500).json({
    status: `error`,
    message: 'Get User: This Route is not yet defined',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: `error`,
    message: 'Create User: This Route is not yet defined',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: `error`,
    message: 'Update User: This Route is not yet defined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: `error`,
    message: 'Delete User: This Route is not yet defined',
  });
};
