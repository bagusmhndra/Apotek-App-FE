import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  ButtonGroup,
  Offcanvas,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  PersonFill,
  CartFill,
  BoxArrowRight,
  Person,
  GearFill,
} from "react-bootstrap-icons";
import logo from "../../Assets/img/logo.png";
import "../../Assets/css/Header.css";

const Header = () => {
  const [authToken, setAuthToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (
        userData &&
        (userData.role === "Admin" || userData.role === "Superadmin")
      ) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setAuthToken(null);
    setIsAdmin(false);
    navigate("/logout");
  };

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
              Phar<span>mora</span>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbarLabel-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbarLabel-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="offcanvas-animation"
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
                  Phar<span>mora</span>
                </h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/products">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/about-us">
                  About Us
                </Nav.Link>
              </Nav>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  {authToken ? (
                    <Dropdown align="center">
                      <Dropdown.Toggle
                        as={Button}
                        variant="outline-light"
                        id="dropdown-basic"
                        className="profile-btn d-flex align-items-center border-0"
                      >
                        <Person size={30} />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          as={Link}
                          to="/user-profile"
                          className="d-flex align-items-center"
                        >
                          <PersonFill className="me-2" /> My Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          as={Link}
                          to="/my-order"
                          className="d-flex align-items-center"
                        >
                          <CartFill className="me-2" /> Order Data
                        </Dropdown.Item>
                        {isAdmin && (
                          <Dropdown.Item
                            as={Link}
                            to="/dashboard"
                            className="d-flex align-items-center"
                          >
                            <GearFill className="me-2" /> Admin Dashboard
                          </Dropdown.Item>
                        )}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <>
                      <ButtonGroup as={Link} to="/login" className="me-2">
                        <Button variant="primary">Login</Button>
                      </ButtonGroup>
                      <ButtonGroup as={Link} to="/register">
                        <Button variant="outline-primary">Register</Button>
                      </ButtonGroup>
                    </>
                  )}
                </div>
                {authToken && (
                  <BoxArrowRight
                    size={30}
                    className="ms-3 mt-2 me-5"
                    onClick={handleLogout}
                    style={{ cursor: "pointer", color: "red" }}
                  />
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
