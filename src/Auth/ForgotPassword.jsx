import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ForgotPassword({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Reset Password
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ForgotPassword;