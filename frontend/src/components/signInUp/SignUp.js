import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { BsCaretRightSquare } from "react-icons/bs";
import "./signInUp.css";
function SignUp() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");

  function click() {
    window.location = "/";
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/users", {
        nationalId: nationalId,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
<<<<<<< HEAD
     <Container>
    <Row>
      <Col className="col-4">
        <Card id="signInCard">
          <Card.Header as="h6">Sign Up With A Qiyas Account</Card.Header>
          <Card.Body>
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Label>
                <b>National ID *</b>
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <FaUser />
                </InputGroup.Text>
                <FormControl
                  placeholder="National ID"
                  autoFocus
                  type="text"
                  onChange={(e) => setNationalId(e.target.value)}
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
                  autoFocus
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </Form>
          </Card.Body>
          <Card.Header>
            <Col>
              <Button id="regBtn"variant="primary" type="warning">
                Rigster Now!
              </Button>
              <Link to="/">
                <Button id="btn2" variant="warning">
                  Sign in here
                </Button>{" "}
              </Link>
            </Col>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  </Container>
=======
    <Container>
      <Row>
        <Col className="col-4">
          <Card id="signInCard">
            <Card.Header as="h6">Sign Up With A Qiyas Account</Card.Header>
            <Card.Body>
              <Form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <Form.Label>
                  <b>National ID *</b>
                </Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaUser />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="National ID"
                    autoFocus
                    type="text"
                    onChange={(e) => setNationalId(e.target.value)}
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
                    autoFocus
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </Form>
            </Card.Body>
            <Card.Header>
              <Col>
                <Button id="regBtn"variant="primary" type="warning">
                  Rigster Now!
                </Button>
                <Link to="/">
                  <Button id="btn2" variant="warning">
                    Sign in here
                  </Button>{" "}
                </Link>
              </Col>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </Container>
>>>>>>> 5da28199adcba6610b7ef036cd68cd839923ee08
  );
}

export default SignUp;
