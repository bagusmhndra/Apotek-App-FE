import React from "react";
import { Container, Form, Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/AddAdmin.css";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function AddAdmin() {
  return (
    <>
      <HeaderDashboard />
      <Container>
        <Form className="p-5 flex-column gap-3 shadow">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/dashboard">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Add Admin</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="title-profile fw-bold">Add Admin</h2>
          <div className="flex-column flex-sm-row gap-3 gap-sm-5 rounded-2">
            <div className="flex-column gap-2">
              <Form.Group controlId="formFullname" className="mb-3">
                <Form.Label className="fw-semibold">
                  Fullname<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fullname"
                  required
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label className="fw-semibold">
                  Username<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label className="fw-semibold">
                  Password<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
            </div>
            <div className="kanan-add-admin d-flex flex-column gap-2">
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label className="fw-semibold">
                  Phone<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Your Phone"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="fw-semibold">
                  Email<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formAddress" className="mb-3">
                <Form.Label className="fw-semibold">
                  Address<span className="text-danger"> *</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Your Address"
                  required
                />
              </Form.Group>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Add Admin
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddAdmin;
