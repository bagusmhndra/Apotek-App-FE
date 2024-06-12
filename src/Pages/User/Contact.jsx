import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  Envelope,
  Geo,
  TelephoneOutbound,
  ClockHistory,
} from "react-bootstrap-icons";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Contact = () => {
  return (
    <>
    <Header/>
      <section
        id="scrollspyContact"
        className="py-4 py-md-4 py-xl-8 pb-xxl-0 bsb-section-pt-xxl-1"
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
      <Footer/>
    </>
  );
};

export default Contact;
