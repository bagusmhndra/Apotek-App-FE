import React, { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import api from "../../api";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/users/all");
      setUsers(response.data.slice(0, 3)); // Display first 3 users
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch users",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data.products.slice(0, 3)); // Display first 3 products
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch products",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await api.get("/order/all");
      const ordersData = response.data.slice(0, 3); // Display first 3 orders
      setOrders(ordersData);

      // Calculate total orders and total revenue
      const totalOrdersCount = response.data.length;
      const totalRevenueAmount = response.data.reduce(
        (acc, order) => acc + order.total,
        0
      );
      setTotalOrders(totalOrdersCount);
      setTotalRevenue(totalRevenueAmount);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch orders",
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
          <h2 className="dashboardlist-title mb-4">Dashboard</h2>

          <Table striped bordered hover className="table-order shadow">
            <thead>
              <tr>
                <th colSpan="2">Order Summary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Orders</td>
                <td>{totalOrders}</td>
              </tr>
              <tr>
                <td>Total Revenue</td>
                <td>Rp{totalRevenue},00</td>
              </tr>
            </tbody>
          </Table>

          <h4 className="mt-4">User List</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4 className="mt-4">Product List</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>Rp{product.price},00</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4 className="mt-4">Order List</h4>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.createdAt}</td>
                  <td>Rp{order.total},00</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Form>
      </Container>
    </>
  );
};

export default Dashboard;
