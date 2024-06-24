import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { StarFill, Star } from "react-bootstrap-icons";
import about01 from "../../Assets/img/about01.png";
import about02 from "../../Assets/img/about02.png";
import testimonials01 from "../../Assets/img/testimonial-img-1.png";
import testimonials02 from "../../Assets/img/testimonial-img-2.png";
import testimonials03 from "../../Assets/img/testimonial-img-3.png";
import testimonials04 from "../../Assets/img/testimonial-img-4.png";
import "../../Assets/css/About.css";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const About = () => {
  const StarRating = ({ stars }) => {
    const filledStars = Array(stars).fill(true);
    const emptyStars = Array(5 - stars).fill(false);
    const allStars = [...filledStars, ...emptyStars];

    return (
      <div className="bsb-ratings text-warning mb-3">
        {allStars.map((filled, index) => (
          <span key={index}>{filled ? <StarFill /> : <Star />}</span>
        ))}
      </div>
    );
  };

  return (
    <>
      <Header />
      <section>
        {/* HERO */}
        <div
          className="text-center bg-image"
          style={{
            backgroundImage: `url(${about01})`,
            height: 600,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: "100%" }}
          >
            <Container className="h-100">
              <Row className="d-flex justify-content-center align-items-center h-100">
                <Col className="text-white">
                  <h1 className="mb-3">
                    The Best Solution for Your Health Needs
                  </h1>
                  <h4 className="mb-3">
                    Pharmora.id is an online pharmacy for modern and trusted health solutions.
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* ABOUT US */}
        <Container className="mt-5 about-container">
          <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <Col xs={12} lg={6} xl={5}>
              <Image fluid rounded src={about02} alt="About 2" loading="lazy" />
            </Col>
            <Col xs={12} lg={6} xl={7}>
              <Row className="justify-content-xl-center">
                <Col xs={12} xl={11}>
                  <h3 className="fs-4 mb-3 text-secondary text-uppercase">
                    About Us
                  </h3>
                  <p className="lead fs-4 mb-3">
                    Pharmora.id is an online pharmacy for modern and trusted health solutions, offering a wide range of high-quality pharmaceutical products and user-friendly services.
                  </p>
                  <p className="mb-5">
                    We are a rapidly growing company, but we never forget our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.
                  </p>
                  <Row className="gy-4 gy-md-0 gx-xxl-5X">
                    <Col xs={12} md={6}>
                      <Card className="border-0 shadow">
                        <Card.Body className="d-flex align-items-start">
                          <div>
                            <h4 className="h4 mb-3">Vision</h4>
                            <p className="text-secondary mb-0">
                              To become the leading online pharmacy in Indonesia providing the best health solutions with excellent, innovative, and trusted services.
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} md={6}>
                      <Card className="border-0 shadow">
                        <Card.Body className="d-flex align-items-start">
                          <div>
                            <h4 className="h4 mb-3">Mission</h4>
                            <p className="text-secondary mb-0">
                              To provide friendly, responsive, and professional customer service to ensure a pleasant and satisfying shopping experience.
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        {/* OUR SUCCESS */}
        <Container className="mt-5 penjualan-container">
          <Row className="justify-content-md-center">
            <Col xs={12} md={10} lg={8} xl={7}>
              <h3 className="fs-4 m-4 text-secondary text-center text-uppercase">
                Our Success
              </h3>
            </Col>
          </Row>
          <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <Col xs={12}>
              <Container fluid className="bg-accent border-0">
                <Row>
                  <Col xs={12} md={4} className="p-0">
                    <Card border="0" className="bg-transparent">
                      <Card.Body className="text-center p-4 p-xxl-5">
                        <h3 className="display-4 fw-bold mb-2 fs-1">60+</h3>
                        <p className="fs-6 mb-0 text-secondary">Products</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={4} className="p-0 border-start border-end">
                    <Card border="0" className="bg-transparent">
                      <Card.Body className="text-center p-4 p-xxl-5">
                        <h3 className="display-4 fw-bold mb-2 fs-1">18K+</h3>
                        <p className="fs-6 mb-0 text-secondary">
                          Products Sold
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={4} className="p-0">
                    <Card border="0" className="bg-transparent">
                      <Card.Body className="text-center p-4 p-xxl-5">
                        <h3 className="display-4 fw-bold mb-2 fs-1">12K+</h3>
                        <p className="fs-6 mb-0 text-secondary">Buyers</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        {/* TESTIMONIALS */}
        <Container className="mt-5 testi-container">
          <Row>
            <Col xs={12} md={10} lg={8}>
              <h3 className="fs-4 mb-3 text-secondary text-uppercase">
                Testimonials
              </h3>
            </Col>
          </Row>
        </Container>

        <Container className="overflow-hidden testi-container">
          <Row className="gy-3 gy-lg-4">
            <Col xs={12} lg={6}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4 p-xxl-5">
                  <StarRating stars={5} />
                  <blockquote className="bsb-blockquote-icon mb-3">
                    This pharmacy provides excellent service. My orders always arrive on time and the products are of high quality. I highly recommend this pharmacy to anyone in need of reliable health solutions.
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <Image
                      className="fluid rounded rounded-circle m-0 border border-5"
                      loading="lazy"
                      src={testimonials01}
                      alt=""
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Salsabila Putri</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Loyal Customer
                      </h5>
                    </figcaption>
                  </figure>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card className="border-0 shadow">
                <Card.Body className="p-4 p-xxl-5">
                  <StarRating stars={3} />
                  <blockquote className="bsb-blockquote-icon mb-3">
                    The customer service of this pharmacy is very responsive and helpful. I managed to find all the medications I needed with the help of customer service, although some products are often out of stock.
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <Image
                      className="fluid rounded rounded-circle m-0 border border-5"
                      loading="lazy"
                      src={testimonials02}
                      alt=""
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Orvala Putra</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        First-Time User
                      </h5>
                    </figcaption>
                  </figure>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card className="border-0 shadow mb-3">
                <Card.Body className="p-4 p-xxl-5">
                  <StarRating stars={4} />
                  <blockquote className="bsb-blockquote-icon mb-3">
                    This pharmacy has a wide variety of health products and competitive prices. However, sometimes the delivery is a bit slow, but overall I am quite satisfied.
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <Image
                      className="fluid rounded rounded-circle m-0 border border-5"
                      loading="lazy"
                      src={testimonials03}
                      alt=""
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Restu Saputra</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Active User
                      </h5>
                    </figcaption>
                  </figure>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card className="border-0 shadow mb-3">
                <Card.Body className="p-4 p-xxl-5">
                  <StarRating stars={5} />
                  <blockquote className="bsb-blockquote-icon mb-3">
                    This pharmacy helps me get medications that are hard to find elsewhere. The delivery service is very fast and reliable. I will continue to shop here.
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <Image
                      className="fluid rounded rounded-circle m-0 border border-5"
                      loading="lazy"
                      src={testimonials04}
                      alt=""
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Novita</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Active Customer
                      </h5>
                    </figcaption>
                  </figure>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
