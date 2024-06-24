import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CapsulePill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";
import "../../Assets/css/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <>
    <Header/>
      <Container className="text-center not-found-page">
        <Row>
          <Col>
            <CapsulePill size={80} className="mb-4 text-primary" />
            <h1 className="display-4">404 - Page Not Found</h1>
            <p className="lead">
              Sorry, the page you are looking for could not be found.
            </p>
            <Button as={Link} to="/" variant="primary" className="mt-3">
              Back to Home
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default NotFoundPage;
