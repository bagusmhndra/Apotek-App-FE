import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup, Form, Card, Breadcrumb } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import HeaderDashboard from '../../Components/Admin/HeaderDashboard';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCart = location.state?.cart || [];
  console.log("Cart data received:", initialCart);
  const [cart, setCart] = useState(initialCart);

  const handleProceedToOrderList = () => {
    navigate('/orderList', { state: { cart } });
  };

  const handleRemoveItem = (productName) => {
    const updatedCart = cart.filter(item => item.product.name !== productName);
    setCart(updatedCart);
  };

  const handleQuantityChange = (productName, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.product.name === productName
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  };

  if (cart.length === 0) {
    return <h6>Your cart is empty.</h6>;
  }

  return (
    <>
      <HeaderDashboard />
      <Container className="mt-4">
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/dashboard/product-list" }}>Kembali</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Card>
          <Card.Body>
            <Card.Title>Cart</Card.Title>
            <ListGroup>
              {cart.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col>
                      <h5>{item.product.name}</h5>
                      <p>Price: {formatCurrency(item.product.price)}</p>
                    </Col>
                    <Col md="auto">
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.product.name, parseInt(e.target.value))}
                        min="1"
                        style={{ width: '60px', marginRight: '16px' }}
                      />
                      <Button variant="danger" onClick={() => handleRemoveItem(item.product.name)}>
                        <Trash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <h5 className="mt-3">Total Price: {formatCurrency(calculateTotalPrice())}</h5>
            <Button variant="primary" onClick={handleProceedToOrderList} className="mt-3">
              Proceed to Order List
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Cart;
