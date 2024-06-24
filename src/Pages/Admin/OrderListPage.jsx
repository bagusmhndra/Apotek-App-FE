import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  Form,
  Breadcrumb,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../api";
import "../../Assets/css/Dashboard.css";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";
import Swal from "sweetalert2";

function OrderListPage() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/order/all");
      setOrders(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch orders",
        text: error.message,
        confirmButtonColor: "#3B71CA",
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  const handleShowModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handlePrintOrder = (orderId) => {
    // Implement print logic here
    console.log("Printing order:", orderId);
    Swal.fire({
      icon: "success",
      title: "Order is being printed",
      text: `Order ID: ${orderId}`,
      confirmButtonColor: "#3B71CA",
    });
  };

  const handleUpdateStatus = async () => {
    try {
      const token = localStorage.getItem("authToken"); // Assuming token is stored in localStorage
      const response = await api.put(
        "/order/updateStatus",
        { orderId: selectedOrder._id, status: "Successful" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Order status updated successfully",
        text: response.data.message,
        confirmButtonColor: "#3B71CA",
      });
      fetchOrders(); // Refresh the orders list
      handleCloseModal(); // Close the modal
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to update order status",
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
            <Breadcrumb.Item active>Order List</Breadcrumb.Item>
          </Breadcrumb>
          <h3 className="orderlist-title mt-4 mb-4">Order List</h3>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order Date</th>
                  <th>Total Amount (IDR)</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(orders) &&
                  orders.map((order, index) => (
                    <tr key={order._id}>
                      <td>{index + 1}</td>
                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td>
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(order.total)}
                      </td>
                      <td>{order.status}</td>
                      <td>
                        <Button
                          variant="orange"
                          size="sm"
                          className="m-1 btn-orange"
                          onClick={() => handleShowModal(order)}
                        >
                          Update
                        </Button>{" "}
                        <Button
                          variant="success"
                          className="m-1"
                          size="sm"
                          onClick={() => handlePrintOrder(order._id)}
                        >
                          Print Order
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Form>
      </Container>

      {/* Modal for viewing order details */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOrder && (
            <>
              <h5>
                Order Date:{" "}
                {new Date(selectedOrder.createdAt).toLocaleDateString()}
              </h5>
              <h5>
                Total Amount:{" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(selectedOrder.total)}
              </h5>
              <h5>Status: {selectedOrder.status}</h5>
              <hr />
              <h5>Order Items:</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price (IDR)</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map((item, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>
                        {item.product
                          ? item.product.productName
                          : "Product Not Available"}
                      </td>
                      <td>{item.quantity}</td>
                      <td>
                        {item.product
                          ? new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(item.product.price)
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleUpdateStatus}
            disabled={selectedOrder?.status === "Successful"}
          >
            Update Payment Status to Successful
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderListPage;
