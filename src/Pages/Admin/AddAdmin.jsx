import React from "react";
import { Button, Container, Form } from "react-bootstrap";
//import "../../assets/css/AddAdmin.css";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function AddAdmin() {
  return (
    <>
      <HeaderDashboard />
      <Container className="container-add-admin d-flex justify-content-center mt-5">
        <Form
          className="p-5 d-flex flex-column gap-3 shadow"
        >
          <h2 className="title-profile" style={{ fontSize: "24px", fontWeight: "bold" }}>
              Add Admin
            </h2>
          <div className="container-input-add-admin d-flex flex-column flex-sm-row gap-3 gap-sm-5 rounded-2">
            <div className="kiri-add-admin d-flex flex-column gap-2">
              <Form.Group controlId="formFullname">
                <Form.Label>
                  <h6>
                    Fullname<span className="text-danger">*</span>
                  </h6>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Fullname"
                  required
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="formUsername">
                <Form.Label>
                  <h6>
                    Username<span className="text-danger">*</span>
                  </h6>
                </Form.Label>
                <Form.Control type="email" placeholder="Username" required />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>
                  <h6>
                    Password<span className="text-danger">*</span>
                  </h6>
                </Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
            </div>
            <div className="kanan-add-admin d-flex flex-column gap-2">
              <Form.Group controlId="formPhone">
                <Form.Label>
                  <h6>
                    Phone<span className="text-danger">*</span>
                  </h6>
                </Form.Label>
                <Form.Control type="number" placeholder="Your Phone" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>
                  <h6>
                    Email<span className="text-danger">*</span>
                  </h6>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>
                  <h6>
                    Address<span className="text-danger">*</span>
                  </h6>
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
