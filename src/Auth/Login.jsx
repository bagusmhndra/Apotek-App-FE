import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import "../assets/css/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Login button clicked");

    try {
      const response = await fetch(
        "https://a76e-2a09-bac5-3a04-1d05-00-2e4-15.ngrok-free.app/users/login",
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response received");

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Login failed:", errorData.message);
        throw new Error(errorData.message || "Username atau Password salah");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Pastikan respons mengandung properti "role"
      //if (!data.role) {
      //  throw new Error("Role information missing in response.");
      //}

      // Simpan token dan role di localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // Arahkan berdasarkan role pengguna
      //if (data.role === "User") {
        console.log("Navigating to /");
        navigate("/");
      //} else if (data.role === "Admin" || data.role === "Superadmin") {
      //  console.log("Navigating to /dashboard");
      //  navigate("/dashboard");
      //}
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.message || "Login gagal");
    }
  };

  return (
    <Container className="login-container">
      <Container as={Link} to="/">
        <h1 className="fw-bold text-center fs-1">
          Pharmora<span>.id</span>
        </h1>
      </Container>

      <Card className="p-4 border-0 shadow">
        <h3 className="pb-3">Login</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-2"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="input-group">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="d-flex justify-content-between mt-3">
            <Button variant="primary" type="submit">
              Masuk
            </Button>
            <Button variant="link" as={Link} to="/forgot-password">
              Lupa Password?
            </Button>
          </div>
        </Form>
        <div className="mt-3 text-center">
          Belum punya akun?
          <Button variant="link" as={Link} to="/register">
            Daftar
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
