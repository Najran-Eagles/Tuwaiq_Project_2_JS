const express = require("express");
const avialableTestForRegistrationRouter = express.Router();

const  {getAllAvialableTestForRegistration, getAvialableTestForRegistration, addNewAvialableTestForRegistration, updateAvialableTestForRegistration} = require("../controllers/avialableTestForRegistration");
const {avialableTestForRegistration} = require("../dataBase/dbavailable")

avialableTestForRegistrationRouter.get("/", getAllAvialableTestForRegistration);
avialableTestForRegistrationRouter.get('/avialableTestForRegistrationRouter/:id', getAvialableTestForRegistration);
avialableTestForRegistrationRouter.post('/avialableTestForRegistration', addNewAvialableTestForRegistration);
avialableTestForRegistrationRouter.put('/avialableTestForRegistration', updateAvialableTestForRegistration);

module.exports ={avialableTestForRegistrationRouter};