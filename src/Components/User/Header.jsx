import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  ButtonGroup,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "../../assets/css/Header.css";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="mb-3 navbar-container" sticky="top">
        <Container fluid className="left-container">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              height="50"
              className="d-inline-block align-center me-3"
            />
            <h1 className="fw-bold">
              Pharmora<span>.id</span>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbarLabel-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbarLabel-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="offcanvas-animation" // Tambahkan class offcanvas-animation
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-lg`}
                className="d-flex align-items-center"
              >
                <img
                  src={logo}
                  alt="Logo"
                  height="40"
                  className="d-inline-block align-top me-3"
                />
                <h3 className="fw-bold">
                  Pharmora<span>.id</span>
                </h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/dashboard">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/category">
                  Kategori
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Kontak Kami
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us">
                  Tentang Kami
                </Nav.Link>
              </Nav>
              <hr />
              <ButtonGroup as={Link} to="/login" className="me-3">
                <Button variant="primary">
                  Masuk
                </Button>
              </ButtonGroup>
              <ButtonGroup as={Link} to="/register">
                <Button variant="outline-primary">
                  Daftar
                </Button>
              </ButtonGroup>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
