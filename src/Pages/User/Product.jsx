import React, { useEffect, useState, useRef } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const crispScriptRef = useRef(null);

  // Chat
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

  const fetchAllProduct = async (category) => {
    try {
      const response = await api.get(`/products`);
      setProducts(response.data.products);
      console.log(setProducts);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const handleProductClick = (product) => {
    navigate(`/products/detail-product/${product._id}`); // Navigate to detail page with product ID
  };

  const formatIDR = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <>
      <Header />
      <Container className="product-container">
        <Row className="product-box justify-content-center mb-3">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>List Produk</h5>
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
                  <Card
                    className="product-card h-100 border-0 shadow"
                    onClick={() => handleProductClick(item)}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="product-card-img p-3"
                    />
                    <Card.Body>
                      <Card.Title className="product-name">
                        {item.productName}
                      </Card.Title>
                      <Card.Text className="product-price">
                        {formatIDR(item.price)}
                      </Card.Text>
                      <Button variant="outline-primary" className="pe-3 ps-3">
                        Detail
                      </Button>
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

export default Product;
