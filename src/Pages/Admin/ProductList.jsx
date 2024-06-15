import React, { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.example.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching products!",
        confirmButtonColor: "#3B71CA",
      });
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      formData.append("stock", productData.stock);
      if (productData.image) {
        formData.append("image", productData.image);
      }

      const method = modalType === "create" ? "POST" : "PUT";
      const url =
        modalType === "create"
          ? "https://api.example.com/products"
          : `https://api.example.com/products/${productData.id}`;

      const response = await fetch(url, {
        method: method,
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      Swal.fire({
        icon: "success",
        title: modalType === "create" ? "Product created!" : "Product updated!",
        text: result.message,
        confirmButtonColor: "#3B71CA",
      });

      fetchProducts();
      handleCloseModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error ${
          modalType === "create" ? "creating" : "updating"
        } product!`,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3B71CA",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await fetch(
          `https://api.example.com/products/${productId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        Swal.fire("Deleted!", "Product has been deleted.", "success");
        fetchProducts(); // Re-fetch products after deletion
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error deleting product!",
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  return (
    <>
      <HeaderDashboard />
      <Container className="mt-5">
        <Form className="p-5 flex-column gap-3 shadow">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/dashboard">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Product List</Breadcrumb.Item>
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
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Image</th>
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
                      <img
                        src={`https://api.example.com/images/${product.image}`}
                        alt={product.name}
                        width="100"
                      />
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
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={productData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formStock" className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage" className="mb-3">
              <Form.Label>Image</Form.Label>
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
