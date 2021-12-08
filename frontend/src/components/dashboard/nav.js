import {Container, Nav} from "react-bootstrap";
import { useNavigate, useLocation, Link, Outlet } from "react-router-dom";
import "./dashboard.css";

export default function MyNav() {
  return (
    <Container id="navBody">
    <div>
<Nav variant="tabs" defaultActiveKey="/">
  <Nav.Item>
  <Nav.Link><Link to="/dash/available">Available tests for registration</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link><Link to="/dash/previous">Previous Tests</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link> <Link to="/dash/cancelled">Cancelled Tests</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link><Link to="/dash/result">Result</Link></Nav.Link>
  </Nav.Item>

</Nav>


<<<<<<< HEAD
    <Nav variant="tabs" defaultActiveKey="/">
=======
{/* 
<Container  id="navStyling">
<Nav variant="tabs" defaultActiveKey="/">
>>>>>>> 5da28199adcba6610b7ef036cd68cd839923ee08
  <Nav.Item>
  <Nav.Link><Link to="/dash/available">Available tests for registration</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link><Link to="/dash/previous">Previous Tests</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link> <Link to="/dash/cancelled">Cancelled Tests</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link><Link to="/dash/result">Result</Link></Nav.Link>
  </Nav.Item>
</Nav>
<<<<<<< HEAD
<Outlet></Outlet>
</div>
</Container>
      
    
=======
</Container> */}
      <Outlet></Outlet>
    </div>
  </Container>
>>>>>>> 5da28199adcba6610b7ef036cd68cd839923ee08
  );
}
