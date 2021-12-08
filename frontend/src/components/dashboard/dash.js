import React, { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import {
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";

import MyNav from "./nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

export default function Dash() {
  const [nationalId, setNationalId] = useState("");
 

  return (
    <div>
      <Container id="nav1Contain">
         

        <Row>
          <Col>
            <Nav.Item>
<<<<<<< HEAD
            <Nav.Link eventKey="1" >
                <IoHome />
                <b>Home page</b>
=======
              <Nav.Link eventKey="1" >
                <IoHome />
                Home page
>>>>>>> 5da28199adcba6610b7ef036cd68cd839923ee08
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col>
<<<<<<< HEAD
          <NavDropdown title="E-Services" id="e-services">
=======

            <NavDropdown title="E-Services" id="e-services">
>>>>>>> 5da28199adcba6610b7ef036cd68cd839923ee08
              <NavDropdown.Item eventKey="4.1">Check Tests</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Our policy</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.4">Complains</NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
      </Container>

      <MyNav></MyNav>
    </div>
  );
}
