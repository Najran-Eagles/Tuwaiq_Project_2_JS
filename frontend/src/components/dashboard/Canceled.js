import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";

import axios from "axios";
const Canceled = () => {
  const [data, setData] = useState([]);
  const [nationalId, setNationalId]= useState();
  useEffect(() => {
    setNationalId(sessionStorage.nationalId);
    console.log('inside canceled test');
    
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
                    centerOfficeLocation: {elem.centerOfficeLocation}
                    </Card.Text>
                    <Card.Text> Date: {elem.Date}</Card.Text>
                    <Card.Text>
                    CancellationTime: {elem.CancellationTime}
                    </Card.Text>
                    <Card.Text>
                    testTypeMechanism: {elem.testTypeMechanism}
                    </Card.Text>
                    <Card.Text>
                    cancellationRreason: {elem.cancellationRreason}
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
export default Canceled;
