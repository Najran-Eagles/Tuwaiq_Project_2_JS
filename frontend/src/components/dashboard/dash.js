import React from 'react'
import {Container, Nav,NavDropdown, Dropdown, Navbar , Button,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import Available from './available';
import Previous from './previous';
import Canceled from './Canceled';
// import { useSelect } from 'react-select-search';





export default function dash() {
	
	return (
		<div>
			<Container >
<Nav id="navbar11">
      <Nav.Item >
        <Nav.Link  eventKey="1" href="#/home">
         home page
        </Nav.Link>
      </Nav.Item>
	  
      <NavDropdown  title="Dropdown"style={{Color:"black",textDecorationLine:"none", }} id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" ></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3"></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  style={{color:"black"}}eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
	</Container>
	<Container>
	<Nav  id="nav3"   variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Nav.Link href="">Registered Tests</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="">Available tests for registration</Nav.Link>
    <Available />
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="">Previous Tests</Nav.Link>
    <Previous />
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="">Cancelled Tests</Nav.Link>
    <Canceled />
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="">Result</Nav.Link>
  </Nav.Item>
  
</Nav>

	</Container>





<Container>


<Navbar bg="light" expand="lg">
  <Container fluid>
   
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <Nav.Link href="#" disabled>
        Test Type

        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>







</Container>


  
  		
		</div>
	)
}
