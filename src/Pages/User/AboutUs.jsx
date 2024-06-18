import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { StarFill, Star } from "react-bootstrap-icons";
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
                    Solusi Terbaik Untuk Kebutuhan Kesehatan Anda
                  </h1>
                  <h4 className="mb-3">
                    Pharmora.id adalah apotek online untuk solusi kesehatan yang
                    modern dan terpercaya.
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
                    Tentang Kami
                  </h3>
                  <p className="lead fs-4 mb-3">
                    Pharmora.id adalah apotek online untuk solusi kesehatan yang
                    modern dan terpercaya, menawarkan beragam produk farmasi
                    berkualitas tinggi dan layanan yang ramah pengguna.
                  </p>
                  <p className="mb-5">
                    Kami adalah perusahaan yang berkembang pesat, namun kami
                    tidak pernah melupakannya nilai-nilai inti kami. Kami
                    percaya pada kolaborasi, inovasi, dan kepuasan pelanggan.
                    Kami selalu mencari cara baru untuk melakukannya
                    meningkatkan produk dan layanan kami.
                  </p>
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
                              Memberikan layanan pelanggan yang ramah,
                              responsif, dan profesional untuk memastikan
                              pengalaman berbelanja yang menyenangkan dan
                              memuaskan.
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
                Kesuksesan Kami
              </h3>
            </Col>
          </Row>
          <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <Col xs={12}>
              <Container fluid className="bg-accent border-0 ">
                <Row>
                  <Col xs={12} md={4} className="p-0">
                    <Card border="0" className="bg-transparent">
                      <Card.Body className="text-center p-4 p-xxl-5">
                        <h3 className="display-4 fw-bold mb-2 fs-1">60+</h3>
                        <p className="fs-6 mb-0 text-secondary">Produk</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={4} className="p-0 border-start border-end">
                    <Card border="0" className="bg-transparent">
                      <Card.Body className="text-center p-4 p-xxl-5">
                        <h3 className="display-4 fw-bold mb-2 fs-1">18rb+</h3>
                        <p className="fs-6 mb-0 text-secondary">
                          Produk Terjual
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={4} className="p-0">
                    <Card border="0" className="bg-transparent">
                      <Card.Body className="text-center p-4 p-xxl-5">
                        <h3 className="display-4 fw-bold mb-2 fs-1">12rb+</h3>
                        <p className="fs-6 mb-0 text-secondary">Pembeli</p>
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
                    Apotek ini menyediakan layanan yang luar biasa. Pesanan saya
                    selalu tiba tepat waktu dan produk-produknya berkualitas
                    tinggi. Saya sangat merekomendasikan apotek ini kepada siapa
                    saja yang membutuhkan solusi kesehatan yang dapat
                    diandalkan.
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <Image
                      className="fluid rounded rounded-circle m-0 border border-5"
                      loading="lazy"
                      src={testimonials01}
                      alt=""
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Luna John</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Pelanggan Setia
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
                    Layanan pelanggan apotek ini sangat responsif dan membantu.
                    Saya berhasil menemukan semua obat yang saya butuhkan dengan
                    bantuan customer service, meskipun beberapa produk sering
                    habis stok.
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <Image
                      className="fluid rounded rounded-circle m-0 border border-5"
                      loading="lazy"
                      src={testimonials02}
                      alt=""
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Mark Smith</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Pengguna Pertama Kali
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
                    Apotek ini memiliki berbagai macam produk kesehatan dan
                    harga yang kompetitif. Namun, terkadang pengirimannya agak
                    lambat, tetapi secara keseluruhan saya cukup puas.
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <Image
                      className="fluid rounded rounded-circle m-0 border border-5"
                      loading="lazy"
                      src={testimonials03}
                      alt=""
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Michael Wilson</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Pengguna Aktif
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
                    Apotek ini membantu saya mendapatkan obat yang sulit
                    ditemukan di tempat lain. Layanan pengirimannya sangat cepat
                    dan terpercaya. Saya akan terus berbelanja di sini.
                  </blockquote>
                  <figure className="d-flex align-items-center m-0 p-0">
                    <Image
                      className="fluid rounded rounded-circle m-0 border border-5"
                      loading="lazy"
                      src={testimonials04}
                      alt=""
                    />
                    <figcaption className="ms-3">
                      <h4 className="mb-1 h5">Luke Reeves</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Pelanggan Aktif
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
