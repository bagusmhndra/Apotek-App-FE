import React, { useState } from "react";
import {
  Container,
  Breadcrumb,
  Button,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function ProductList() {
  const initialProducts = [
    {
      id: 1,
      name: "DegiroI 0,25 mg 10 Tablet",
      description: "/Strip",
      price: 16297,
      stock: 100,
      image: "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
    },
    {
      id: 2,
      name: "Becom Zet 10 Kaplet",
      description: "/Strip",
      price: 34032,
      stock: 200,
      image: "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659931609_5fb3880f41ab59059e86a0ff ",
    },
    {
      id: 3,
      name: "Tempra Drop 15 ml",
      description: "/Botol",
      price: 64196,
      stock: 200,
      image: "https://res-2.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659933112_5fb3899241ab59059e86a4d1",
    },
    {
      id: 4,
      name: "Silex Sirup 100 ml",
      description: "/Botol",
      price: 101853,
      stock: 200,
      image: "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659930406_5fb37b0841ab59059e8681ba",
    },
    {
      id: 5,
      name: "Shampo Sebamed",
      description: "/Botol",
      price: 236170,
      stock: 200,
      image: "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1701133331_untitled_design",
    },
    {
      id: 6,
      name: "Lacto B Sachet 1 gr",
      description: "/Sachet",
      price: 16297,
      stock: 200,
      image: "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659930651_5fb37f7041ab59059e868c57",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null,
  });

  const handleShowModal = (type, product) => {
    setModalType(type);
    if (type === "edit" && product) {
      setProductData({ ...product, image: null });
    } else {
      setProductData({
        id: "",
        name: "",
        description: "",
        price: "",
        stock: "",
        image: null,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProductData({ ...productData, image: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === "create") {
      const newProduct = {
        ...productData,
        id: products.length + 1,
        image: productData.image
          ? URL.createObjectURL(productData.image)
          : null,
      };
      setProducts([...products, newProduct]);
      Swal.fire({
        icon: "success",
        title: "Product created!",
        text: "Product has been created successfully.",
        confirmButtonColor: "#3B71CA",
      });
    } else if (modalType === "edit") {
      const updatedProducts = products.map((product) =>
        product.id === productData.id
          ? {
              ...productData,
              image: productData.image
                ? URL.createObjectURL(productData.image)
                : product.image,
            }
          : product
      );
      setProducts(updatedProducts);
      Swal.fire({
        icon: "success",
        title: "Product updated!",
        text: "Product has been updated successfully.",
        confirmButtonColor: "#3B71CA",
      });
    }
    handleCloseModal();
  };

  const deleteProduct = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3B71CA",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        setProducts(updatedProducts);
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <HeaderDashboard />
      <Container>
        <Form className="p-5 flex-column gap-3 shadow">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/dashboard">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Produk List</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="productlist-title mt-4 mb-4">Product List</h2>
          <Button className="mb-3" onClick={() => handleShowModal("create")}>
            Add Product
          </Button>
          <div className="table-responsive">
            <Table striped bordered hover className="table-product shadow">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Gambar</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          width="100"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleShowModal("edit", product)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Form>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "create" ? "Add Product" : "Edit Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={productData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStock" className="mb-3">
              <Form.Label>Stok</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage" className="mb-3">
              <Form.Label>Gambar</Form.Label>
              <Form.Control type="file" name="image" onChange={handleChange} />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                {modalType === "create" ? "Add Product" : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductList;
