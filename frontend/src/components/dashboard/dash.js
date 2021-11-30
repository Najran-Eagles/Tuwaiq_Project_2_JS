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
        <Nav variant="pills" activeKey="1">
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              NavLink 1 content
            </Nav.Link>
          </Nav.Item>

          <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <MyNav></MyNav>
      </Container>
    </div>
  );
}
// render(<Dash />);
