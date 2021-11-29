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
      <Container>
        {/* <Header/> */}
        
      </Container>

      <Container>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#" disabled>
                  Test Type
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <MyNav></MyNav>
      </Container>
    </div>
  );
}
