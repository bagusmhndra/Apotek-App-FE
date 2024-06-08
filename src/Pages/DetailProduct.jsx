import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Plus, Dash } from "react-bootstrap-icons";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Image,
  Button,
} from "react-bootstrap";
import "../css/DetailProduct.css";

const DetailProduct = () => {
  const { state } = useLocation();
  const { product } = state || { product: {} };
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  if (!product || Object.keys(product).length === 0) {
    return <p>Product not found</p>;
  }

  return (
    <Container className="detail-product-container">
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item as={Link} to="/">
          Beranda
        </Breadcrumb.Item>
        <Breadcrumb.Item as={Link} to="/category">
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
            <span>{product.price}</span>
          </h4>
          <p className="per-strip">Per STRIP</p>
          <div className="detail-product-actions">
          {quantity === 0 ? (
            <Button variant="primary" onClick={handleAddToCart}>
              Tambah
            </Button>
          ) : (
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="light" onClick={handleRemoveFromCart}>
                <Dash />
              </Button>
              <h6 className="p-3"><span>{quantity}</span></h6>
              <Button variant="primary" onClick={handleAddToCart}>
                <Plus />
              </Button>
            </div>
          )}
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
    </Container>
  );
};

export default DetailProduct;
