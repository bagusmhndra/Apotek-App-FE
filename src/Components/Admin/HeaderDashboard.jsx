import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  ButtonGroup,
  Offcanvas,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/Header.css";

const HeaderDashboard = () => {
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch("https://e8c1-2a09-bac5-3a02-18be-00-277-1.ngrok-free.app/users", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        console.log("Response received");

        if (response.ok) {
          const data = await response.json();
          setUserRole(data.role); // Assuming your API returns { role: "Admin" } or { role: "Superadmin" }
        } else {
          throw new Error("Failed to fetch user role");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        navigate("/login");
      }
    };

    fetchUserRole();
  }, [navigate]);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    console.log("Logout sukses!");
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="mb-3 navbar-container" sticky="top">
      <Container fluid className="left-container">
        <Navbar.Toggle aria-controls={`offcanvasNavbarLabel-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbarLabel-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
          className="offcanvas-animation"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-lg`}
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
              <Nav.Link as={Link} to="/dashboard/my-profile">
                Profile
              </Nav.Link>
              {userRole === "Admin" && (
                <>
                  <Nav.Link as={Link} to="/dashboard/user-list">
                    User List
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/order-list">
                    Order List
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/product-list">
                    Product List
                  </Nav.Link>
                </>
              )}
              {userRole === "Superadmin" && (
                <>
                  <Nav.Link as={Link} to="/dashboard/user-list">
                    User List
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/add-admin">
                    Add Admin
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/order-list">
                    Order List
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard/product-list">
                    Product List
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/dashboard/settings">
                Settings
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
      </Container>
    </Navbar>
  );
};

export default HeaderDashboard;
