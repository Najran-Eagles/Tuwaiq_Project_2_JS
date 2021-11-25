const{previousTests} =require("../dataBase/dbprevious");

const getAllPreviousTests =(req,res)=>{
    // console.log('All Previous tests');
    res.send(previousTests);
};

const getpreviousTests =(req,res)=>{


    const foundpreviousTests = previousTests.filter((elem, i)=>{
        return i == req.params.id
    })
    if(foundpreviousTests.length > 0){
        res.send(foundpreviousTests[0])
        return
    }
    res.status(404).send("PreviousTests not found")
}

const addNewPreviousTests = (req,res)=>{
    const addedPreviousTests ={

    name:req.body.name,
    centerOffice:req.body. centerOffice,
    attendanceStatus:req.body.attendanceStatus,
    appointmentStatus:req.body.appointmentStatus,
    testDate:req.body.testDate,
    paymentMethod:req.body.paymentMethod,


}
PreviousTests.push(addePreviousTests)

res.status(201).send(addePreviousTests);

}
const updatePreviousTests =(req,res)=>{

    const PreviousTests = req.query.id
    PreviousTests.forEach((elem,i)=>{
        if(i == PreviousTests){
            elem.name =req.body.name;
            elem.centerOffice = req.body.centerOffice;
            elem. attendanceStatus = req.body. attendanceStatus;
            elem.appointmentStatus = req.body.appointmentStatus;
            elem.testDate = req.body.testDate;
            elem.paymentMethod = req.body.paymentMethod;
            res.send(elem);
        }
    })
}
module.exports ={getAllPreviousTests, getpreviousTests, addNewPreviousTests, updatePreviousTests}
