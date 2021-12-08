import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaUser, FaLock,  } from "react-icons/fa";
import { BsCaretRightSquare } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signInUp.css";
//  import { Container } from "react-bootstrap";
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
      .post("http://localhost:5000/users/login", {
        nationalId: nationalId,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data && res.data != "Invalid National id or password") {
          console.log("NationalId:", res.data.nationalId);
          sessionStorage.setItem("nationalId", res.data.nationalId);
          props.setName("National ID: " + res.data.nationalId);
          navigate("/dash/available");
        } else {
          setDisplay();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return ( 
  <Container>
    <Row>
      <Col className="col-4">
        <Card id="signInCard">
          <Card.Header as="h6">Login With A Qiyas Account</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Alert variant="danger" style={{ display: display }}>
                User not found!
              </Alert>
              <Form.Label>
                <b>National ID *</b>
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FaUser />
                </InputGroup.Text>
                <FormControl
                  placeholder="National ID"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  autoFocus
                  type="text"
                  value={nationalId}
                  onChange={(e) => {
                    setNationalId(e.target.value);
                  }}
                />
              </InputGroup>
              <Form.Label>
                <b>Password *</b>
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FaLock />
                </InputGroup.Text>
                <FormControl
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </InputGroup>
              <Button variant="primary" type="submit" disabled={!validateForm()}>
                Login
              </Button>
            </Form>
          </Card.Body>
          <Card.Header>
          <Col>
          <Button variant="link">You Don't Have Qiyas Account ?</Button>
              <Link to="/signUp">
                <Button id="btn2" variant="warning">
                  Rigster Now!
                </Button>{" "}
              </Link>
              </Col>
              </Card.Header>
            </Card>
            </Col>
        <Col className="col-8">
          <Card id="demoCard">
            <Card.Header as="h6">Demo Show</Card.Header>
            <Card.Body>
              <Card.Text>
                Learn more about how to open a new account, sign up for a paper
                or paper computerized test, and lots of other processes to see
                by watching the demo.
              </Card.Text>
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
                  <BsCaretRightSquare/>
                  Play
                  </Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        </Col>
       </Row>
     </Container>
  );
}
