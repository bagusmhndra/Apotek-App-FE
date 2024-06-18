import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  //PASSWORD ICON
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    if (password !== confirmPassword) {
      setError("Password confirmation does not match");
      return;
    }
    try {
      const response = await fetch(
        "https://a76e-2a09-bac5-3a04-1d05-00-2e4-15.ngrok-free.app/users/register",
        {
          method: "POST",
          body: JSON.stringify({ username, email, password, phone }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Akun sudah terdaftar");
      }
      navigate("/");
    } catch (error) {
      setError(error.message || "Register gagal");
    }
  };

  return (
    <Container className="register-container">
      <Container as={Link} to="/">
        <h1 className="fw-bold text-center fs-1">
          Pharmora<span>.id</span>
        </h1>
      </Container>

      <Card className="p-4 border-0 shadow">
        <h3 className="pb-3">Register</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formBasicUser">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="string"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-2"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-2"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? "string" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
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
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Password Confirmation</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showConfirmPassword ? "string" : "password"}
                placeholder="Enter confirm password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <Button
                variant="outline-primary"
                onClick={toggleConfirmPasswordVisibility}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? <EyeSlash /> : <Eye />}
              </Button>
            </div>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Daftar
          </Button>
        </Form>
        <div className="mt-3 text-center">
          Sudah punya akun?
          <Button variant="link" as={Link} to="/login">
            {" "}
            Login
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Register;
