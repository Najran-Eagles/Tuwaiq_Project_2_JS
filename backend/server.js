const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routers/routes/userRouter');
const {avialableTestForRegistrationRouter} = require("./routers/routes/availableRouter");
const {CancelledTestRouter} = require('./routers/routes/cancelledTestRouter');
const {previousTestsRouter} =  require('./routers/routes/previousRouter');
const {ResultRouter} =  require('./routers/routes/resultRouter');
const app = express();
app.use(express.json());

//routers

//built-in middlewares

//third-party middleware
app.use(cors());
//app routers


// app.use('/user',userRouter);
app.use('/users',userRouter)
app.use('/avialableTestForRegistration', avialableTestForRegistrationRouter );
app.use('/cancelledTest', CancelledTestRouter);
app.use('/previousTests', previousTestsRouter);
app.use('/result', ResultRouter);

app.use('/users',userRouter)
                      


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});




