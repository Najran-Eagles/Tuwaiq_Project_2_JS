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
    <div>
      {data.map((elem, i) => {
        return (
          <Container fluid="md" id="availableCard">
            <Row>
              <Col>
                <Card>
                  <Card.Header as="h5">Name: {elem.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                    centerOffice: {elem.centerOffice}
                    </Card.Text>

                    <Card.Text>
                    attendanceStatus: {elem.attendanceStatus}
                    </Card.Text>
                    <Card.Text>
                    appointmentStatus: {elem.appointmentStatus}
                    </Card.Text>
                    <Card.Text>
                    testDate: {elem.testDate}
                    </Card.Text>
                    <Card.Text>
                    paymentMethod: {elem.paymentMethod}
                    </Card.Text> 
                    <Button variant="primary">More details</Button>
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
export default PreviousTests;
