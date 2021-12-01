import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import Button from "@restart/ui/esm/Button";
import { useNavigate } from "react-router-dom";

export default function MyNav(props) {
  const navigate = useNavigate();
  function click() {
    props.setName("");
    navigate("/");
  }
  return (
    <div>



      <Navbar id="nafbar">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-start">
            <Button id="btnLogOut" onClick={click}>
              Log out
            </Button>
            &nbsp;
            <Navbar.Text>
              <p>{props.name}</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}
