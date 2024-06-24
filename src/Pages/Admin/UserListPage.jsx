import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../api";
import "../../Assets/css/Dashboard.css";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/users/all");
      setUsers(response.data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to fetch users',
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setRole(user.role);
    setShowEditModal(true);
  };

  const handleSave = async () => {
    try {
      await api.put(`/users/updateRole`, {
        id: selectedUser._id,
        role,
      });
      Swal.fire({
        icon: 'success',
        title: 'User role updated successfully',
        text: `User role for ${selectedUser.username} has been updated.`,
        confirmButtonColor: "#3B71CA",
      });
      setShowEditModal(false);
      fetchUsers();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to update user',
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
            <Breadcrumb.Item active>User List</Breadcrumb.Item>
          </Breadcrumb>
          <h3 className="userlist-title mt-4 mb-4">User List</h3>
          <div className="table-responsive">
            <Table striped bordered hover className="table-user shadow">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td>{user.address}</td>
                    <td>
                      <Button
                        variant="orange"
                        size="sm"
                        className="m-1 btn-orange"
                        onClick={() => handleEdit(user)}
                      >
                        Update
                      </Button>{" "}
                      <Button variant="danger" className="m-1" size="sm">
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

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserList;
