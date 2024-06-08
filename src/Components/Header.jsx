import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  ButtonGroup,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import "../css/Header.css";

const Header = ({
  onLoginClick,
  onRegisterClick,
  isAuthenticated,
  onLogoutClick,
}) => {
  return (
    <>
      <Navbar expand="lg" className="mb-3 navbar-container" sticky="top">
        {isAuthenticated ? (
          <Container fluid className="left-container">
            <Navbar.Brand
              as={Link}
              to="/"
              className="d-flex align-items-center"
            >
              <img
                src="../../assets/logo.png"
                alt="Logo"
                height="45"
                className="d-inline-block align-center"
              />
              <span className="ms-3 navbar-brand-text">Pharmora.id</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbarLabel-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbarLabel-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <img
                    src="../../assets/logo.png"
                    alt="Logo"
                    height="40"
                    className="d-inline-block align-top"
                  />
                  <span className="ms-2">Pharmora.id</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* Navbar Links */}
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/category">
                    Kategori
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Chat Kami
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about-us">
                    Tentang Kami
                  </Nav.Link>
                </Nav>
                {/* Search Bar */}
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="me-1"
                  />
                  <Button variant="outline-primary" className="me-2">
                    <Search />
                  </Button>
                </Form>
                <hr />
                {/* Logout Button */}
                <Button variant="outline-danger" onClick={onLogoutClick}>
                  Logout
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        ) : (
          <Container fluid className="left-container">
            <Navbar.Brand
              as={Link}
              to="/"
              className="d-flex align-items-center"
            >
              <img
                src="../../assets/logo.png"
                alt="Logo"
                height="45"
                className="d-inline-block align-center"
              />
              <span className="ms-3 navbar-brand-text">Pharmora.id</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbarLabel-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbarLabel-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <img
                    src="../../assets/logo.png"
                    alt="Logo"
                    height="40"
                    className="d-inline-block align-top"
                  />
                  <span className="ms-2">Pharmora.id</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/category">
                    Kategori
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Chat Kami
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about-us">
                    Tentang Kami
                  </Nav.Link>
                </Nav>
                <br />
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="me-1"
                  />
                  <Button variant="outline-primary" className="me-2">
                    <Search />
                  </Button>
                </Form>
                <hr />
                <ButtonGroup>
                  <Button variant="outline-primary" onClick={onRegisterClick}>
                    Daftar
                  </Button>
                  <Button variant="primary" onClick={onLoginClick}>
                    Masuk
                  </Button>
                </ButtonGroup>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        )}
      </Navbar>
    </>
  );
};

export default Header;
