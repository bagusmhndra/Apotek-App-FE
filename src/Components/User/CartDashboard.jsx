import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, ListGroup, Breadcrumb } from 'react-bootstrap';
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";
import api from '../../api'; // Import the API instance

const Cart = () => {
  const [address, setAddress] = useState('');
  const [products, setProducts] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const shippingCost = 10000;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart items from the backend
    const fetchCartItems = async () => {
      try {
        const response = await api.get('/cart'); // Fetching the cart from the backend
        setProducts(response.data.items);
        const total = response.data.items.reduce((acc, product) => acc + product.product.price * product.quantity, 0);
        setTotalOrder(total);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const totalPayment = totalOrder + shippingCost;

  const handleCheckout = async () => {
    try {
      const response = await api.post('/checkout', { address });
      if (response.status === 201) {
        navigate('/order-success', { state: { order: response.data.order } });
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/category" }}>Back</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="mt-3">
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Cart</Card.Title>
                <Form>
                  <Form.Group controlId="formAddress">
                    <Form.Label className="mt-3">Shipping Address</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Address" 
                      value={address} 
                      onChange={(e) => setAddress(e.target.value)} 
                    />
                  </Form.Group>
                </Form>
                <Card className="mt-4">
                  <Card.Body>
                    <Card.Title>Products</Card.Title>
                    <ListGroup variant="flush">
                      {products.map(product => (
                        <ListGroup.Item key={product.product._id}>
                          <Row>
                            <Col md={2}>
                              <img src={product.product.image} className="img-fluid" alt={product.product.name} />
                            </Col>
                            <Col md={6}>{product.product.productName}</Col>
                            <Col md={2}>Rp {product.product.price.toLocaleString()}</Col>
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
                <Card.Title>Order Summary</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Order</Col>
                      <Col>Rp {totalOrder.toLocaleString()}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping Cost</Col>
                      <Col>Rp {shippingCost.toLocaleString()}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Payment</Col>
                      <Col>Rp {totalPayment.toLocaleString()}</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary" className="w-100 mt-3" onClick={handleCheckout}>
                  Proceed to Checkout
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
