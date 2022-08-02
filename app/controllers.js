const userSchema = require("./model");

exports.createUser = async (req, res) => {
  if (
    !req.body.email &&
    !req.body.firstName &&
    !req.body.lastName &&
    !req.body.phone &&
    !req.body._id
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const user = new userSchema({
    _id: req.body._id,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
  });

  await user
    .save()
    .then((data) => {
      res.send({
        message: "User created successfully!!",
        user: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.getAllUsers = async (req, res) => {
  try {
    const user = await userSchema.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  await userSchema
    .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (data === null) {
        res.status(500).send({
          message: "User not found",
        });
      } else {
        res.status(200).send({
          message: "User updated successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.deleteUser = async (req, res) => {
  await userSchema
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (data === null) {
        res.status(500).send({
          message: "User not found",
        });
      } else {
        res.status(200).send({
          message: "User deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
