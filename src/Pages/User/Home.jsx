import React, { useEffect, useRef } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";
import carousel01 from "../../assets/img/carousel01.png";
import carousel02 from "../../assets/img/carousel02.png";
import carousel03 from "../../assets/img/carousel03.png";
import diagnosis01 from "../../assets/img/diagnosis01.png";
import diagnosis02 from "../../assets/img/diagnosis02.png";
import diagnosis03 from "../../assets/img/diagnosis03.png";
import diagnosis04 from "../../assets/img/diagnosis04.png";
import diagnosis05 from "../../assets/img/diagnosis05.png";
import diagnosis06 from "../../assets/img/diagnosis06.png";
import "../../assets/css/Home.css";

const Home = () => {
  const crispScriptRef = useRef(null);

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "f600f12a-1169-4a87-a8e8-801e93fcc920";
    crispScriptRef.current = document.createElement("script");
    crispScriptRef.current.src = "https://client.crisp.chat/l.js";
    crispScriptRef.current.async = 1;
    document.getElementsByTagName("head")[0].appendChild(crispScriptRef.current);

    return () => {
      if (crispScriptRef.current) {
        document.getElementsByTagName("head")[0].removeChild(crispScriptRef.current);
        delete window.$crisp;
        delete window.CRISP_WEBSITE_ID;
      }
    };
  }, []);
  const navigate = useNavigate();

  const categories = [
    { name: "Obat", icon: "💊", path: "/vitamin" },
    { name: "Suplemen", icon: "🧴", path: "/vitamin" },
    { name: "Nutrisi", icon: "⚡", path: "/vitamin" },
    { name: "Herbal", icon: "🌿", path: "/vitamin" },
    { name: "Produk Bayi", icon: "🍼", path: "/vitamin" },
    { name: "Alat Kesehatan", icon: "🚑", path: "/vitamin" },
  ];

  const diagnosis = [
    {
      image: diagnosis01,
      name: "TBC",
      path: "https://www.biofarma.co.id/id/announcement/detail/tuberkulosis-tbc-gejala-penyebab-dan-pengobatan",
    },
    {
      image: diagnosis02,
      name: "Diabetes",
      path: "https://www.biofarma.co.id/id/announcement/detail/diabetes-gejala-penyebab-dan-pencegahan/diabetes",
    },
    {
      image: diagnosis03,
      name: "Kanker",
      path: "https://www.biofarma.co.id/id/announcement/detail/ciri-kanker-pada-anak",
    },
    {
      image: diagnosis04,
      name: "Jantung",
      path: "https://www.biofarma.co.id/id/announcement/detail/penyakit-jantung-ciri-penyebab-dan-pencegahan",
    },
    {
      image: diagnosis05,
      name: "HIV AIDS",
      path: "https://www.biofarma.co.id/id/announcement/detail/hiv-aids-penyebab-gejala-dan-pencegahan",
    },
    {
      image: diagnosis06,
      name: "Batuk & Flu",
      path: "https://www.biofarma.co.id/id/announcement/detail/bagaimana-menangani-flu-pada-anak-yuk-simak-artikel-berikut",
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
      {/* CAROUSEL */}
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 carousel-image"
              src={carousel02}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 carousel-image"
              src={carousel01}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 carousel-image"
              src={carousel03}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* KATEGORI */}
      <Container className="py-3 py-md-5 py-xl-8 pb-xxl-0 bsb-section-pt-xxl-1 category-container">
        <Row className="justify-content-center category-box border-0">
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
      <Container className="py-3 py-md-5 py-xl-8 pb-xxl-0 bsb-section-pt-xxl-1 diagnosis-container">
        <Row className="diagnosis-box justify-content-center">
          <Col xs={12}>
            <Row className="align-items-center justify-content-between">
              <Col>
                <h5>Artikel Populer</h5>
              </Col>
              <Col xs="auto">
                <Button
                  variant="link"
                  className="see-all-button"
                  Link
                  as={Link}
                  to="https://www.biofarma.co.id/id/artikel-kesehatan"
                >
                  See All
                </Button>
              </Col>
            </Row>

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
      <Container className="py-3 py-md-5 py-xl-8 pb-xxl-0 bsb-section-pt-xxl-1 product-container">
        <Row className="product-box justify-content-center">
          <Col xs={12}>
            <Row className="align-items-center justify-content-between">
              <Col>
                <h5>Produk Populer</h5>
              </Col>
            </Row>

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
                    className="product-card h-100 border-0"
                    onClick={() => handleProductClick(item)}
                  >
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

export default Home;
