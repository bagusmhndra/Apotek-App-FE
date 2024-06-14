import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { Plus, Dash, Cart4 } from "react-bootstrap-icons";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Category = () => {
  const initialQuantitiesPopuler = new Array(6).fill(0);
  const initialQuantitiesVitaminC = new Array(6).fill(0);
  const initialQuantitiesObatBatuk = new Array(6).fill(0);

  const [quantitiesPopuler, setQuantitiesPopuler] = useState(initialQuantitiesPopuler);
  const [totalQuantityPopuler, setTotalQuantityPopuler] = useState(0);
  const [totalPricePopuler, setTotalPricePopuler] = useState(0);

  const [quantitiesVitaminC, setQuantitiesVitaminC] = useState(initialQuantitiesVitaminC);
  const [totalQuantityVitaminC, setTotalQuantityVitaminC] = useState(0);
  const [totalPriceVitaminC, setTotalPriceVitaminC] = useState(0);

  const [quantitiesObatBatuk, setQuantitiesObatBatuk] = useState(initialQuantitiesObatBatuk);
  const [totalQuantityObatBatuk, setTotalQuantityObatBatuk] = useState(0);
  const [totalPriceObatBatuk, setTotalPriceObatBatuk] = useState(0);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const productsPopuler = [
    {
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
  ];

  const productsVitaminC = [
    {
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
  ];

  const productsObatBatuk = [
    {
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
      {
        image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
        title: "DegiroI 0,25 mg 10 Tablet",
        description: "/Strip",
        price: 16297,
        freeShipping: true,
        path: "/products/detail-product",
      },
  ];

  const categories = [
    { name: 'Vitamin C', icon: '💊', path: '/Vitamin' },
    { name: 'Suplemen Daya Tahan', icon: '🧴', path: '/suplemen' },
    { name: 'Obat batuk', icon: '⚡', path: '/nutrisi' },
    { name: 'Obat Demam', icon: '🌿', path: '/herbal' },
    { name: 'Vitamin Anak', icon: '🍼', path: '/produk-bayi' },
    { name: 'Obat Kulit', icon: '🚑', path: '/alat-kesehatan' },
  
  ];

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleAddToCart = (index, category) => {
    if (category === 'populer') {
      setQuantitiesPopuler((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityPopuler(totalQuantityPopuler + 1);
        setTotalPricePopuler(totalPricePopuler + productsPopuler[index].price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + productsPopuler[index].price);
        return newQuantities;
      });
    } else if (category === 'vitaminC') {
      setQuantitiesVitaminC((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityVitaminC(totalQuantityVitaminC + 1);
        setTotalPriceVitaminC(totalPriceVitaminC + productsVitaminC[index].price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + productsVitaminC[index].price);
        return newQuantities;
      });
    } else if (category === 'obatBatuk') {
      setQuantitiesObatBatuk((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityObatBatuk(totalQuantityObatBatuk + 1);
        setTotalPriceObatBatuk(totalPriceObatBatuk + productsObatBatuk[index].price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + productsObatBatuk[index].price);
        return newQuantities;
      });
    }
  };

  const handleRemoveFromCart = (index, category) => {
    if (category === 'populer') {
      setQuantitiesPopuler((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityPopuler(totalQuantityPopuler - 1);
          setTotalPricePopuler(totalPricePopuler - productsPopuler[index].price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - productsPopuler[index].price);
        }
        return newQuantities;
      });
    } else if (category === 'vitaminC') {
      setQuantitiesVitaminC((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityVitaminC(totalQuantityVitaminC - 1);
          setTotalPriceVitaminC(totalPriceVitaminC - productsVitaminC[index].price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - productsVitaminC[index].price);
        }
        return newQuantities;
      });
    } else if (category === 'obatBatuk') {
      setQuantitiesObatBatuk((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityObatBatuk(totalQuantityObatBatuk - 1);
          setTotalPriceObatBatuk(totalPriceObatBatuk - productsObatBatuk[index].price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - productsObatBatuk[index].price);
        }
        return newQuantities;
      });
    }
  };

  return (
    <>
     <Header />
      <Container className="shop">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Kategori</Breadcrumb.Item>
        </Breadcrumb>

        <header className="text-center my-4">
          <h1>APOTEK APP</h1>
          <p>Solusi Aman dan Terpercaya</p>
        </header>
      </Container>

      <Container className="py-5 category-container">
        <Row className="justify-content-center category-box">
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
                  key={category.name}
                  className="d-flex justify-content-center"
                >
                  <Card className="h-100 category-card border-0">
                    <Link
                      to={category.path}
                      className="text-decoration-none text-dark"
                    >
                      <Card.Body className="d-flex flex-column align-items-center">
                        <div className="display-6 category-icon">
                          {category.icon}
                        </div>
                        <Card.Title className="mt-3 category-name">
                          {category.name}
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

      <Container className="product-container">
        <Row className="product-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Produk Populer</h5>
            </Col>
            <Col xs="auto">
              <Button
                variant="link"
                className="see-all-button"
                as={Link}
                to="/Vitamin"
              >
                See All
              </Button>
            </Col>
          </Row>
          <Col xs={12}>
            <Row className="g-3 justify-content-center">
              {productsPopuler.map((item, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={index}
                  className="d-flex justify-content-center"
                >
                  <Card className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="product-name">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="product-description">
                        {item.description}
                      </Card.Text>
                      <Card.Text className="product-price">
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesPopuler[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, 'populer')}
                        >
                          Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() => handleRemoveFromCart(index, 'populer')}
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesPopuler[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, 'populer')}
                          >
                            <Plus />
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="product-container">
        <Row className="product-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Vitamin C</h5>
            </Col>
            <Col xs="auto">
              <Button
                variant="link"
                className="see-all-button"
                as={Link}
                to="/Vitamin"
              >
                See All
              </Button>
            </Col>
          </Row>
          <Col xs={12}>
            <Row className="g-3 justify-content-center">
              {productsVitaminC.map((item, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={index}
                  className="d-flex justify-content-center"
                >
                  <Card className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="product-name">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="product-description">
                        {item.description}
                      </Card.Text>
                      <Card.Text className="product-price">
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesVitaminC[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, 'vitaminC')}
                        >
                          Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() => handleRemoveFromCart(index, 'vitaminC')}
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesVitaminC[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, 'vitaminC')}
                          >
                            <Plus />
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="product-container">
        <Row className="product-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Obat Batuk</h5>
            </Col>
            <Col xs="auto">
              <Button
                variant="link"
                className="see-all-button"
                as={Link}
                to="/vitamin"
              >
                See All
              </Button>
            </Col>
          </Row>
          <Col xs={12}>
            <Row className="g-3 justify-content-center">
              {productsObatBatuk.map((item, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={index}
                  className="d-flex justify-content-center"
                >
                  <Card className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="product-name">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="product-description">
                        {item.description}
                      </Card.Text>
                      <Card.Text className="product-price">
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesObatBatuk[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, 'obatBatuk')}
                        >
                          Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() => handleRemoveFromCart(index, 'obatBatuk')}
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesObatBatuk[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, 'obatBatuk')}
                          >
                            <Plus />
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="cart-icon">
        <Cart4 size={50} />
        {totalQuantity > 0 && (
          <>
            <span className="cart-count">{totalQuantity}</span>
            <span className="cart-price">{formatRupiah(totalPrice)}</span>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Category;

