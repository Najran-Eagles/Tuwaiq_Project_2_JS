import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import "./dashboard.css";

import axios from "axios";
const Available = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/avialableTestForRegistration/")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {data.map((elem, i) => {
        return (
          
          <Container fluid="md" id="availableCard">
            <Row>
              <Col>
                <Card style={{height: "250px", margin: "20px 0px 20px 0px", width: "400px"}}>
                  <Card.Header as="h5" >{elem.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                     <b> Appointment Status:</b> {elem.appointmentstatus}
                    </Card.Text>
                    <Card.Text><b>Test Language:</b> {elem.testlanguage}</Card.Text>
                    <Card.Text>
                     <b> Test type mechanism:</b> {elem.testtypemechanism}
                    </Card.Text>
                    <Button id="AvaCdBtn" variant="primary" disabled>Registration</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};
export default Available;
