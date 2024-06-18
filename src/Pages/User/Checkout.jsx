import React, { useState } from 'react';
import { useLocation,Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, ListGroup,Breadcrumb } from 'react-bootstrap';
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Cart = () => {
  const location = useLocation();
  const cart = location.state.cart || [];
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const totalPesanan = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const ongkosKirim = 10000;
  const totalBayar = totalPesanan + ongkosKirim;

  const handlePayment = () => {
    const waNumber = "6281292573422";
    let message = `Halo, saya ingin melakukan pembelian dengan rincian sebagai berikut:\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.product.title}\nJumlah: ${item.quantity}\nTotal: ${formatRupiah(item.product.price * item.quantity)}\n\n`;
    });
    message += `Total Pesanan: ${formatRupiah(totalPesanan)}\n`;
    message += `Ongkos Kirim: ${formatRupiah(ongkosKirim)}\n`;
    message += `Total Bayar: ${formatRupiah(totalBayar)}\n\n`;
    message += `Dengan \n`;
    message += `Nama: ${name}\n`;
    message += `Nomor Telepon: ${phone}\n`;
    message += `Alamat Pengiriman: ${address}\n`;

    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
      <Row>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/products" }}>Kembali</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col md={8}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Informasi Pengiriman</Card.Title>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label className="mt-3">Nama Penerima</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tambahkan Nama"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPhone">
                    <Form.Label className="mt-3">Nomor Telepon</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tambahkan Nomor Telepon"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
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
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Produk</Card.Title>
                {cart.length === 0 ? (
                  <p>Keranjang belanja Anda kosong.</p>
                ) : (
                  cart.map((item, index) => (
                    <Row key={index} className="mb-3">
                      <Col md={2}>
                        <img src={item.product.image} className="img-fluid" alt={item.product.title} />
                      </Col>
                      <Col xs={8}>
                        <Card.Title>{item.product.title}</Card.Title>
                        <Card.Text>Jumlah: {item.quantity}</Card.Text>
                        <Card.Text>Total: {formatRupiah(item.product.price * item.quantity)}</Card.Text>
                      </Col>
                    </Row>
                  ))
                )}
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
                      <Col>{formatRupiah(totalPesanan)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Ongkos Kirim</Col>
                      <Col>{formatRupiah(ongkosKirim)}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Bayar</Col>
                      <Col>{formatRupiah(totalBayar)}</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className="w-100 mt-3" onClick={handlePayment}>
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
