import React, { useEffect, useRef, useState } from "react";
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
import api from "../../api";

const Home = () => {
  const navigate = useNavigate();
  const crispScriptRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/category');
        setCategories(response.data.category);
        console.log(setCategories)
      } catch (error) {
        console.error("There was an error fetching the categories!", error);
      }
    };

    fetchCategories();
  }, []);

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

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

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
            </Row>
            <Row className="g-3 justify-content-center">
              {categories.map((category) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={category.id_category}
                  className="d-flex justify-content-center"
                >
                  <Card className="h-100 category-card border-0">
                    <Link
                      to={`/products/${category.id_category}`}
                      className="text-decoration-none text-dark"
                    >
                      <Card.Body className="d-flex flex-column align-items-center">
                        <div className="display-6 category-icon">
                          {category.icon || "📦"} {/* Placeholder icon */}
                        </div>
                        <Card.Title className="mt-3 category-name">
                          {category.name_category}
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
              <Col xs="auto">
                <Button
                  variant="link"
                  className="see-all-button"
                  Link
                  as={Link}
                  to="/products"
                >
                  See All
                </Button>
              </Col>
            </Row>

            <Row className="g-3 justify-content-center">
              {products.slice(0, 6).map((product, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={product.id}
                  className="d-flex justify-content-center"
                >
                  <Card
                    className="product-card h-100 border-0"
                    onClick={() => handleProductClick(product)}
                  >
                    <Card.Img
                      variant="top"
                      src={`${product.image}`}
                      className="product-card-img"
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <Card.Title className="product-name">
                        {product.productName}
                      </Card.Title>
                      <Card.Text className="product-price">
                        {formatRupiah(product.price)}
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
