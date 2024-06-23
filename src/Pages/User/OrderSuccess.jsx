// src/components/OrderSuccess.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Alert, Button } from 'react-bootstrap';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  if (!order) {
    return <p>Tidak ditemukan detail order</p>;
  }

  return (
    <Container className="mt-5">
      <Alert variant="success">
        <h4>Order Sukses!</h4>
        <p>Pesanan Anda telah berhasil dilakukan. ID pesanan Anda adalah: {order._id}.</p>
        <p>Total: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(order.total)}</p>
        {order.whatsappLink && (
          <Button href={order.whatsappLink} target="_blank" className="me-3">
            Konfirmasi di WhatsApp
          </Button>
        )}
        <Button variant="primary" onClick={() => navigate('/')}>
          Kembali ke Beranda
        </Button>
      </Alert>
    </Container>
  );
};

export default OrderSuccess;
