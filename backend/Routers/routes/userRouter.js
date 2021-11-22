const express = require("express");

const userRouter = express.Router();

const {getUser,getAllUser,updateUser,addNewUser} = require("../controllers/user");
const { users } = require("../dataBase/dbUsers");

userRouter.get('/',getAllUser);
userRouter.get('/:id',getUser);
userRouter.post('/register',addNewUser);
userRouter.put('/user',updateUser);

module.exports={userRouter};