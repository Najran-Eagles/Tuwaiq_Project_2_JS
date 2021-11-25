const{avialableTestForRegistration} =require("../dataBase/dbavailable");

const getAllAvialableTestForRegistration =(req,res)=>{
    res.send(avialableTestForRegistration);
};

const getAvialableTestForRegistration =(req,res)=>{


    const foundavialableTestForRegistration = avialableTestForRegistration.filter((elem, i)=>{
        return i == req.params.id
    })
    if(foundavialableTestForRegistration.length > 0){
        res.send(foundavialableTestForRegistration[0])
        return
    }
    res.status(404).send("AvialableTestForRegistration not found")
}

const addNewAvialableTestForRegistration = (req,res)=>{
    const addedAvialableTestForRegistration ={

    name:req.body.name,
    appointmentStatus:req.body. appointmentStatus,
    testLanguage:req.body.testLanguage,
    testTypeMechanism:req.body.testTypeMechanism,


}
AvialableTestForRegistration.push(addeAvialableTestForRegistration)

res.status(201).send(addedAvialableTestForRegistration);

}
const updateAvialableTestForRegistration =(req,res)=>{

    const AvialableTestForRegistration = req.query.id
    AvialableTestForRegistration.forEach((elem,i)=>{
        if(i == AvialableTestForRegistration){
            elem.name =req.body.name;
            elem.appointmentStatus = req.body.appointmentStatus;
            elem.testLanguage = req.body.testLanguage
            elem.testTypeMechanism = req.body.testTypeMechanism
            res.send(elem);
        }
    })
}
module.exports ={getAllAvialableTestForRegistration, getAvialableTestForRegistration, addNewAvialableTestForRegistration, updateAvialableTestForRegistration}
