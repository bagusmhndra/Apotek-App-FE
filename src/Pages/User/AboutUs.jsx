import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { StarFill, Star } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import about01 from "../../assets/img/about01.png";
import about02 from "../../assets/img/about02.png";
import testimonials01 from "../../assets/img/testimonial-img-1.png";
import testimonials02 from "../../assets/img/testimonial-img-2.png";
import testimonials03 from "../../assets/img/testimonial-img-3.png";
import testimonials04 from "../../assets/img/testimonial-img-4.png";
import "../../assets/css/About.css";
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Header />
      <section>
        {/* HERO */}
        <motion.div
          className="text-center bg-image"
          style={{
            backgroundImage: `url(${about01})`,
            height: 800,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: "100%" }}
          >
            <Container className="h-100">
              <motion.div
                className="d-flex justify-content-center align-items-center h-100"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <Col className="text-white">
                  <motion.h1 className="mb-3" variants={fadeInUp}>
                    Solusi Terbaik Untuk Kebutuhan Kesehatan Anda
                  </motion.h1>
                  <motion.h4 className="mb-3" variants={fadeInUp}>
                    Pharmora.id adalah apotek online untuk solusi kesehatan yang
                    modern dan terpercaya.
                  </motion.h4>
                </Col>
              </motion.div>
            </Container>
          </div>
        </motion.div>

        {/* ABOUT US */}
        <Container className="mt-5 about-container">
          <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <Col xs={12} lg={6} xl={5}>
              <motion.div variants={fadeInUp} className="about-image-container">
                <Image
                  fluid
                  rounded
                  src={about02}
                  alt="About 2"
                  loading="lazy"
                />
              </motion.div>
            </Col>
            <Col xs={12} lg={6} xl={7}>
              <Row className="justify-content-xl-center">
                <Col xs={12} xl={11}>
                  <motion.h3
                    className="fs-4 mb-3 text-secondary text-uppercase"
                    variants={fadeInUp}
                  >
                    Tentang Kami
                  </motion.h3>
                  <motion.p className="lead fs-4 mb-3" variants={fadeInUp}>
                    Pharmora.id adalah apotek online untuk solusi kesehatan yang
                    modern dan terpercaya, menawarkan beragam produk farmasi
                    berkualitas tinggi dan layanan yang ramah pengguna.
                  </motion.p>
                  <motion.p className="mb-5" variants={fadeInUp}>
                    Kami adalah perusahaan yang berkembang pesat, namun kami
                    tidak pernah melupakan nilai-nilai inti kami. Kami percaya
                    pada kolaborasi, inovasi, dan kepuasan pelanggan. Kami
                    selalu mencari cara baru untuk meningkatkan produk dan
                    layanan kami.
                  </motion.p>
                  <Row className="gy-4 gy-md-0 gx-xxl-5X">
                    <Col xs={12} md={6}>
                      <Card className="border-0 shadow">
                        <Card.Body className="d-flex align-items-start">
                          <div>
                            <h4 className="h4 mb-3">Visi</h4>
                            <p className="text-secondary mb-0">
                              Menjadi apotek online terdepan di Indonesia yang
                              memberikan solusi kesehatan terbaik dengan
                              pelayanan yang unggul, inovatif, dan terpercaya.
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} md={6}>
                      <Card className="border-0 shadow">
                        <Card.Body className="d-flex align-items-start">
                          <div>
                            <h4 className="h4 mb-3">Misi</h4>
                            <p className="text-secondary mb-0">
                              Memberikan layanan pelanggan yang ramah dan
                              profesional untuk memastikan pengalaman berbelanja
                              yang menyenangkan dan memuaskan.
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
              <motion.h3
                className="fs-4 m-4 text-secondary text-center text-uppercase"
                variants={fadeInUp}
              >
                Kesuksesan Kami
              </motion.h3>
            </Col>
          </Row>
          <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <Col xs={12}>
              <Container fluid className="bg-accent border-0 ">
                <Row>
                  <Col xs={12} md={4} className="p-0">
                    <motion.div variants={fadeInUp}>
                      <Card border="0" className="bg-transparent">
                        <Card.Body className="text-center p-4 p-xxl-5">
                          <h3 className="display-4 fw-bold mb-2 fs-1">60+</h3>
                          <p className="fs-6 mb-0 text-secondary">Produk</p>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={12} md={4} className="p-0 border-start border-end">
                    <motion.div variants={fadeInUp}>
                      <Card border="0" className="bg-transparent">
                        <Card.Body className="text-center p-4 p-xxl-5">
                          <h3 className="display-4 fw-bold mb-2 fs-1">18rb+</h3>
                          <p className="fs-6 mb-0 text-secondary">
                            Produk Terjual
                          </p>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                  <Col xs={12} md={4} className="p-0">
                    <motion.div variants={fadeInUp}>
                      <Card border="0" className="bg-transparent">
                        <Card.Body className="text-center p-4 p-xxl-5">
                          <h3 className="display-4 fw-bold mb-2 fs-1">12rb+</h3>
                          <p className="fs-6 mb-0 text-secondary">Pembeli</p>
                        </Card.Body>
                      </Card>
                    </motion.div>
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
              <motion.h3
                className="fs-4 mb-3 text-secondary text-uppercase"
                variants={fadeInUp}
              >
                Testimonials
              </motion.h3>
            </Col>
          </Row>
        </Container>

        <Container className="overflow-hidden testi-container">
          <Row className="gy-3 gy-lg-4">
            <Col xs={12} lg={6}>
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow">
                  <Card.Body className="p-4 p-xxl-5">
                    <StarRating stars={5} />
                    <blockquote className="bsb-blockquote-icon mb-3">
                      Apotek ini meny ediakan layanan yang luar biasa. Pesanan
                      saya selalu tiba tepat waktu dan produk-produknya
                      berkualitas tinggi. Saya sangat merekomendasikan apotek
                      ini kepada siapa saja yang membutuhkan solusi kesehatan
                      yang dapat diandalkan.
                    </blockquote>
                    <motion.figure
                      className="d-flex align-items-center m-0 p-0"
                      variants={fadeInUp}
                    >
                      <Image
                        className="fluid rounded rounded-circle m-0 border border-5"
                        loading="lazy"
                        src={testimonials01}
                        alt=""
                      />
                      <figcaption className="ms-3">
                        <motion.h4 className="mb-1 h5" variants={fadeInUp}>
                          Luna John
                        </motion.h4>
                        <motion.h5
                          className="fs-6 text-secondary mb-0"
                          variants={fadeInUp}
                        >
                          Pelanggan Setia
                        </motion.h5>
                      </figcaption>
                    </motion.figure>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col xs={12} lg={6}>
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow">
                  <Card.Body className="p-4 p-xxl-5">
                    <StarRating stars={3} />
                    <blockquote className="bsb-blockquote-icon mb-3">
                      Layanan pelanggan apotek ini sangat responsif dan
                      membantu. Saya berhasil menemukan semua obat yang saya
                      butuhkan dengan bantuan customer service, meskipun
                      beberapa produk sering habis stok.
                    </blockquote>
                    <motion.figure
                      className="d-flex align-items-center m-0 p-0"
                      variants={fadeInUp}
                    >
                      <Image
                        className="fluid rounded rounded-circle m-0 border border-5"
                        loading="lazy"
                        src={testimonials02}
                        alt=""
                      />
                      <figcaption className="ms-3">
                        <motion.h4 className="mb-1 h5" variants={fadeInUp}>
                          Mark Smith
                        </motion.h4>
                        <motion.h5
                          className="fs-6 text-secondary mb-0"
                          variants={fadeInUp}
                        >
                          Pengguna Pertama Kali
                        </motion.h5>
                      </figcaption>
                    </motion.figure>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col xs={12} lg={6}>
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow mb-3">
                  <Card.Body className="p-4 p-xxl-5">
                    <StarRating stars={4} />
                    <blockquote className="bsb-blockquote-icon mb-3">
                      Apotek ini memiliki berbagai macam produk kesehatan dan
                      harga yang kompetitif. Namun, terkadang pengirimannya agak
                      lambat, tetapi secara keseluruhan saya cukup puas.
                    </blockquote>
                    <motion.figure
                      className="d-flex align-items-center m-0 p-0"
                      variants={fadeInUp}
                    >
                      <Image
                        className="fluid rounded rounded-circle m-0 border border-5"
                        loading="lazy"
                        src={testimonials03}
                        alt=""
                      />
                      <figcaption className="ms-3">
                        <motion.h4 className="mb-1 h5" variants={fadeInUp}>
                          Michael Wilson
                        </motion.h4>
                        <motion.h5
                          className="fs-6 text-secondary mb-0"
                          variants={fadeInUp}
                        >
                          Pengguna Aktif
                        </motion.h5>
                      </figcaption>
                    </motion.figure>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col xs={12} lg={6}>
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow mb-3">
                  <Card.Body className="p-4 p-xxl-5">
                    <StarRating stars={5} />
                    <blockquote className="bsb-blockquote-icon mb-3">
                      Apotek ini membantu saya mendapatkan obat yang sulit
                      ditemukan di tempat lain. Layanan pengirimannya sangat
                      cepat dan terpercaya. Saya akan terus berbelanja di sini.
                    </blockquote>
                    <motion.figure
                      className="d-flex align-items-center m-0 p-0"
                      variants={fadeInUp}
                    >
                      <Image
                        className="fluid rounded rounded-circle m-0 border border-5"
                        loading="lazy"
                        src={testimonials04}
                        alt=""
                      />
                      <figcaption className="ms-3">
                        <motion.h4 className="mb-1 h5" variants={fadeInUp}>
                          Luke Reeves
                        </motion.h4>
                        <motion.h5
                          className="fs-6 text-secondary mb-0"
                          variants={fadeInUp}
                        >
                          Pelanggan Aktif
                        </motion.h5>
                      </figcaption>
                    </motion.figure>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
