const express =require("express");
const ResultRouter = express.Router();

const  {getAllResult, getResult, addNewResult, updateResult } = require("../controllers/result");
const {result}= require('../dataBase/dbresult')
 ResultRouter.get("/",getAllResult);
 ResultRouter.get('/:id',getResult);
 ResultRouter.post('/', addNewResult);
 ResultRouter.put('/:id', updateResult );

module.exports ={ResultRouter};