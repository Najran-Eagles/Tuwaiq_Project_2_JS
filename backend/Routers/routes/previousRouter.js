const express =require("express");
const previousTestsRouter = express.Router();

const  {getAllPreviousTests, getpreviousTests, addNewPreviousTests, updatePreviousTests } = require("../controllers/previous");
const {previousTests}= require('../dataBase/dbprevious')
previousTestsRouter.get("/", getAllPreviousTests);
previousTestsRouter.get('/:id', getpreviousTests);
previousTestsRouter.post('/', addNewPreviousTests);
previousTestsRouter.put('/:id', updatePreviousTests);

module.exports ={previousTestsRouter};