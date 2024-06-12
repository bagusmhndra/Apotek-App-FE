import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Product = () => {
  const navigate = useNavigate();

  const products = [
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
      title: "DegiroI 0,35 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,45 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,55 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,65 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,75 mg 10 Tablet",
      description: "/Strip",
      price: "Rp16.297",
      freeShipping: true,
    },
  ];

  const handleProductClick = (product) => {
    navigate("/products/detail-product", { state: { product } });
  };

  return (
    <>
      <Header />
      <Container className="product-container">
        <Row className="product-box justify-content-center mb-3">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Populer</h5>
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
                  <Card
                    className="product-card h-100 border-0 shadow"
                    onClick={() => handleProductClick(item)}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="product-card-img"
                    />
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

                      <Button variant="outline-primary" className="pe-3 ps-3">
                        + Tambah
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="product-box justify-content-center mb-3">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Vitamin C</h5>
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
                  <Card
                    className="product-card h-100 border-0 shadow"
                    onClick={() => handleProductClick(item)}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="product-card-img"
                    />
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

                      <Button variant="outline-primary" className="pe-3 ps-3">
                        + Tambah
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="product-box justify-content-center mb-3">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Suplemen Daya Tahan Tubuh</h5>
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
                  <Card
                    className="product-card h-100 border-0 shadow"
                    onClick={() => handleProductClick(item)}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="product-card-img"
                    />
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

                      <Button variant="outline-primary" className="pe-3 ps-3">
                        + Tambah
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="product-box justify-content-center mb-3">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Obat Demam</h5>
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
                  <Card
                    className="product-card h-100 border-0 shadow"
                    onClick={() => handleProductClick(item)}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="product-card-img"
                    />
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

                      <Button variant="outline-primary" className="pe-3 ps-3">
                        + Tambah
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
