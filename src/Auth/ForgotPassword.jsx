import React, { useState } from "react";
import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  //PASSWORD ICON
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    if (newPassword !== confirmNewPassword) {
      setError("Password confirmation does not match");
      return;
    }
    try {
      const response = await fetch(
        "https://c871-58-147-190-90.ngrok-free.app/users/reset-password",
        {
          method: "POST",
          body: JSON.stringify({ email, newPassword }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Reset password failed");
      }
      setSuccessMessage(
        "Password reset successful. You can now log in with your new password."
      );
      navigate("/login");
    } catch (error) {
      setError(error.message || "Reset password failed");
    }
  };

  return (
    <Container className="reset-container">
      <Container as={Link} to="/">
        <h1 className="fw-bold text-center fs-1">
          Pharmora<span>.id</span>
        </h1>
      </Container>

      <Card className="p-4 border-0 shadow">
        <h3 className="pb-3">Reset Password</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form onSubmit={handleResetPassword}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
