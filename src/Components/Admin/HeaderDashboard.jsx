import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import "../../Assets/css/Header.css";

const HeaderDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  const handleProfileClick = () => {
    navigate("/dashboard/my-profile");
  };

  return (
    <Navbar expand="l" className="mb-3 navbar-container" sticky="top">
      <Container fluid className="left-container">
        <Navbar.Toggle aria-controls={`offcanvasNavbarLabel-expand-l`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbarLabel-expand-l`}
          aria-labelledby={`offcanvasNavbarLabel-expand-l`}
          placement="start"
          className="offcanvas-animation"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-l`}
              className="d-flex align-items-center"
            >
              <h3 className="fw-bold">
                Pharmora
                <span style={{ color: "rgba(226,23,70,0.8)" }}>.id</span>
              </h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3 fs-5">
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/user-list">
                User List
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/order-list">
                Order List
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/product-list">
                Product List
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/category-list">
                Category List
              </Nav.Link>
            </Nav>
            <hr />
            <ButtonGroup>
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout
              </Button>
            </ButtonGroup>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          
          <h1 className="fw-bold">
            Pharmora<span>.id</span>
          </h1>
        </Navbar.Brand>
        <PersonCircle size={30} className="ms-3" onClick={handleProfileClick}
          style={{ cursor: "pointer" }}/>
      </Container>
    </Navbar>
  );
};

export default HeaderDashboard;
