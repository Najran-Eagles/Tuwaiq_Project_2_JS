import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Outlet } from "react-router-dom";
import SignIn from "../signInUp/signIn";

export default function head() {
  return (
    <div>
      <Container>
        <Row>
          <Col id="head">
            <p>Announcement</p>
            <p>
              In accordance with the approved health precautions, you must wear
              a mask and download the “Tawakkalna” application when you come to
              the test headquarters.
            </p>
            <p id="pra">
              The health situation in the Tawakkalna application must also be
              immunized with the fullest doses of the Corona vaccine (Covid-19).
            </p>
          </Col>
        </Row>
      </Container>
	  <SignIn />
    </div>
  );
}
