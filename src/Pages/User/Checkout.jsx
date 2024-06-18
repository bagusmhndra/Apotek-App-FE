import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, ListGroup, Breadcrumb } from 'react-bootstrap';
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Cart = () => {
  const [address, setAddress] = useState('');
  
  const products = [
    {
      id: 1,
      name: "DegiroI 0,25 mg 10 Tablet",
      price: 10000,
      quantity: 1,
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp"
    },
    {
        id: 1,
        name: "DegiroI 0,25 mg 10 Tablet",
        price: 10000,
        quantity: 1,
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp"
      },
  ];

  const totalOrder = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const shippingCost = 10000;
  const totalPayment = totalOrder + shippingCost;

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/category" }}>Kembali</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="mt-3">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Keranjang</Card.Title>
                <Form>
                  <Form.Group controlId="formAddress">
                    <Form.Label className="mt-3">Alamat Pengiriman</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Tambahkan Alamat" 
                      value={address} 
                      onChange={(e) => setAddress(e.target.value)} 
                    />
                  </Form.Group>
                </Form>
                <Card className="mt-4">
                  <Card.Body>
                    <Card.Title>Produk</Card.Title>
                    <ListGroup variant="flush">
                      {products.map(product => (
                        <ListGroup.Item key={product.id}>
                          <Row>
                            <Col md={2}>
                              <img src={product.image} className="img-fluid" alt={product.name} />
                            </Col>
                            <Col md={6}>{product.name}</Col>
                            <Col md={2}>Rp {product.price.toLocaleString()}</Col>
                            <Col md={2}>x {product.quantity}</Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Ringkasan Pembelian</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Pesanan</Col>
                      <Col>Rp {totalOrder.toLocaleString()}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Ongkos Kirim</Col>
                      <Col>Rp {shippingCost.toLocaleString()}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Bayar</Col>
                      <Col>Rp {totalPayment.toLocaleString()}</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className="w-100 mt-3" block>
                  Lanjutkan Pembayaran
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
