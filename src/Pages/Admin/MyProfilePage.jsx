import React, { useState } from "react";
import { Button, Container, Breadcrumb, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function MyProfilePage() {
  const [initialValues] = useState({
    fullName: "Dewa Putra",
    username: "dewaputra",
    email: "dewaputra@gmail.com",
    phoneNumber: "082465478654",
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
      <Container className="justify-content-center mt-5">
        <Form className="p-5 flex-column gap-3 shadow" onSubmit={saveProfile}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/dashboard">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>My Profile</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="title-profile fw-bold">My Profile</h2>
          <div className="flex-column flex-sm-row gap-3 gap-sm-5 rounded-2 mb-3 mt-3">
            <div className="flex-column gap-2">
              <Form.Group controlId="fullName" className="mb-3">
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
              <Form.Group controlId="username" className="mb-3">
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
              <Form.Group controlId="email" className="mb-3">
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
              <Form.Group controlId="phoneNumber" className="mb-3">
                <Form.Label className="fw-semibold">Phone Number</Form.Label>
                {editMode ? (
                  <Form.Control
                    type="number"
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
            </div>
          </div>
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
      </Container>
    </>
  );
}

export default MyProfilePage;
