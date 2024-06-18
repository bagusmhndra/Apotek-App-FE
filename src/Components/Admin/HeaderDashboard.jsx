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
import "../../assets/css/Header.css";

const HeaderDashboard = () => {
  /*
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Mengambil peran pengguna dari localStorage
    const role = localStorage.getItem("role");
    if (role) {
      setUserRole(role);
    } else {
      navigate("/login");
    }
  }, [navigate]);
*/
  // Fungsi untuk menangani logout
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Menampilkan pesan logout sukses di console
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        window.location.href = "/";
      } else {
        const errorData = await response.json();
        console.error("Error logging out:", errorData.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = "/";
    }
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
              <Nav.Link as={Link} to="/dashboard/my-profile">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/order-list">
                Order List
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/product-list">
                Product List
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/user-list">
                User List
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/add-admin">
                Add Admin
              </Nav.Link>

              <Nav.Link as={Link} to="/dashboard/settings">
                Settings
              </Nav.Link>
            </Nav>
            <hr />
            <ButtonGroup as={Link} to="/logout">
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
