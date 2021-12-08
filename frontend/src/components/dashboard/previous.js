import React, { useEffect, useState, } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";

import axios from "axios";
const PreviousTests = () => {
  
  const [data, setData] = useState([]);
  const[nationalId, setNationalId] = useState();
  useEffect(() => {
  setNationalId(sessionStorage.nationalId);

    console.log('Inside Previous Tests');
    axios
     
      .get(`http://localhost:5000/previousTests/${nationalId}`)
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nationalId]);
  return (
    <Container>
    <div>
      {data.map((elem, i) => {
        return (
          <Container fluid="md" id="availableCard">
            <Row>
              <Col>
                <Card>
                  <Card.Header as="h5">{elem.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                    <b>Center Office:</b> {elem.centerOffice}
                    </Card.Text>
                    <Card.Text>
                    <b>Attendance Status:</b> {elem.attendanceStatus}
                    </Card.Text>
                    <Card.Text>
                    <b>Appointment Status:</b> {elem.appointmentStatus}
                    </Card.Text>
                    <Card.Text>
                     <b>Test Date:</b>{elem.testDate}
                    </Card.Text>
                    <Card.Text>
                    <b>Payment Method:</b> {elem.paymentMethod}
                    </Card.Text> 
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
    </Container>
  );
};
export default PreviousTests;
