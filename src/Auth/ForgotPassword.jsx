import React, { useState } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../api';
import '../Assets/css/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await api.post('/users/forgot-password', { email });
      if (response.status === 200) {
        setMessage('You can now reset your password.');
        // Redirect to reset password page with token and email as query parameter
        window.location.href = `/reset-password/${response.data.token}?email=${encodeURIComponent(email)}`;
      } else {
        throw new Error('Failed to send password reset instructions');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send password reset instructions');
    }
  };

  return (
    <Container className="forgot-password-container">
      <Container as={Link} to="/">
        <h1 className="fw-bold text-center fs-1">
          Pharmora<span>.id</span>
        </h1>
      </Container>

      <Card className="p-4 border-0 shadow">
        <h3 className="pb-3">Forgot Password</h3>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleForgotPassword}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Reset Password
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
