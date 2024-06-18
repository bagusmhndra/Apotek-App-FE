import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Plus, Dash, Cart4 } from "react-bootstrap-icons";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Image,
  Button,
} from "react-bootstrap";
import "../../assets/css/DetailProduct.css";

const DetailProduct = () => {
  const { state } = useLocation();
  const { product } = state || {
    product: {
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp", // Placeholder image
      title: "DegiroI 0,25 mg 10 Tablet",
      price: "10000" 
    }
  };

  const [itemCount, setItemCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + itemCount);
    setTotalPrice(totalPrice + (itemCount * parseFloat(product.price)));
    setItemCount(0);  // Reset itemCount after adding to cart
  };

  const handleIncrement = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrement = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <>
    <Header />
    <Container className="detail-product-container">
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item  linkAs={Link} linkProps={{ to: "/" }}>
          Beranda
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/category" }}>
          Kategori
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="detail-product">
        <Col md={4} className="detail-product-image">
          <Image src={product.image} alt={product.title} fluid />
        </Col>
        <Col md={8} className="product-details">
          <h3>{product.title}</h3>
          <h4 className="detail-product-price">
            <span>{formatRupiah(product.price)}</span>
          </h4>
          <p className="per-strip">Per STRIP</p>
          <div className="detail-product-actions">
            <Button
              variant="primary"
              className="cart-button"
              onClick={handleAddToCart}
            >
              + Tambah ke Keranjang
            </Button>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <Button
                variant="outline-primary"
                className="cart-button"
                onClick={handleDecrement}
              >
                <Dash />
              </Button>
              <span>{itemCount}</span>
              <Button
                variant="primary"
                className="cart-button"
                onClick={handleIncrement}
              >
                <Plus />
              </Button>
            </div>
          </div>
          <hr />
          <div className="product-deskripsi">
            <h3>Deskripsi</h3>
            <h4>Indikasi / Kegunaan</h4>
            <p>Suplemen serat</p>
            <h4>Kandungan / Komposisi</h4>
            <p>Derivat Arabinoxylan 250 mg</p>
            <h4>Dosis</h4>
            <p>2-4 tablet per hari</p>
            <h4>Cara Pemakaian</h4>
            <p>-</p>
            <h4>Kemasan</h4>
            <p>Dus, 5 strip @ 4 tablet</p>
            <h4>Golongan</h4>
            <p>Suplemen & Vitamin</p>
            <h4>Perlu Resep</h4>
            <p>Tidak</p>
            <h4>Kontraindikasi / Jangan digunakan oleh</h4>
            <p>
              Pasien dengan riwayat alergi atau hipersensitifitas terhadap
              kandungan produk ini
            </p>
            <h4>Efek Samping</h4>
            <p>-</p>
            <h4>Perhatian Khusus</h4>
            <p>
              Simpan di tempat kering dan sejuk, serta terhindar dari panas
              sinar matahari langsung
            </p>
            <h4>Principal</h4>
            <p>PT. Ferron Par Pharmaceuticals</p>
            <h4>Nomor Ijin Edar (NIE)</h4>
            <p>SI054521661</p>
          </div>
        </Col>
      </Row>
      <div className="cart-icon">
        <Cart4 size={50} />
        {cartCount > 0 && (
          <>
            <span className="cart-count">{cartCount}</span>
            <span className="cart-price">{formatRupiah(totalPrice)}</span>
          </>
        )}
      </div>
    </Container>
    <Footer />
    </>
  );
};

export default DetailProduct;
