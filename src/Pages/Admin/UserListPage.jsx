import React from "react";
import { Container, Breadcrumb, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function UserList() {
  return (
    <>
      <HeaderDashboard />
      <Container className="mt-5">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>User List</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="userlist-title mt-4 mb-4">User List</h2>
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
              <tr>
                <td>1</td>
                <td>Budi123</td>
                <td>Budi Setiawan</td>
                <td>08967564783</td>
                <td>budi@gmail.com</td>
                <td>Semarang, Jawa Tengah</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Budi123</td>
                <td>Budi Setiawan</td>
                <td>08967564783</td>
                <td>budi@gmail.com</td>
                <td>Semarang, Jawa Tengah</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Budi123</td>
                <td>Budi Setiawan</td>
                <td>08967564783</td>
                <td>budi@gmail.com</td>
                <td>Semarang, Jawa Tengah</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}

export default UserList;
