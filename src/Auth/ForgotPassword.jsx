import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../assets/css/ForgotPassword.css";

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  //PASSWORD ICON
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <Container className="reset-container">
      <Container as={Link} to="/">
        <h1 className="fw-bold text-center fs-1">
          Pharmora<span>.id</span>
        </h1>
      </Container>

      <Card className="p-4 border-0 shadow">
        <h3 className="pb-3">Reset Password</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>New Password</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? "string" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mb-2"
                required
              />
              <Button
                variant="outline-primary"
                className="mb-2"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </Button>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Confirm New Password</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showConfirmPassword ? "string" : "password"}
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="mb-2"
                required
              />
              <Button
                variant="outline-primary"
                onClick={toggleConfirmPasswordVisibility}
                className="mb-2"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? <EyeSlash /> : <Eye />}
              </Button>
            </div>
          </Form.Group>

          <div className="d-flex justify-content-between mt-3">
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </div>
        </Form>
        <div className="mt-3 text-center">
          Kembali ke
          <Button variant="link" as={Link} to="/login">
            {" "}
            Login
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default ForgotPassword;
