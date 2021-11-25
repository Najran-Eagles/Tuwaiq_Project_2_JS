import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

//import {Link} from"react-router-dom";
import "./signInUp.css";
function SignUp() {
  const [nationalId, setNationalId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  function handleSubmit(event) {
    //  console.log(firstName, lastName, age, email, bloodGroup);

    //Check if age < 18 then show message that must have age above 18
    event.preventDefault();

    axios
      .post("http://localhost:5000/users", {
        nationalId: nationalId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Container>
    <div style={{ textAlign: "center", marginLeft: "45%", width: "200px" }}>
      <Form
        dir-align="center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicNationalId">
          <Form.Label>National ID *</Form.Label>
          <input
            nationalId="nationalId"
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumberPhone">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            placeholder="Enter date of birth"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    </Container>
  );
}
export default SignUp;
