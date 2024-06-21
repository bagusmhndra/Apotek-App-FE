import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../../api";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const ProductsByCategory = () => {
  const { id_category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const crispScriptRef = useRef(null);

  //Chat
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

  // Fetch products based on category
  const fetchProductsByCategory = useCallback(async () => {
    try {
      const response = await api.get(`/products/category/${id_category}`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products by category", error);
    }
  }, [id_category]);

  // Fetch category information
  const fetchCategoryInfo = useCallback(async () => {
    try {
      const response = await api.get(`/category/${id_category}`);
      setCategory(response.data.category);
    } catch (error) {
      console.error("Error fetching category info", error);
    }
  }, [id_category]);

  // Fetch all categories for the sidebar
  const fetchAllCategories = useCallback(async () => {
    try {
      const response = await api.get('/category');
      setCategories(response.data.category);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  }, []);

  useEffect(() => {
    fetchProductsByCategory();
    fetchCategoryInfo();
    fetchAllCategories(); // Fetch all categories when component mounts
  }, [fetchProductsByCategory, fetchCategoryInfo, fetchAllCategories]);

  // Navigate to product detail page
  const handleProductClick = (product) => {
    navigate("/products/detail-product", { state: { product } });
  };

  // Format IDR currency
  const formatIDR = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
  };

  return (
    <>
      <Header />
      <Container className="product-container">
        
        {/* Sidebar with Categories */}
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

        {/* Category Header */}
        <Row className="category-header justify-content-center mb-3">
          <Col>
            {category && <h5>Products in Category: {category.name_category}</h5>}
          </Col>
        </Row>


        {/* Product Cards */}
        <Row className="g-3 justify-content-center">
          {products.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center"
            >
              <Card
                className="product-card h-100 border-0 shadow"
                onClick={() => handleProductClick(item)}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="product-card-img"
                />
                <Card.Body>
                  <Card.Title className="product-name">{item.productName}</Card.Title>
                  <Card.Text className="product-price">{formatIDR(item.price)}</Card.Text>
                  <Button variant="outline-primary" className="w-100 mt-auto">
                    + Add
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductsByCategory;
