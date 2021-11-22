import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
const Header = () => {
	return <div className="App">

<Container>
  <Row>
    <Col id="head">

	<p>Asousment</p>
     <p>In accordance with the approved health precautions, you must wear a mask and download the “Tawakkalna” application when you come to the test headquarters.</p>
	<p id="pra">The health situation in the Tawakkalna application must also be immunized with the fullest doses of the Corona vaccine (Covid-19).</p>
	</Col>
  </Row>
</Container>

	
	</div>;
};

export default Header;
