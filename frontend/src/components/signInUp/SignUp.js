import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="SignUp">
      <Container id="form">
        <Row>
          <Col id="cardList1">
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Card.Header id="headCard">
                Sign Up With A Qiyas Account
              </Card.Header>
              <br/>
              <Form.Group size="lg" controlId="text">
                <Form.Label>National ID* </Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  onChange={(e) => setNationalId(e.target.value)}
                />
              </Form.Group>
              <br/>
              <Form.Group size="lg" controlId="text">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                  autoFocus
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br/>
              <Button id="btn" type="submit" variant="warning">
                Register
              </Button>
              <Link to="/">
                <Button id="btn2" type="submit" variant="secondary" active>
                  Back to log in
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUp;
