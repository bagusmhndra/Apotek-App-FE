import React, { useState } from "react";
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function MyProfilePage() {
  const [initialValues] = useState({
    fullName: "Dewa Putra",
    username: "dewaputra",
    email: "dewaputra@gmail.com",
    phoneNumber: "082465478654",
    address: "Semarang",
  });

  const [formData, setFormData] = useState({ ...initialValues });

  const [editMode, setEditMode] = useState(false);

  const saveProfile = (event) => {
    event.preventDefault();
    console.log("Profile updated:", formData);
    setEditMode(false);
  };

  const cancelEdit = () => {
    setFormData({ ...initialValues });
    setEditMode(false);
  };

  return (
    <>
      <HeaderDashboard />
      <Container className="mt-5">
        <Card className="shadow border-0">
          <Card.Body>
            <h2 className="title-profile" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}>
              My Profile
            </h2>
            <Form onSubmit={saveProfile}>
              <Row className="mb-3">
                <Col md={6} className="mb-3">
                  <Form.Group controlId="fullName">
                    <Form.Label className="fw-semibold">Full Name</Form.Label>
                    {editMode ? (
                      <Form.Control
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Enter name"
                        autoFocus
                      />
                    ) : (
                      <div>{formData.fullName}</div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="username">
                    <Form.Label className="fw-semibold">Username</Form.Label>
                    {editMode ? (
                      <Form.Control
                        type="text"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                        placeholder="Enter username"
                      />
                    ) : (
                      <div>{formData.username}</div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="email">
                    <Form.Label className="fw-semibold">Email Address</Form.Label>
                    {editMode ? (
                      <Form.Control
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Enter email address"
                      />
                    ) : (
                      <div>{formData.email}</div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="phoneNumber">
                    <Form.Label className="fw-semibold">Phone Number</Form.Label>
                    {editMode ? (
                      <Form.Control
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                        placeholder="Enter phone number"
                      />
                    ) : (
                      <div>{formData.phoneNumber}</div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="address">
                    <Form.Label className="fw-semibold">Address</Form.Label>
                    {editMode ? (
                      <Form.Control
                        type="text"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        placeholder="Enter address"
                      />
                    ) : (
                      <div>{formData.address}</div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              {editMode ? (
                <div className="d-flex justify-content-left text-center">
                  <Button type="submit" variant="primary" className="me-3">
                    Update
                  </Button>
                  <Button variant="secondary" onClick={cancelEdit}>
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button variant="primary" onClick={() => setEditMode(true)}>
                  Edit
                </Button>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default MyProfilePage;
