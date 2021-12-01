import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';
import Button from '@restart/ui/esm/Button';
import {useNavigate} from 'react-router-dom'


export default function MyNav(props) {
  const navigate = useNavigate();
  function click(){
    //window.location='/'
    props.setName('')
    navigate('/');
  }
  return (
    <div>

{/* <Nav id="nafbar">
  <Nav.Item>
    <Button onClick={click}>Log out</Button>
    <Nav.Item>

    </Nav.Item>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as:     <p>{props.name}</p>

      </Navbar.Text>
    </Navbar.Collapse>
  </Nav.Item>

</Nav> */}

<Navbar id="nafbar">
  <Container>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-start"> 
    <Button id="btnLogOut" onClick={click}>Log out</Button>
    {/* <Button onClick={click} variant="light" size="lg" >
    Log out
  </Button>{' '} */}
    &nbsp;

      <Navbar.Text>
         <p>{props.name}</p>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
	
      
    </div>
  )
}






















