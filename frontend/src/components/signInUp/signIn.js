import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './signInUp.css';
// import { Container } from "react-bootstrap";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";



export default function SignIn(props) {

  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState("none");
  const navigate = useNavigate();
  function validateForm() {
    return nationalId && password;
  }

  function handleSubmit(event) {
    event.preventDefault();
  axios
  .post('http://localhost:5000/users/login',
 {
  nationalId: nationalId,
   password: password,
 }).then(res =>{
    console.log(res.data)
    if(res.data && res.data != "Invalid National id or password"){
      console.log('NationalId:', res.data.nationalId);
      sessionStorage.setItem('nationalId', res.data.nationalId);
      props.setName('Signed in as: '+res.data.nationalId);
      navigate('/dash' ); //{ state: { nationalId: res.data.nationalId}});

    }else{
      setDisplay();
    }
    
    // if(res.data === 'User not found');
    // swal('Incorrect user name or password');
}).catch(err => {
console.log(err); 
//  swal('not correct') 
});

   }
  return (
    <div className="signIn">
      <Container>
        <Row>
          <Col id="card">
            <Form onSubmit= {handleSubmit}>
              <Card.Header id="signinList">
                Login With A Qiyas Account
              </Card.Header>
              <Alert variant="danger" style={{display: display}}>User not found!</Alert>
              <Form.Group size="lg" controlId="text">
                <Form.Label>National ID*</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  value={nationalId}
                  onChange={(e) => {setNationalId(e.target.value)}}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="password">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </Form.Group>
              <Button id="btn" block type="submit" disabled={!validateForm()}>
                Login
              </Button>
              <br />
              <Button variant="link">You Don't Have Qiyas Account ?</Button>
              <Link to="/signUp">
                <Button id="btn2" variant="warning">
                  Rigster
                </Button>{" "}
              </Link>
            </Form>
          </Col>
          <Col id="card1">
            <Card id="box">
              <Card.Header id="cardList1">Demo Show</Card.Header>
              <Card.Body>
                <Card.Title id="cardList2">
                  Learn more about how to open a new account, sign up for a
                  paper or paper computerized test, and lots of other processes
                  to see by watching the demo.
                </Card.Title>
                <select id="list" name="list">
                  <option value="Register">Qiyas Exams Registration</option>
                  <option value="paperBased">
                    paper Based exams registration
                  </option>
                  <option value="computerBased">
                    computer based exam Registration
                  </option>
                  <option value="Payment">Payment fees</option>
                </select>
                <Link to="test/">
                  <Button id="btn3" variant="primary" active>
                    Play
                  </Button>{" "}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}





//      <Container>
  
//      <div className="signIn">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="nationalId">
//           <Form.Label id="h">National ID*</Form.Label>
//           <Form.Control
//             autoFocus
//             type="text"
//             value={nationalId}
//             onChange={(e) => setNationalId(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label id="h">Password*</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block id="btnLog" size="lg" type="submit"  disabled={!validateForm()}>
//           Login
//         </Button>
//         <Link to="/SignUp" >
//         <Button  block id="btnReg" size="lg" type="submit"   >
//           Register
//         </Button>
//         </Link>
//       </Form> 

//      </div>
//     </Container> 

//   );
// }