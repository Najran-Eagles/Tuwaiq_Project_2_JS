import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";

import axios from "axios";
const PreviousTests = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('Inside Previous Tests');
    axios
      .get("http://localhost:5000/previousTests")
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
          <Container>
            <Card>
              <Card.Body id="card2">
                <Card.Title>Name: {elem.name}</Card.Title>
                <Card.Text>centerOffice: {elem.centerOffice}</Card.Text>
                <Card.Text>attendanceStatus: {elem.attendanceStatus}</Card.Text>
                <Card.Text>
                  appointmentStatus: {elem.appointmentStatus}
                </Card.Text>
                <Card.Text>testDate: {elem.testDate}</Card.Text>
                <Card.Text>paymentMethod: {elem.paymentMethod}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </div>
  );
};
export default PreviousTests;
