import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { Plus, Dash, Cart4 } from "react-bootstrap-icons";
import "../../assets/css/DetailProduct.css";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Category = () => {
  const initialQuantities = new Array(6).fill(0);
  const [quantities, setQuantities] = useState(initialQuantities);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    {
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/detail-product",
    },
    {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/detail-product",
      },


  ];

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleAddToCart = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      setTotalQuantity(totalQuantity + 1);
      setTotalPrice(totalPrice + products[index].price);
      return newQuantities;
    });
  };

  const handleRemoveFromCart = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
        setTotalQuantity(totalQuantity - 1);
        setTotalPrice(totalPrice - products[index].price);
      }
      return newQuantities;
    });
  };

  return (
    <>
    <Header />
      <Container className="shop">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/category" }}>Kategori</Breadcrumb.Item>
          <Breadcrumb.Item active>Vitamin C</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* PRODUK */}
      <Container className="product-container">
        <Row className="product-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Produk Populer</h5>
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
                  <Card className="product-card h-100 border-0">
                    <Link to={item.path}>
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
                        {formatRupiah(item.price)}
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

      <div className="cart-icon">
        <Cart4 size={50} />
        {totalQuantity > 0 && (
          <>
            <span className="cart-count">{totalQuantity}</span>
            <span className="cart-price">{formatRupiah(totalPrice)}</span>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Category;
