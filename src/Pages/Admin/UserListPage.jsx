import React, { useState } from "react";
import { Container, Breadcrumb, Button, Table, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

const staticUsers = [
  {
    id: 1,
    username: "bagaspras",
    fullname: "Bagas Pradipa S.",
    phone: "0812-3456-7890",
    email: "bagaspras@gmail.com",
    address: "Jl. Pucang Gading, Demak"
  },
  {
    id: 2,
    username: "ani.puspita",
    fullname: "Ani Puspita",
    phone: "0877-9876-5432",
    email: "ani.puspita@gmail.com",
    address: "Jl. Merdeka No. 123, Jakarta"
  },
  {
    id: 3,
    username: "citra.ramdhani",
    fullname: "Citra Ramdhani",
    phone: "0856-1234-5678",
    email: "citra.ramdhani@gmail.com",
    address: "Jl. Diponegoro No. 78, Yogyakarta"
  },
  {
    id: 4,
    username: "dewi.sari",
    fullname: "Dewi Sari",
    phone: "0813-8765-4321",
    email: "dewi.sari@gmail.com",
    address: "Jl. Kencana No. 9, Surabaya"
  },
  {
    id: 5,
    username: "erwin.putra",
    fullname: "Erwin Putra",
    phone: "0899-2345-6789",
    email: "erwin.putra@gmail.com",
    address: "Jl. Merah No. 12, Medan"
  }
];

function UserList() {
  const [users, setUsers] = useState(staticUsers);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === "create") {
      setUsers([
        ...users,
        { ...userData, id: users.length + 1 },
      ]);
    } else {
      setUsers(
        users.map((usr) =>
          usr.id === userData.id ? userData : usr
        )
      );
    }
    Swal.fire({
      icon: "success",
      title: modalType === "create" ? "User created!" : "User updated!",
      confirmButtonColor: "#3B71CA",
    });
    handleCloseModal();
  };

  const deleteUser = (userId) => {
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
        setUsers(users.filter((user) => user.id !== userId));
        Swal.fire({
          title: "Deleted!",
          text: "Order berhasil di hapus!",
          icon: "success",
          confirmButtonColor: "#3B71CA",
        });
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
                  <th>Nama Lengkap</th>
                  <th>No Handphone</th>
                  <th>Email</th>
                  <th>Alamat</th>
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
                Nama Lengkap<span className="text-danger"> *</span>
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
              No Handphone<span className="text-danger"> *</span>
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
                Alamat<span className="text-danger"> *</span>
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
