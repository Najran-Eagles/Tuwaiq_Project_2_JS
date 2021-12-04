import React, { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import {
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Navbar,
  Button,
  Form,
  FormControl,
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
              <Nav.Link eventKey="1" >
                <IoHome />
                Home page
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col>

            <NavDropdown title="E-Services" id="e-services">
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
