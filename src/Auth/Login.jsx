import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import '../Assets/css/Login.css';
import api from '../api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // PASSWORD ICON
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await api.post('/users/login', { username, password });
      if (response.status === 200) {
        const userData = response.data; // Assuming API returns user data with role and token
        const token = userData.token;
        localStorage.setItem('authToken', token);
        localStorage.setItem('userData', JSON.stringify(userData.user));
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        if (userData.user.role === 'Admin' || userData.user.role === 'Superadmin') {
          navigate('/dashboard');
        } else {
          navigate('/');
        }
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container className="login-container">
      <Container as={Link} to="/">
        <h1 className="fw-bold text-center fs-1">
          Phar<span>mora</span>
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
                type={showPassword ? 'text' : 'password'}
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
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </Button>
            </div>
          </Form.Group>

          <div className="d-flex justify-content-between mt-3">
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button variant="link" as={Link} to="/forgot-password">
              Forgot Password?
            </Button>
          </div>
        </Form>
        <div className="mt-3 text-center">
          Don't have an account?
          <Button variant="link" as={Link} to="/register">
            Register
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Login;
