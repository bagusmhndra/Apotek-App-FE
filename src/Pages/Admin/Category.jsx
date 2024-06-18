import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import api from '../../api';
import HeaderDashboard from '../../Components/Admin/HeaderDashboard';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    id_category: '',
    name_category: '',
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get('/category');
      setCategories(response.data.category);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to fetch categories',
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
    setNewCategory({
      id_category: '',
      name_category: '',
    });
  };

  const handleShowModal = (category) => {
    if (category) {
      setSelectedCategory(category);
      setNewCategory({ ...category });
    } else {
      setNewCategory({
        id_category: '',
        name_category: '',
      });
    }
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedCategory) {
        const response = await api.put(`/category/${selectedCategory._id}`, newCategory);
        Swal.fire({
          icon: 'success',
          title: 'Category updated successfully',
          text: response.data.message,
          confirmButtonColor: "#3B71CA",
        });
      } else {
        const response = await api.post('/category', newCategory);
        Swal.fire({
          icon: 'success',
          title: 'New category added successfully',
          text: response.data.message,
          confirmButtonColor: "#3B71CA",
        });
      }
      fetchCategories();
      handleCloseModal();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to save category',
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonColor: "#3B71CA",
      });

      if (result.isConfirmed) {
        const response = await api.delete(`/category/${categoryId}`);
        Swal.fire({
          icon: 'success',
          title: 'Category deleted successfully',
          text: response.data.message,
          confirmButtonColor: "#3B71CA",
        });
        fetchCategories();
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to delete category',
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  return (
    <>
      <HeaderDashboard />
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h3>Category List</h3>
          <Button variant="primary" onClick={() => handleShowModal(null)}>
            Add Category
          </Button>
        </div>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>ID Category</th>
              <th>Name Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.id_category}</td>
                <td>{category.name_category}</td>
                <td>
                  <Button variant="info" size="sm" onClick={() => handleShowModal(category)}>
                    Edit
                  </Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => handleDeleteCategory(category._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCategory ? 'Edit Category' : 'Add New Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formIdCategory">
              <Form.Label>ID Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID category"
                name="id_category"
                value={newCategory.id_category}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNameCategory">
              <Form.Label>Name Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name category"
                name="name_category"
                value={newCategory.name_category}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {selectedCategory ? 'Save Changes' : 'Add Category'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryList;
