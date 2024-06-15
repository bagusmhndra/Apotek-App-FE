import React, { useState, useEffect } from "react";
import {
  Container,
  Breadcrumb,
  Button,
  Table,
  Form,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [userData, setUserData] = useState({
    id: "",
    username: "",
    fullname: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api.example.com/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching users!",
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const handleShowModal = (type, user) => {
    setModalType(type);
    if (type === "edit" && user) {
      setUserData(user);
    } else {
      setUserData({
        id: "",
        username: "",
        fullname: "",
        phone: "",
        email: "",
        address: "",
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = modalType === "create" ? "POST" : "PUT";
      const url =
        modalType === "create"
          ? "https://api.example.com/users"
          : `https://api.example.com/users/${userData.id}`;

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      Swal.fire({
        icon: "success",
        title: modalType === "create" ? "User created!" : "User updated!",
        text: result.message,
        confirmButtonColor: "#3B71CA",
      });

      fetchUsers();
      handleCloseModal();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error ${modalType === "create" ? "creating" : "updating"} user!`,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const deleteUser = async (userId) => {
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
          `https://api.example.com/users/${userId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        Swal.fire("Deleted!", "User has been deleted.", "success");
        fetchUsers(); // Re-fetch users after deletion
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error deleting user!",
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
            <Breadcrumb.Item active>User List</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="userlist-title mt-4 mb-4">User List</h2>
          <Button className="mb-3" onClick={() => handleShowModal("create")}>
            Add User
          </Button>
          <div className="table-responsive">
            <Table striped bordered hover className="table-user shadow">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Fullname</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.fullname}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => handleShowModal("edit", user)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => deleteUser(user.id)}
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
            {modalType === "create" ? "Add User" : "Edit User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>
                Username<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formFullname" className="mb-3">
              <Form.Label>
                Fullname<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                value={userData.fullname}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>
                Phone Number<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>
                Email<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>
                Address<span className="text-danger"> *</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                {modalType === "create" ? "Add User" : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserList;
