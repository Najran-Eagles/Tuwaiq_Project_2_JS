import React, { useEffect, useState } from "react";

export default function Result()
{
  const[nationalId, setNationalId] = useState();

  console.log('Session NationalId: '+sessionStorage.nationalId);
  useEffect(() => {
    setNationalId(sessionStorage.nationalId);
  
      console.log('Inside Results');
    //   axios
    //     // .get(`http://localhost:5000/previousTests/${props.nationalId}`)
    //     .get(`http://localhost:5000/previousTests/${nationalId}`)
    //     .then((resp) => {
    //       console.log(resp.data);
    //       setData(resp.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
     }, [nationalId]);
    return (
        <div> 
            <h1>Results for this user!</h1>            
        </div>
    )
}