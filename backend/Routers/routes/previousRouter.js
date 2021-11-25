const express =require("express");
const previousTestsRouter = express.Router();

const  {getAllPreviousTests, getpreviousTests, addNewPreviousTests, updatePreviousTests } = require("../controllers/previous");
const {previousTests}= require('../dataBase/dbprevious')
previousTestsRouter.get("/", getAllPreviousTests);
previousTestsRouter.get('/previousTestsRouter/:id', getpreviousTests);
previousTestsRouter.post('/previousTestsRouter', addNewPreviousTests);
previousTestsRouter.put('/previousTestsRouter', updatePreviousTests );

module.exports ={previousTestsRouter};