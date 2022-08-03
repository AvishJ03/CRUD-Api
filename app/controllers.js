exports.createUser = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
};

exports.getAllUsers = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
};

exports.getUserById = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  console.log(req.params.id);
};

exports.updateUser = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  console.log(req.params.id);
};

exports.deleteUser = async (req, res) => {
  console.log(req.body);
  console.log(req.params);
  console.log(req.query);
  console.log(req.params.id);
};
