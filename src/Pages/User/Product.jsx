import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Breadcrumb } from "react-bootstrap";
import { Plus, Dash, Cart2 } from "react-bootstrap-icons";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";

const Product = () => {
  const navigate = useNavigate();
  const initialQuantitiesPopuler = new Array(6).fill(0);
  const initialQuantitiesVitaminC = new Array(6).fill(0);
  const initialQuantitiesSuplemenDayaTahan = new Array(6).fill(0);
  const initialQuantitiesObatBatuk = new Array(6).fill(0);

  const [quantitiesPopuler, setQuantitiesPopuler] = useState(
    initialQuantitiesPopuler
  );
  const [totalQuantityPopuler, setTotalQuantityPopuler] = useState(0);
  const [totalPricePopuler, setTotalPricePopuler] = useState(0);

  const [quantitiesVitaminC, setQuantitiesVitaminC] = useState(
    initialQuantitiesVitaminC
  );
  const [totalQuantityVitaminC, setTotalQuantityVitaminC] = useState(0);
  const [totalPriceVitaminC, setTotalPriceVitaminC] = useState(0);

  const [quantitiesSuplemenDayaTahan, setQuantitiesSuplemenDayaTahan] = useState(
    initialQuantitiesSuplemenDayaTahan
  );
  const [totalQuantitySuplemenDayaTahan, setTotalQuantitySuplemenDayaTahan] = useState(0);
  const [totalPriceSuplemenDayaTahan, setTotalPriceSuplemenDayaTahan] = useState(0);
  

  const [quantitiesObatBatuk, setQuantitiesObatBatuk] = useState(
    initialQuantitiesObatBatuk
  );
  const [totalQuantityObatBatuk, setTotalQuantityObatBatuk] = useState(0);
  const [totalPriceObatBatuk, setTotalPriceObatBatuk] = useState(0);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  const handleProductClick = (product) => {
    navigate("/products/detail-product", { state: { product } });
  };

  const productsPopuler = [
    {
      image:
        "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
      title: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659931609_5fb3880f41ab59059e86a0ff",
      title: "Becom Zet 10 Kaplet",
      description: "/Strip",
      price: 34032,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-2.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659933112_5fb3899241ab59059e86a4d1",
      title: "Tempra Drop 15 ml",
      description: "/Botol",
      price: 64196,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659930406_5fb37b0841ab59059e8681ba",
      title: "Silex Sirup 100 ml",
      description: "/Botol",
      price: 101853,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1701133331_untitled_design",
      title: "Shampo Sebamed",
      description: "/Botol",
      price: 236170,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659930651_5fb37f7041ab59059e868c57",
      title: "Lacto B Sachet 1 gr",
      description: "/Sachet",
      price: 16297,
      freeShipping: true,
      path: "/products/detail-product",
    },
  ];

  const productsVitaminC = [
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660924079_620202895232ce060508b6d8",
      title: "Prove D3 5000 IU 10 Tablet ",
      description: "/Strip",
      price: 68029,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1691047962_caviplex_cdez_10-removebg-preview",
      title: "Caviplex CDEZ 10 Kaplet",
      description: "/Strip",
      price: 24242,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-2.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659933057_61d43ae7e139ec066bb25c05",
      title: "Prove D3 Drops 12,5 Ml",
      description: "/Botol",
      price: 337548,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1661157175_62a19151f15ee840f566029c",
      title: "L-Vit D3 1000 10 Tablet",
      description: "/Strip",
      price: 48845,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659935442_1642141126_prove_d3-1000_iu_10_tablet",
      title: "Prove D3 1000 IU 30 Tablet",
      description: "/Strip",
      price: 132957,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659929473_5fb37d0541ab59059e868680",
      title: "Imboost Kids Sirup 120 Ml",
      description: "/Botol",
      price: 80438,
      freeShipping: true,
      path: "/products/detail-product",
    },
  ];


  const productsSuplemenDayaTahan = [
    {
      image:
        "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660024151_61dd3cefe139ec05b9c8b710",
      title: "Curvit 10 Kaplet",
      description: "/Strip",
      price: 34073,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660377309_62a190dff15ee840f565fedb",
      title: "Vipalbumin 10 Kapsul",
      description: "/Strip",
      price: 327487,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660286295_62a18fdcf15ee840f565f587",
      title: "Vitamin C IPI 50 mg",
      description: "/Botol",
      price: 18048,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660791792_62a19194f15ee840f56604d3",
      title: "Arkavit-C Multivitamin",
      description: "/Strip",
      price: 18604,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-2.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1690358443_curvit_sirup",
      title: "Curvit Sirup 60 Ml",
      description: "/Botol",
      price: 41592,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659942092_61dffb32e139ec05b9c8cb4e",
      title: "Astria Force 6 Mg 6 Kapsul",
      description: "/Strip",
      price: 65100,
      freeShipping: true,
      path: "/products/detail-product",
    },
  ];

  const productsObatBatuk = [
    {
      image:
        "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660398706_5fb3763341ab59059e867602",
      title: "Longatin 50 mg 10 Tablet",
      description: "/Strip",
      price: 70018,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659930406_5fb37b0841ab59059e8681ba",
      title: "Silex Sirup 100 ml",
      description: "/Botol",
      price: 101853,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1661129659_5fcd84b541ab590e7c94f7c5",
      title: "Vectrine 300 Mg 10 Kapsul",
      description: "/Strip",
      price: 96040,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660636461_5fb386e441ab59059e869d80",
      title: "Sistenol 10 Kaplet",
      description: "/Strip",
      price: 42730,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660895334_62a18f53f15ee840f565f105",
      title: "Epexol Drops 20 ml",
      description: "/Botol",
      price: 65863,
      freeShipping: true,
      path: "/products/detail-product",
    },
    {
      image:
        "https://res-4.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1660201890_100162_2",
      title: "Comtusi Sirup 60 Ml",
      description: "/Botol",
      price: 62902,
      freeShipping: true,
      path: "/products/detail-product",
    },
  ];

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleAddToCart = (index, category) => {
    let product;
    if (category === "populer") {
      product = productsPopuler[index];
      setQuantitiesPopuler((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityPopuler(totalQuantityPopuler + 1);
        setTotalPricePopuler(totalPricePopuler + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    } else if (category === "vitaminC") {
      product = productsVitaminC[index];
      setQuantitiesVitaminC((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityVitaminC(totalQuantityVitaminC + 1);
        setTotalPriceVitaminC(totalPriceVitaminC + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    } else if (category === "suplemenDayaTahan") {
      product = productsSuplemenDayaTahan[index];
      setQuantitiesSuplemenDayaTahan((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantitySuplemenDayaTahan(totalQuantitySuplemenDayaTahan + 1);
        setTotalPriceSuplemenDayaTahan(totalPriceSuplemenDayaTahan + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
      
    } else if (category === "obatBatuk") {
      product = productsObatBatuk[index];
      setQuantitiesObatBatuk((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] += 1;
        setTotalQuantityObatBatuk(totalQuantityObatBatuk + 1);
        setTotalPriceObatBatuk(totalPriceObatBatuk + product.price);
        setTotalQuantity(totalQuantity + 1);
        setTotalPrice(totalPrice + product.price);
        return newQuantities;
      });
    }

    const existingCartItem = cart.find(
      (item) => item.product.title === product.title
    );
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (index, category) => {
    let product;
    if (category === "populer") {
      product = productsPopuler[index];
      setQuantitiesPopuler((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityPopuler(totalQuantityPopuler - 1);
          setTotalPricePopuler(totalPricePopuler - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    } else if (category === "vitaminC") {
      product = productsVitaminC[index];
      setQuantitiesVitaminC((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityVitaminC(totalQuantityVitaminC - 1);
          setTotalPriceVitaminC(totalPriceVitaminC - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });

    } else if (category === "suplemenDayaTahan") {
      product = productsSuplemenDayaTahan[index];
      setQuantitiesSuplemenDayaTahan((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantitySuplemenDayaTahan(totalQuantitySuplemenDayaTahan - 1);
          setTotalPriceSuplemenDayaTahan(totalPriceSuplemenDayaTahan - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    } else if (category === "obatBatuk") {
      product = productsObatBatuk[index];
      setQuantitiesObatBatuk((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        if (newQuantities[index] > 0) {
          newQuantities[index] -= 1;
          setTotalQuantityObatBatuk(totalQuantityObatBatuk - 1);
          setTotalPriceObatBatuk(totalPriceObatBatuk - product.price);
          setTotalQuantity(totalQuantity - 1);
          setTotalPrice(totalPrice - product.price);
        }
        return newQuantities;
      });
    }

    const existingCartItem = cart.find(
      (item) => item.product.title === product.title
    );
    if (existingCartItem && existingCartItem.quantity > 1) {
      existingCartItem.quantity -= 1;
    } else {
      setCart(cart.filter((item) => item.product.title !== product.title));
    }
  };

  return (
    <>
      <Header />
      <Container className="product-container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Beranda</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Produk</Breadcrumb.Item>
        </Breadcrumb>

        {/* POPULER */}
        <Row className="product-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Produk Populer</h5>
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
                   <Card
                    className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="product-name" onClick={() => handleProductClick(item)}>
                        {item.title}
                      </Card.Title>
                      <Card.Text className="product-description" onClick={() => handleProductClick(item)}>
                        {item.description}
                      </Card.Text>
                      <Card.Text className="product-price" onClick={() => handleProductClick(item)}>
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesPopuler[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, "populer")}
                        >
                          + Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() =>
                              handleRemoveFromCart(index, "populer")
                            }
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesPopuler[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, "populer")}
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

      {/* VITAMIN C */}
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
                to="/products/vitamin-c"
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
                  <Card
                    className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title onClick={() => handleProductClick(item)} className="product-name">
                        {item.title}
                      </Card.Title>
                      <Card.Text onClick={() => handleProductClick(item)} className="product-description">
                        {item.description}
                      </Card.Text>
                      <Card.Text onClick={() => handleProductClick(item)} className="product-price">
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesVitaminC[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, "vitaminC")}
                        >
                          + Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() =>
                              handleRemoveFromCart(index, "vitaminC")
                            }
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesVitaminC[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, "vitaminC")}
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

      {/* SUPLEMEN DAYA TAHAN */}
      <Container className="product-container">
        <Row className="product-box justify-content-center">
          <Row className="align-items-center justify-content-between">
            <Col>
              <h5>Suplemen Daya Tahan</h5>
            </Col>
            <Col xs="auto">
              <Button
                variant="link"
                className="see-all-button"
                as={Link}
                to="/products/suplemen"
              >
                See All
              </Button>
            </Col>
          </Row>
          <Col xs={12}>
            <Row className="g-3 justify-content-center">
              {productsSuplemenDayaTahan.map((item, index) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={index}
                  className="d-flex justify-content-center"
                >
                   <Card
                    className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="product-name" onClick={() => handleProductClick(item)}>
                        {item.title}
                      </Card.Title>
                      <Card.Text className="product-description" onClick={() => handleProductClick(item)}>
                        {item.description}
                      </Card.Text>
                      <Card.Text className="product-price" onClick={() => handleProductClick(item)}>
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesSuplemenDayaTahan[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, "suplemenDayaTahan")}
                        >
                          + Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() =>
                              handleRemoveFromCart(index, "suplemenDayaTahan")
                            }
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesSuplemenDayaTahan[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, "suplemenDayaTahan")}
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

      {/* OBAT BATUK */}
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
                to="/products/obat-batuk"
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
                   <Card
                    className="product-card h-100 border-0">
                    <Link to={item.path}>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="product-card-img"
                      />
                    </Link>
                    <Card.Body >
                      <Card.Title className="product-name" onClick={() => handleProductClick(item)}>
                        {item.title}
                      </Card.Title>
                      <Card.Text className="product-description" onClick={() => handleProductClick(item)}>
                        {item.description}
                      </Card.Text>
                      <Card.Text className="product-price" onClick={() => handleProductClick(item)}>
                        {formatRupiah(item.price)}
                      </Card.Text>
                      {quantitiesObatBatuk[index] === 0 ? (
                        <Button
                          variant="primary"
                          onClick={() => handleAddToCart(index, "obatBatuk")}
                        >
                          + Tambah
                        </Button>
                      ) : (
                        <div className="d-flex justify-content-between align-items-center">
                          <Button
                            variant="outline-primary"
                            onClick={() =>
                              handleRemoveFromCart(index, "obatBatuk")
                            }
                          >
                            <Dash />
                          </Button>
                          <span>{quantitiesObatBatuk[index]}</span>
                          <Button
                            variant="primary"
                            onClick={() => handleAddToCart(index, "obatBatuk")}
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

      <div
        className="cart-icon text-white bg-primary shadow"
        onClick={handleCheckout}
      >
        <Cart2 size={40} />
        {totalQuantity > 0 && (
          <>
            <span className="cart-count text-white">{totalQuantity}</span>
            <span className="cart-price text-white">
              {formatRupiah(totalPrice)}
            </span>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Product;
