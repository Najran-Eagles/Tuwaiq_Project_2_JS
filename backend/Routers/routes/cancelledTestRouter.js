const express =require("express");
const CancelledTestRouter = express.Router();

const  {getAllCancelledTest, getCancelledTest, addNewCancelledTest, updatecancelledTest } = require("../controllers/cancelledTest");
const {cancelledTest}= require('../dataBase/dbCanceledTest')
CancelledTestRouter.get("/", getAllCancelledTest);
CancelledTestRouter.get('/CancelledTest/:id', getCancelledTest);
CancelledTestRouter.post('/CancelledTest', addNewCancelledTest);
CancelledTestRouter.put('/CancelledTest', updatecancelledTest );

module.exports ={CancelledTestRouter};