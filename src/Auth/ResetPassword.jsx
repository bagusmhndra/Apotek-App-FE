import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import api from '../api';
import '../Assets/css/ResetPassword.css';

const ResetPassword = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialEmail = queryParams.get('email') || '';

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setMessage('');
    setError('');
    try {
      const response = await api.put('/users/reset-password', { email, password });
      if (response.status === 200) {
        setMessage('Password has been reset successfully.');
        // Navigate to login page after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        throw new Error('Failed to reset password');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <Container className="reset-password-container">
      <Card className="p-4 border-0 shadow">
        <h3 className="pb-3">Reset Password</h3>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleResetPassword}>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="hidden"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ResetPassword;
