import React from "react";
import { Button, Container, Form } from "react-bootstrap";
//import "../../assets/css/AddAdmin.css";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function AddAdmin() {
  return (
    <>
      <HeaderDashboard />
      <Container className="container-add-admin d-flex justify-content-center mt-5">
        <Form className="p-5 d-flex flex-column gap-5" style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <div className="container-input-add-admin d-flex flex-column flex-sm-row gap-3 gap-sm-5 rounded-2">
            <div className="kiri-add-admin d-flex flex-column gap-2">
              <Form.Group controlId="formFullname">
                <Form.Label>
                  Fullname<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Fullname" required autoFocus />
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Label>
                  Username<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Username" required />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>
                  Password<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
            </div>
            <div className="kanan-add-admin d-flex flex-column gap-2">
              <Form.Group controlId="formPhone">
                <Form.Label>
                  Phone<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Your Phone" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>
                  Email<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Email Address" required />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>
                  Address<span className="text-danger">*</span>
                </Form.Label>
                <Form.Control as="textarea" rows={1} placeholder="Your Address" required />
              </Form.Group>
            </div>
          </div>
          <Button variant="primary" type="submit">Add Admin</Button>
        </Form>
      </Container>
    </>
  );
}

export default AddAdmin;
