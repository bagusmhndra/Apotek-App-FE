import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, Breadcrumb, Button, Badge } from 'react-bootstrap';
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";
import api from '../../api';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const crispScriptRef = useRef(null);

  // Chat
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "0efccc7d-d3ae-4a9c-94f7-3f59742ed30e";
    crispScriptRef.current = document.createElement("script");
    crispScriptRef.current.src = "https://client.crisp.chat/l.js";
    crispScriptRef.current.async = 1;
    document
      .getElementsByTagName("head")[0]
      .appendChild(crispScriptRef.current);

    return () => {
      if (crispScriptRef.current) {
        document
          .getElementsByTagName("head")[0]
          .removeChild(crispScriptRef.current);
        delete window.$crisp;
        delete window.CRISP_WEBSITE_ID;
      }
    };
  }, []);

  useEffect(() => {
    // Mengambil daftar pesanan dari API
    const fetchOrders = async () => {
      try {
        const response = await api.get('/order');
        setOrders(response.data); // Simpan data pesanan ke state
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const getPaymentStatusBadge = (status) => {
    let variant, text;

    switch (status) {
      case 'Pending':
        variant = 'warning';
        text = 'Tertunda';
        break;
      case 'Successful':
        variant = 'success';
        text = 'Terbayar';
        break;
      case 'Cancelled':
        variant = 'danger';
        text = 'Dibatalkan';
        break;
      default:
        variant = 'secondary';
        text = 'Tidak diketahui';
    }

    return <Badge bg={variant}>{text}</Badge>;
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item active>Order Saya</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        {orders.map(order => (
          <Row className="mt-3" key={order._id}>
            <Col md={12}>
              <Card className='border-0 shadow'>
                <Card.Body>
                  <Card.Title>ID Order: {order._id}</Card.Title>
                  <Breadcrumb>
                    <Breadcrumb.Item active>Status: {getPaymentStatusBadge(order.status)}</Breadcrumb.Item>
                    <Breadcrumb.Item active>Alamat: {order.address}</Breadcrumb.Item>
                  </Breadcrumb>
                  <ListGroup variant="flush">
                    {order.items.map(item => (
                      <ListGroup.Item key={item._id}>
                        <Row>
                          <Col md={2}>
                            <img src={item.product.image} className="img-fluid" alt={item.product.productName} />
                          </Col>
                          <Col md={6}>{item.product.productName}</Col>
                          <Col md={2}>Rp {item.product.price.toLocaleString()}</Col>
                          <Col md={2}>x {item.quantity}</Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Card className="mt-4">
                    <Card.Body>
                      <Card.Title>Total Pembelian</Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Row>
                            <Col>Total</Col>
                            <Col>Rp{order.total.toLocaleString()},00</Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                      {order.whatsappLink && (
                        <Button 
                          variant="success" 
                          className="w-100 mt-3" 
                          as="a" 
                          href={order.whatsappLink} 
                          target="_blank"
                        >
                          Konfirmasi Order di WhatsApp
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default MyOrder;
