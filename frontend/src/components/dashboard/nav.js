import {
  Container,
  Nav,
}
from "react-bootstrap";
import { useNavigate, useLocation, Link, Outlet } from "react-router-dom";
import "./dashboard.css";

export default function MyNav() {
  return (
    <div>

<Container  id="navStyling">
<Nav variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Nav.Link><Link to="/dash/available">Available tests for registration</Link></Nav.Link>
  </Nav.Item>
  &nbsp;&nbsp;
  <Nav.Item>
    <Nav.Link><Link to="/dash/previous">Previous Tests</Link></Nav.Link>
  </Nav.Item>
  &nbsp;&nbsp;
  <Nav.Item>
  <Nav.Item>
    <Nav.Link> <Link to="/dash/cancelled">Cancelled Tests</Link></Nav.Link>
  </Nav.Item>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to="/dash/result">Result</Link></Nav.Link>
  </Nav.Item>
</Nav>
</Container>
      <Outlet></Outlet>
    </div>
  );
}
