import React, { useState, useEffect } from "react";
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
import Available from "./available";
import Previous from "./previous";
import Canceled from "./Canceled";
import Header from "../navigation/nav";
import { useNavigate, useLocation, Link, Outlet } from "react-router-dom";
// import { useSelect } from 'react-select-search';

export default function Dash() {
  const [nationalId, setNationalId] = useState("");
  console.log("inside dashboard");

  // const {state} = useLocation();
  // console.log(state.nationalId);
  // if(state)
  // setNationalId(state.nationalId);
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [state])
  return (
    <div>
      <Container id="nav1Contain">
        {/* <div
          variant="pills"
          activeKey="1"
          sx={{ display: "grid", gridTemplateColumns: "50% 50%" }}
        > */}
        <Row>
          <Col>
            <Nav.Item>
              <Nav.Link eventKey="1" href="#/home">
                Home page
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col>
            <NavDropdown title="E-Services" style={{ float: "right" }}>
              <NavDropdown.Item eventKey="4.1">Check Tests</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Our policy</NavDropdown.Item>
              {/* <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item eventKey="4.4">Complains</NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
        {/* </div> */}
      </Container>

      <MyNav></MyNav>
    </div>
  );
}
// render(<Dash />);
