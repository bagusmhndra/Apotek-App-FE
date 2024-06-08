import React, { useState } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  const initialQuantities = new Array(6).fill(0);
  const [quantities, setQuantities] = useState(initialQuantities);

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

  const categories = [
    { name: "Obat", icon: "💊", path: "/obat" },
    { name: "Suplemen", icon: "🧴", path: "/suplemen" },
    { name: "Nutrisi", icon: "⚡", path: "/nutrisi" },
    { name: "Herbal", icon: "🌿", path: "/herbal" },
    { name: "Produk Bayi", icon: "🍼", path: "/produk-bayi" },
    { name: "Alat Kesehatan", icon: "🚑", path: "/alat-kesehatan" },
  ];

  const diagnosis = [
    {
      image: "../../assets/diagnosis01.png",
      name: "Anti Nyeri",
      path: "/anti-nyeri",
    },
    {
      image: "../../assets/diagnosis02.png",
      name: "Diabetes",
      path: "/diabetes",
    },
    {
      image: "../../assets/diagnosis03.png",
      name: "Hipertensi",
      path: "/hipertensi",
    },
    {
      image: "../../assets/diagnosis04.png",
      name: "Jantung",
      path: "/jantung",
    },
    {
      image: "../../assets/diagnosis05.png",
      name: "Diet",
      path: "/diet",
    },
    {
      image: "../../assets/diagnosis06.png",
      name: "Batuk & Flu",
      path: "/batuk-flu",
    },
  ];

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

  return (
    <>
      {/* CAROUSEL */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 carousel-image"
              src="../../assets/carousel01.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Pharmora.id</h3>
              <p>
                Pharmora.id adalah apotek online untuk solusi kesehatan yang
                modern dan terpercaya.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 carousel-image"
              src="../../assets/carousel02.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Pharmora.id</h3>
              <p>
                Pharmora.id adalah apotek online untuk solusi kesehatan yang
                modern dan terpercaya.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 carousel-image"
              src="../../assets/carousel03.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Pharmora.id</h3>
              <p>
                Pharmora.id adalah apotek online untuk solusi kesehatan yang
                modern dan terpercaya.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* KATEGORI */}
      <Container className="py-5 category-container">
        <Row className="justify-content-center category-box">
          <Col xs={12}>
            <Row className="align-items-center justify-content-between">
              <Col>
                <h5>Kategori</h5>
              </Col>
              <Col xs="auto">
                <Button
                  variant="link"
                  className="see-all-button"
                  Link
                  as={Link}
                  to="/category"
                >
                  See All
                </Button>
              </Col>
            </Row>
            <Row className="g-3 justify-content-center">
              {categories.map((category) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={category.name}
                  className="d-flex justify-content-center"
                >
                  <Card className="h-100 category-card border-0">
                    <Link
                      to={category.path}
                      className="text-decoration-none text-dark"
                    >
                      <Card.Body className="d-flex flex-column align-items-center">
                        <div className="display-6 category-icon">
                          {category.icon}
                        </div>
                        <Card.Title className="mt-3 category-name">
                          {category.name}
                        </Card.Title>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* ARTICLES */}
      <Container>
        <Row className="justify-content-center custom-row">
          <Col className="custom-col mb-3">
            <Card className="custom-card border-0">
              <Card.Body>
                <Card.Title>Temukan Artikel Anda</Card.Title>
                <Card.Text>
                  Temukan artikel tentang kesehatan yang anda cari lewat artikel
                  kami.
                </Card.Text>
                <Button Link as={Link} to="/" variant="primary">
                  Baca
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="custom-col mb-3">
            <Card className="custom-card border-0">
              <Card.Body>
                <Card.Title>Bingung Pilih Obat?</Card.Title>
                <Card.Text>
                  Biarkan apoteker kami membantu menemukan obat yang tepat.
                </Card.Text>
                <Button Link as={Link} to="/contact" variant="primary">
                  Chat
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* DIAGNOSIS */}
      <Container className="diagnosis-container">
        <Row className="diagnosis-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Diagnosis</h5>
            </Col>
            <Col xs="auto">
              <Button
                variant="link"
                className="see-all-button"
                Link
                as={Link}
                to="/diagnosis"
              >
                See All
              </Button>
            </Col>
          </Row>
          <Col xs={12}>
            <Row className="g-3 justify-content-center">
              {diagnosis.map((item, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  className="d-flex justify-content-center"
                >
                  <Card key={index} className="diagnosis-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="diagnosis-card-img"
                      />
                      <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                        <Card.Title className="diagnosis-name p-2">
                          {item.name}
                        </Card.Title>
                      </Card.ImgOverlay>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* PRODUK */}
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
                to="/products"
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
    </>
  );
};

export default Home;
