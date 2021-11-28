import React, { useEffect ,useState } from 'react'
import {Card, Container,Button} from 'react-bootstrap';



import axios from "axios"
const Canceled=() => {
const [data, setData] = useState([]);
useEffect(()=> {
axios
.get("http://localhost:5000/cancelledTest/")
.then((resp)=>{
    console.log(resp.data)
    setData(resp.data);

})
.catch((err)=>{
    console.log(err);

});
}, []);
    return (<div>
            {data.map((elem,i)=> {
                return(
                    <Container>
                    <Card>
                    
                    <Card.Body id="card1">
                      <Card.Title>Name: {elem.name}</Card.Title>
                      <Card.Text>
                      center Office Location: {elem.centerOfficeLocation}
                      </Card.Text>
                      <Card.Text>
                      Date: {elem.Date}
                      </Card.Text>
                      <Card.Text>
                      CancellationTime: {elem. CancellationTime}
                      </Card.Text>
                      <Card.Text>
                      testTypeMechanism: {elem.testTypeMechanism}
                      </Card.Text>
                      <Card.Text>
                      cancellationRreason: {elem.cancellationRreason}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </Container>
                )
                 })}
                 </div>
            )
          }
       export default Canceled