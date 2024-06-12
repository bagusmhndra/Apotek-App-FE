import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  House,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-center text-lg-start text-light">
      <Container className="text-center text-md-start mt-5 ">
        <section className="d-flex justify-content-between align-items-center p-4 mb-0 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>
              <h6>Terhubung dengan kami di sosial media:</h6>
            </span>
          </div>

          <div>
            <Link
              as={Link}
              to="https://www.facebook.com"
              className="me-4 text-reset"
            >
              <Facebook color="white" />
            </Link>
            <Link as={Link} to="https://www.x.com" className="me-4 text-reset">
              <Twitter color="white" />
            </Link>
            <Link
              as={Link}
              to="https://www.google.com"
              className="me-4 text-reset"
            >
              <Google color="white" />
            </Link>
            <Link
              as={Link}
              to="https://www.instagram.com"
              className="me-4 text-reset"
            >
              <Instagram color="white" />
            </Link>
          </div>
        </section>
        <Row className="mt-5 mb-5">
          <Col md="3" lg="4" xl="3" className="mx-auto mb-4 ">
            <h6 className="text-uppercase fw-bold mb-4">PHARMORA.ID</h6>
            <p>
              Pharmora.id adalah apotek online untuk solusi kesehatan yang
              modern dan terpercaya.
            </p>
          </Col>

          <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Lainnya</h6>
            <p>
              <Link as={Link} to="/about-us" className="text-reset">
                Tentang Kami
              </Link>
            </p>
            <p>
              <Link as={Link} to="/contact" className="text-reset">
                Chat Kami
              </Link>
            </p>
            <p>
              <Link as={Link} to="/category" className="text-reset">
                Kategori
              </Link>
            </p>
            <p>
              <Link as={Link} to="/diagnosis" className="text-reset">
                Diagnosis
              </Link>
            </p>
          </Col>

          <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <House color="white" className="me-3" />
              Jakarta, Indonesia
            </p>
            <p>
              <Envelope color="white" className="me-3" />
              pharmora.id@help.com
            </p>
            <p>
              <Telephone color="white" className="me-3" />
              +62 12345678910
            </p>
          </Col>

          <Col md="3" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
            <div className="widget">
              <h6 className="text-uppercase fw-bold mb-4">Our Newsletter</h6>
              <p className="mb-4">
                Subscribe to our newsletter to get our news & discounts
                delivered to you.
              </p>
              <form action="#!">
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="input-group">
                      <span
                        className="input-group-text"
                        id="email-newsletter-addon"
                      >
                        <Envelope size={16} />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email-newsletter"
                        value=""
                        placeholder="Email Address"
                        aria-label="email-newsletter"
                        aria-describedby="email-newsletter-addon"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-4 border-top">
        © 2024 Copyright:
        <Link as={Link} to="/" className="text-reset fw-bold ms-2">
          Pharmora.id
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
