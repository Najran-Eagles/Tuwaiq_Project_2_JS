import React from 'react';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';


export default function nav() {
  return (
    <div>

<Nav id="nafbar"
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">English</Nav.Link>
  </Nav.Item>

</Nav>
	
      
    </div>
  )
}






















