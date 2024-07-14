import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  Form,
  Row,
  Col,
  Breadcrumb,
} from "react-bootstrap";
import api from "../../api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../Assets/css/Dashboard.css";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    id_category: "",
    image: null,
    desc: "",
    indication: "",
    composition: "",
    dose: "",
    howtouse: "",
    effect: "-",
    group: "",
    nie: "",
    price: 0,
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data.products);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch products",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("/category");
      setCategories(response.data.category);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch categories",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  // Function to format price to IDR
  const formatIDR = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  // Modal handlers
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null); // Reset selected product after modal close
    setNewProduct({
      productName: "",
      id_category: "",
      image: null,
      desc: "",
      indication: "",
      composition: "",
      dose: "",
      howtouse: "",
      effect: "-",
      group: "",
      nie: "",
      price: 0,
    });
  };

  const handleShowModal = (product) => {
    if (product) {
      setSelectedProduct(product);
      setNewProduct({ ...product }); // Set newProduct state for editing existing product
    } else {
      setNewProduct({
        productName: "",
        id_category: "",
        image: null,
        desc: "",
        indication: "",
        composition: "",
        dose: "",
        howtouse: "",
        effect: "-",
        group: "",
        nie: "",
        price: 0,
      });
    }
    setShowModal(true);
  };

  // Form input change handler for new product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setNewProduct({ ...newProduct, [name]: e.target.files[0] });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  // Handle submission of new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", newProduct.productName);
    formData.append("id_category", newProduct.id_category);
    formData.append("image", newProduct.image);
    formData.append("desc", newProduct.desc);
    formData.append("indication", newProduct.indication);
    formData.append("composition", newProduct.composition);
    formData.append("dose", newProduct.dose);
    formData.append("howtouse", newProduct.howtouse);
    formData.append("effect", newProduct.effect);
    formData.append("group", newProduct.group);
    formData.append("nie", newProduct.nie);
    formData.append("price", newProduct.price);

    try {
      const response = await api.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "New product added successfully",
        text: response.data.message,
        confirmButtonColor: "#3B71CA",
      });
      fetchProducts(); // Fetch products again to update the list
      handleCloseModal(); // Close the modal after successful submission
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to add new product",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  // Handle editing of product
  const handleEditProduct = async () => {
    const formData = new FormData();
    formData.append("productName", newProduct.productName);
    formData.append("id_category", newProduct.id_category);
    if (newProduct.image) {
      formData.append("image", newProduct.image);
    }
    formData.append("desc", newProduct.desc);
    formData.append("indication", newProduct.indication);
    formData.append("composition", newProduct.composition);
    formData.append("dose", newProduct.dose);
    formData.append("howtouse", newProduct.howtouse);
    formData.append("effect", newProduct.effect);
    formData.append("group", newProduct.group);
    formData.append("nie", newProduct.nie);
    formData.append("price", newProduct.price);

    try {
      const response = await api.put(
        `/products/${selectedProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Product updated successfully",
        text: response.data.message,
        confirmButtonColor: "#3B71CA",
      });
      fetchProducts(); // Fetch products again to update the list
      handleCloseModal(); // Close the modal after successful update
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to update product",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  // Handle deletion of product
  const handleDeleteProduct = async (productId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonColor: "#3B71CA",
      });

      if (result.isConfirmed) {
        const response = await api.delete(`/products/${productId}`);
        Swal.fire({
          icon: "success",
          title: "Product deleted successfully",
          text: response.data.message,
          confirmButtonColor: "#3B71CA",
        });
        fetchProducts(); // Fetch products again to update the list
        handleCloseModal(); // Close the modal after successful deletion
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to delete product",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
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
            <Breadcrumb.Item active>Product List</Breadcrumb.Item>
          </Breadcrumb>
          <h3 className="productlist-title mt-4 mb-4">Product List</h3>
          <Button className="mb-3" onClick={() => handleShowModal(null)}>
            Add Product
          </Button>
          <div className="table-responsive">
            <Table striped bordered hover className="table-product shadow">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price (IDR)</th>
                  <th>Marketing Authorization Number (NIE)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(products) &&
                  products.map((product, index) => (
                    <tr key={product._id}>
                      <td>{index + 1}</td>
                      <td>
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.productName}
                            style={{ maxWidth: "100px" }}
                          />
                        ) : (
                          "Nothing to display"
                        )}
                      </td>
                      <td>{product.productName}</td>
                      <td>{product.id_category}</td>
                      <td>{formatIDR(product.price)}</td>
                      <td>{product.nie || "N/A"}</td>
                      <td>
                        <Button
                          variant="orange"
                          size="sm"
                          className="m-1 btn-orange"
                          onClick={() => handleShowModal(product)}
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          className="m-1"
                          size="sm"
                          onClick={() => handleDeleteProduct(product._id)}
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

      {/* Modal for viewing and editing product */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProduct ? "Edit Product" : "Add New Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={selectedProduct ? handleEditProduct : handleSubmit}
            className="p-2"
          >
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formProductName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="productName"
                    value={newProduct.productName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    name="id_category"
                    value={newProduct.id_category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option
                        key={category.id_category}
                        value={category.id_category}
                      >
                        {category.name_category}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label>Price (IDR)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formHowToUse">
                  <Form.Label>How to Use</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter how to use"
                    name="howtouse"
                    value={newProduct.howtouse}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEffect">
                  <Form.Label>Effect</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter effect"
                    name="effect"
                    value={newProduct.effect}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroup">
                  <Form.Label>Group</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter group"
                    name="group"
                    value={newProduct.group}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNie">
                  <Form.Label>License Number (NIE)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter NIE"
                    name="nie"
                    value={newProduct.nie}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formImage">
                  <Form.Label>Product Image</Form.Label>
                  {newProduct.image && newProduct.image instanceof File ? (
                    <div>
                      <img
                        src={URL.createObjectURL(newProduct.image)}
                        alt="Product"
                        style={{ maxWidth: "200px" }}
                      />
                    </div>
                  ) : newProduct.image ? (
                    <div>
                      <img
                        src={newProduct.image}
                        alt="Product"
                        style={{ maxWidth: "200px" }}
                      />
                    </div>
                  ) : (
                    <div>No image</div>
                  )}
                  <Form.Control
                    type="file"
                    accept="image/jpeg, image/png"
                    name="image"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formIndication">
                  <Form.Label>Indication</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter indication"
                    name="indication"
                    value={newProduct.indication}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formComposition">
                  <Form.Label>Composition</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter composition"
                    name="composition"
                    value={newProduct.composition}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDose">
                  <Form.Label>Dosage</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter dosage"
                    name="dose"
                    value={newProduct.dose}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="secondary"
              className="me-2"
              onClick={handleCloseModal}
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              {selectedProduct ? "Save Changes" : "Add Product"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductList;
