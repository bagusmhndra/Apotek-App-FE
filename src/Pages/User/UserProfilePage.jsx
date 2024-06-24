import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Breadcrumb,
  Row,
  Col,
  Form,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../api";
import Header from "../../Components/User/Header";

function MyProfilePage() {
  const [initialValues, setInitialValues] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [formData, setFormData] = useState({ ...initialValues });
  const [editMode, setEditMode] = useState(false);

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
        Swal.fire({
          icon: 'error',
          title: 'Gagal mengambil data pengguna',
          text: error.message,
          confirmButtonColor: "#3B71CA",
        });
      }
    };

    fetchUserData();
  }, []);

  const saveProfile = async (event) => {
    event.preventDefault();
    try {
      await api.put("/users/updateUser", formData);
      Swal.fire({
        icon: 'success',
        title: 'Profil berhasil diperbarui',
        text: 'Informasi profil Anda telah diperbarui.',
        confirmButtonColor: "#3B71CA",
      });
      setEditMode(false);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal memperbarui profil',
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
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>My Profile</Breadcrumb.Item>
          </Breadcrumb>
          <h3 className="myprofile-title mt-4 mb-4">My Profile</h3>
          <Card className="border-0">
            <Card.Body>
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
                        Email
                      </Form.Label>
                      {editMode ? (
                        <Form.Control
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Email..."
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
                          placeholder="Phone Number..."
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
                          placeholder="Address..."
                        />
                      ) : (
                        <div>{formData.address}</div>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                {editMode ? (
                  <div className="d-flex justify-content-left text-center">
                    <Button type="submit" variant="primary" className="me-2">
                      Save Changes
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

export default MyProfilePage;
