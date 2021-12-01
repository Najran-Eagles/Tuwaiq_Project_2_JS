const { users } = require("../dataBase/dbUsers");

const getAllUser = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  console.log(typeof users);
  const foundUser = users.filter((elem, i) => {
    return i == req.params.id;
  });

  if (foundUser.length > 0) {
    res.send(foundUser[0]);
    return;
  }
  res.status(404).send("user not found");
};
const checkUserLogin = (req, res) => {
  console.log(req.body);
  const u = req.body.nationalId;
  const p = req.body.password;

  const result = users.find(
    ({ nationalId, password }) => nationalId === u && password === p
  );
  console.log(result);

  if (result) res.send(result);
  else res.send("Invalid National id or password");
};
const addNewUser = (req, res) => {
  const addedUser = {
    password: req.body.password,
    nationalId: req.body.nationalId,
  };
  console.log(req.body);

  users.push(addedUser);
  console.log(addedUser);
  res.status(201).send(addedUser);
};

const updateUser = (req, res) => {
  const userId = req.query.id;
  users.forEach((elem, i) => {
    if (i == userId) {
      elem.name = req.body.name;
      elem.password = req.body.password;
      elem.isAdmin = req.body.isAdmin;
    }
  });
};

module.exports = {
  getAllUser,
  getUser,
  updateUser,
  addNewUser,
  checkUserLogin,
};
