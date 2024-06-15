import React, { useState, useEffect } from "react";
import { Container, Breadcrumb, Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function OrderListPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("https://api.example.com/orders");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching orders!",
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const handleDelete = async (orderId) => {
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
          `https://api.example.com/orders/${orderId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        Swal.fire("Deleted!", "Order has been deleted.", "success");
        fetchOrders(); // Re-fetch orders after deletion
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error deleting order!",
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
            <Breadcrumb.Item active>Order List</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="orderlist-title mt-4 mb-4">Order List</h2>
          <div className="table-responsive">
            <Table striped bordered hover className="table-order shadow">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id}>
                    <td>{index + 1}</td>
                    <td>{order.id}</td>
                    <td>{order.customerName}</td>
                    <td>{order.email}</td>
                    <td>{order.phoneNumber}</td>
                    <td>{order.address}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.status}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(order.id)}
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
    </>
  );
}

export default OrderListPage;
