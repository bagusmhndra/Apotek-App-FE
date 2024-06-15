import React, { useState } from "react";
import { Container, Form, Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/AddAdmin.css";
import Swal from "sweetalert2";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function AddAdmin() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminData = {
      fullname,
      username,
      phone,
      address,
      email,
      password,
    };

    try {
      const response = await fetch("/api/auth/registerAdmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminData),
      });

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          title: "Good job!",
          text: data.message,
          icon: "success",
          iconColor: "#01aa5a",
          confirmButtonColor: "#3B71CA",
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Register Gagal!",
          text: errorData.message,
          confirmButtonColor: "#3B71CA",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Register Gagal!",
        text: "Sepertinya Terjadi Kesalahan!",
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  return (
    <>
      <HeaderDashboard />
      <Container className="justify-content-center mt-5">
        <Form className="p-5 flex-column gap-3 shadow" onSubmit={handleSubmit}>
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
                  value={fullname}
                  onChange={handleFullnameChange}
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
                  value={username}
                  onChange={handleUsernameChange}
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
                  value={password}
                  onChange={handlePasswordChange}
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
                  value={phone}
                  onChange={handlePhoneChange}
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
                  value={email}
                  onChange={handleEmailChange}
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
                  value={address}
                  onChange={handleAddressChange}
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
