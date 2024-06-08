import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";

const Product = () => {
  const initialQuantities = new Array(6).fill(0);
  const [quantities, setQuantities] = useState(initialQuantities);
  const navigate = useNavigate();

  const handleAddToCart = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const handleRemoveFromCart = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  const products = [
    {
      id: "DegiroI-0,25",
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
  ];

  const handleProductClick = (product) => {
    navigate('/detail-product', { state: { product } });
  };

  return (
    <Container className="product-container">
      <Row className="product-box justify-content-center">
        <Row className="align-items-center justify-content-between">
          <Col>
            <h5>Produk Populer</h5>
          </Col>
          <Col xs="auto">
            <Button
              variant="link"
              className="see-all-button"
              as={Link}
              to="/category"
            >
              See All
            </Button>
          </Col>
        </Row>
        <Col xs={12}>
          <Row className="g-3 justify-content-center">
            {products.map((item, index) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={2}
                key={index}
                className="d-flex justify-content-center"
              >
                <Card className="product-card h-100 border-0" onClick={() => handleProductClick(item)}>
                  <Link to={`/product/${item.id}`}>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="product-card-img"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title className="product-name">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="product-description">
                      {item.description}
                    </Card.Text>
                    <Card.Text className="product-price">
                      {item.price}
                    </Card.Text>
                    {quantities[index] === 0 ? (
                      <Button
                        variant="primary"
                        onClick={() => handleAddToCart(index)}
                      >
                        Tambah
                      </Button>
                    ) : (
                      <div className="d-flex justify-content-between align-items-center">
                        <Button
                          variant="outline-primary"
                          onClick={() => handleRemoveFromCart(index)}
                        >
                          <Dash />
                        </Button>
                        <span>{quantities[index]}</span>
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index)}
                        >
                          <Plus />
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
