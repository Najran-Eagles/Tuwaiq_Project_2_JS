import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";

import axios from "axios";
const Canceled = () => {
  const [data, setData] = useState([]);
  const [nationalId, setNationalId] = useState();
  useEffect(() => {
    setNationalId(sessionStorage.nationalId);
    

    axios
      .get(`http://localhost:5000/CancelledTest/${nationalId}`)
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
                      <b>Center Office Location:</b> {elem.centerOfficeLocation}
                    </Card.Text>
                    <Card.Text>
                      {" "}
                      <b>Date:</b> {elem.Date}
                    </Card.Text>
                    <Card.Text>
                      <b>Cancellation Time:</b> {elem.CancellationTime}
                    </Card.Text>
                    <Card.Text>
                      <b> Test Type Mechanism:</b> {elem.testTypeMechanism}
                    </Card.Text>
                    <Card.Text>
                      <b>Cancellation Rreason:</b> {elem.cancellationRreason}
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
export default Canceled;
