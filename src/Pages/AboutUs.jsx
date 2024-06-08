import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import {
  Envelope,
  Geo,
  TelephoneOutbound,
  ClockHistory,
} from "react-bootstrap-icons";
//import { Link } from "react-router-dom";
import "../css/About.css";

const About = () => {
  return (
    <section>
      {/* HERO */}
      <div
        className="text-center bg-image"
        style={{
          backgroundImage: "url('../../assets/about01.png')",
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
      <Container className="mt-5">
        <Row className="gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <Col xs={12} lg={6} xl={5}>
            <Image
              fluid
              rounded
              src="../../assets/about02.png"
              alt="About 1"
              loading="lazy"
            />
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
                  Kami adalah perusahaan yang berkembang pesat, namun kami tidak
                  pernah melupakannya nilai-nilai inti kami. Kami percaya pada
                  kolaborasi, inovasi, dan kepuasan pelanggan. Kami selalu
                  mencari cara baru untuk melakukannya meningkatkan produk dan
                  layanan kami.
                </p>
                <Row className="gy-4 gy-md-0 gx-xxl-5X">
                  <Col xs={12} md={6}>
                    <Card className="shadow border-0">
                      <Card.Body className="d-flex align-items-start">
                        <div>
                          <h4 className="h4 mb-3">Visi</h4>
                          <p className="text-secondary mb-0">
                            Menjadi apotek online terdepan di Indonesia yang
                            memberikan solusi kesehatan terbaik dengan pelayanan
                            yang unggul, inovatif, dan terpercaya.
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} md={6}>
                    <Card className="shadow border-0">
                      <Card.Body className="d-flex align-items-start">
                        <div>
                          <h4 className="h4 mb-3">Misi</h4>
                          <p className="text-secondary mb-0">
                            Memberikan layanan pelanggan yang ramah, responsif,
                            dan profesional untuk memastikan pengalaman
                            berbelanja yang menyenangkan dan memuaskan.
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
      <section class="bsb-fact-5 py-3 py-md-5 py-xl-8 pb-xxl-0 bsb-section-pt-xxl-1">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7">
              <h3 class="fs-4 m-4 text-secondary text-center text-uppercase">
                Testimonial
              </h3>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="container-fluid bg-accent border-0 shadow">
                <div class="row">
                  <div class="col-12 col-md-4 p-0">
                    <div class="card border-0 bg-transparent">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class="display-4 fw-bold mb-2">60+</h3>
                        <p class="fs-5 mb-0 text-secondary">Produk</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 p-0 border-start border-end">
                    <div class="card border-0 bg-transparent">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class="display-4 fw-bold mb-2">18rb+</h3>
                        <p class="fs-5 mb-0 text-secondary">Produk Terjual</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 p-0">
                    <div class="card border-0 bg-transparent">
                      <div class="card-body text-center p-4 p-xxl-5">
                        <h3 class="display-4 fw-bold mb-2">12rb+</h3>
                        <p class="fs-5 mb-0 text-secondary">Pembeli</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="scrollspyContact"
        className="py-3 py-md-5 py-xl-8 pb-xxl-0 bsb-section-pt-xxl-1"
      >
        <Container>
          <Row>
            <Col xs={12} md={10} lg={8}>
              <h3 className="fs-4 mb-3 text-secondary text-uppercase">
                Kontak Kami
              </h3>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="gy-4 gy-md-5 gy-lg-0 align-items-md-center">
            <Col xs={12} lg={6}>
              <div className="bg-accent shadow border-0 overflow-hidden">
                <Form action="#!">
                  <Row className="gy-4 gy-xl-5 p-4 p-xl-5">
                    <Col xs={12}>
                      <Form.Group controlId="fullname">
                        <Form.Label>
                          Nama Lengkap<span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="email">
                        <Form.Label>
                          Email <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="email" required />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group controlId="phone">
                        <Form.Label>No. Telepon</Form.Label>
                        <Form.Control type="tel" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="subject">
                        <Form.Label>
                          Judul <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="message">
                        <Form.Label>
                          Pesan <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} required />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <div className="d-grid">
                        <Button variant="primary" size="lg" type="submit">
                          Kirim Pesan
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>

            <Col xs={12} lg={6}>
              <Row className="justify-content-xl-center">
                <Col xs={12} xl={11}>
                  <div className="mb-4 mb-md-5">
                    <div className="mb-3 text-primary">
                      <Geo size={32} />
                    </div>
                    <div>
                      <h4 className="mb-2">Kantor</h4>
                      <hr className="w-50 mb-3 border-dark-subtle" />
                      <address className="m-0 text-secondary">
                        Jakarta, Indonesia
                      </address>
                    </div>
                  </div>
                  <div className="row mb-sm-4 mb-md-5">
                    <Col xs={12} sm={6}>
                      <div className="mb-4 mb-sm-0">
                        <div className="mb-3 text-primary">
                          <TelephoneOutbound size={32} />
                        </div>
                        <div>
                          <h4 className="mb-2">No. Telepon</h4>
                          <hr className="w-50 my-3 border-dark-subtle" />
                          <p className="mb-0 text-secondary">
                            +62 1234 5678 9101
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={6}>
                      <div>
                        <div className="mb-3 text-primary">
                          <Envelope size={32} />
                        </div>
                        <div>
                          <h4 className="mb-2">Email</h4>
                          <hr className="w-50 my-3 border-dark-subtle" />
                          <p className="mb-0 text-secondary">
                            pharmora.id@help.com
                          </p>
                        </div>
                      </div>
                    </Col>
                  </div>
                  <div>
                    <div className="mb-3 text-primary">
                      <ClockHistory size={32} />
                    </div>
                    <div>
                      <h4 className="mb-2">Jam Kerja</h4>
                      <hr className="w-50 my-3 border-dark-subtle" />
                      <p className="mb-2 text-secondary">
                        Sen - Jum: 9:00 - 17:00
                      </p>
                      <p className="m-0 text-secondary">Sab - Min: Tutup</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default About;
