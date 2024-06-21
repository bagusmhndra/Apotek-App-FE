// src/components/OrderSuccess.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Alert, Button } from 'react-bootstrap';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  if (!order) {
    return <p>No order details found</p>;
  }

  return (
    <Container className="mt-5">
      <Alert variant="success">
        <h4>Order Successful!</h4>
        <p>Your order has been placed successfully. Your order ID is {order._id}.</p>
        <p>Total: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(order.total)}</p>
        {order.whatsappLink && (
          <Button href={order.whatsappLink} target="_blank" className="me-3">
            Confirm on WhatsApp
          </Button>
        )}
        <Button variant="primary" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Alert>
    </Container>
  );
};

export default OrderSuccess;
