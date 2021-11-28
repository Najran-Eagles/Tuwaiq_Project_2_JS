const{result} =require("../dataBase/dbresult");

const getAllResult =(req,res)=>{
    // console.log('All Previous tests');
    res.send(result);
};

const getResult =(req,res)=>{
    console.log('result');
    console.log(req.params);
    const foundresult = result.filter(({nationalId})=>{
        return nationalId ==  req.params.id
    })
    console.log(foundresult);
    if(foundresult.length > 0){
        res.send(foundresult)
        return
    }
    res.status(404).send("result not found")
}

const addNewResult = (req,res)=>{
    const addedResult ={

    name:req.body.name,
    TestDate:req.body. TestDate,
    TotalScore :req.body.TotalScore ,
    


}
TotalScore .push(addeTotalScore )

res.status(201).send(addeTotalScore );

}
const updateResult  =(req,res)=>{

    const TotalScore  = req.query.id
    TotalScore .forEach((elem,i)=>{
        if(i == TotalScore ){
            elem.name =req.body.name;
            elem.TestDate = req.body.TestDate;
            elem.TotalScoreStatus = req.body.TotalScoreStatus;
            
            res.send(elem);
        }
    })
}
module.exports ={getAllResult, getResult, addNewResult, updateResult}
