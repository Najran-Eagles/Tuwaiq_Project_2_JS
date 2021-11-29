import {Container, Nav,NavDropdown, Dropdown, Navbar , Button,Form,FormControl} from 'react-bootstrap';
import {useNavigate, useLocation, Link, Outlet} from 'react-router-dom';
import './dashboard.css';

export default function MyNav(){
    return (
        <div>
      
	<Container id="navStyling">
	<Nav  id="nav3"   variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    {/* <Link to="registered">Registered Tests</Link> */}
    {/* <Registered nationalId ={nationalId}></Registered> */}
  </Nav.Item>
  <Nav.Item>
    <Link to="/dash/available">Available tests for registration</Link>
    {/* <Available /> */}
  </Nav.Item>
  &nbsp;|&nbsp;
  <Nav.Item>
    <Link to="/dash/previous">Previous Tests</Link>
    
    {/* <Previous nationalId = {state.nationalId}/> */}
  </Nav.Item>
  &nbsp;|&nbsp;
  <Nav.Item>
    <Link to="/dash/cancelled">Cancelled Tests</Link>
    
    {/* <Canceled nationalId = {state.nationalId} /> */}
  </Nav.Item>
  &nbsp;|&nbsp;
  <Nav.Item>
    <Link to="/dash/result">Result</Link>
    {/* <Result nationalId = {nationalId}/> */}
  </Nav.Item>
  
</Nav>
</Container>
<Outlet></Outlet>
</div>
    );
}