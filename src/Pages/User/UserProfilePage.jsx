import React, { useState, useEffect, useRef } from "react";
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import Header from "../../Components/User/Header";
import api from "../../api";

function UserProfilePage() {
  const [initialValues, setInitialValues] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [formData, setFormData] = useState({ ...initialValues });
  const [editMode, setEditMode] = useState(false);
  const crispScriptRef = useRef(null);

  //Chat
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "0efccc7d-d3ae-4a9c-94f7-3f59742ed30e";
    crispScriptRef.current = document.createElement("script");
    crispScriptRef.current.src = "https://client.crisp.chat/l.js";
    crispScriptRef.current.async = 1;
    document
      .getElementsByTagName("head")[0]
      .appendChild(crispScriptRef.current);

    return () => {
      if (crispScriptRef.current) {
        document
          .getElementsByTagName("head")[0]
          .removeChild(crispScriptRef.current);
        delete window.$crisp;
        delete window.CRISP_WEBSITE_ID;
      }
    };
  }, []);

  useEffect(() => {
    // Fetch user data from the server
    const fetchUserData = async () => {
      try {
        const response = await api.get("/users/me");
        const userData = response.data;
        setInitialValues({
          fullName: userData.fullName || "",
          username: userData.username || "",
          email: userData.email || "",
          phoneNumber: userData.phone || "",
          address: userData.address || "",
        });
        setFormData({
          fullName: userData.fullName || "",
          username: userData.username || "",
          email: userData.email || "",
          phoneNumber: userData.phone || "",
          address: userData.address || "",
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const saveProfile = async (event) => {
    event.preventDefault();
    try {
      await api.put("/users/updateUser", formData);
      Swal.fire({
        icon: "success",
        title: "Profile updated successfully",
        text: "Your profile information has been updated.",
        confirmButtonColor: "#3B71CA",
      });
      setEditMode(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to update profile",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const cancelEdit = () => {
    setFormData({ ...initialValues });
    setEditMode(false);
  };

  return (
    <>
      <Header />
      <Container>
        <div className="p-5 flex-column gap-3 shadow">
          <Card className="border-0">
            <Card.Body>
              <h2
                className="title-profile"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                My Profile
              </h2>
              <Form onSubmit={saveProfile}>
                <Row className="mb-3">
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="username">
                      <Form.Label className="fw-semibold">Username</Form.Label>
                      {editMode ? (
                        <Form.Control
                          type="text"
                          value={formData.username}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              username: e.target.value,
                            })
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
                      <Form.Label className="fw-semibold">
                        Email Address
                      </Form.Label>
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
                      <Form.Label className="fw-semibold">
                        Phone Number
                      </Form.Label>
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
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
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
        </div>
      </Container>
    </>
  );
}

export default UserProfilePage;
