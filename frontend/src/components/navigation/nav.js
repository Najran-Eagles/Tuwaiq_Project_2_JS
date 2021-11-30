import React from 'react';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';
import Button from '@restart/ui/esm/Button';

function click(){
  window.location='/'
}
export default function nav() {
  return (
    <div>

<Nav id="nafbar">
  <Nav.Item>
    <Button onClick={click}>Log out</Button>
  </Nav.Item>

</Nav>
	
      
    </div>
  )
}






















