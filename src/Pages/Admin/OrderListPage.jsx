import React, { useState } from "react";
import { Container, Breadcrumb, Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

const staticOrders = [
  {
    id: 1,
    customerName: "Budi Santoso",
    email: "budi.santoso@example.co.id",
    phoneNumber: "0812-3456-7890",
    address: "Jl. Merdeka No. 123, Jakarta",
    totalPrice: "250000",
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Citra Ramadhani",
    email: "citra.ramadhani@example.co.id",
    phoneNumber: "0877-9876-5432",
    address: "Jl. Pahlawan No. 45, Bandung",
    totalPrice: "350000",
    status: "Delivered",
  },
  {
    id: 3,
    customerName: "Dewi Sari",
    email: "dewi.sari@example.co.id",
    phoneNumber: "0856-1234-5678",
    address: "Jl. Diponegoro No. 78, Yogyakarta",
    totalPrice: "150000",
    status: "Shipped",
  },
  {
    id: 4,
    customerName: "Eka Prasetyo",
    email: "eka.prasetyo@example.co.id",
    phoneNumber: "0813-8765-4321",
    address: "Jl. Kencana No. 9, Surabaya",
    totalPrice: "500000",
    status: "Pending",
  },
  {
    id: 5,
    customerName: "Fitriani Putri",
    email: "fitriani.putri@example.co.id",
    phoneNumber: "0899-2345-6789",
    address: "Jl. Merah No. 12, Medan",
    totalPrice: "180000",
    status: "Cancelled",
  },
  {
    id: 6,
    customerName: "Hendri Susanto",
    email: "hendri.susanto@example.co.id",
    phoneNumber: "0812-3456-7890",
    address: "Jl. Cendana No. 7, Jakarta",
    totalPrice: "300000",
    status: "Delivered",
  },
  {
    id: 7,
    customerName: "Ines Amelia",
    email: "ines.amelia@example.co.id",
    phoneNumber: "0877-9876-5432",
    address: "Jl. Kartini No. 15, Bandung",
    totalPrice: "280000",
    status: "Shipped",
  },
  {
    id: 8,
    customerName: "Joko Santoso",
    email: "joko.santoso@example.co.id",
    phoneNumber: "0856-1234-5678",
    address: "Jl. Darmo No. 3, Surabaya",
    totalPrice: "200000",
    status: "Pending",
  },
  {
    id: 9,
    customerName: "Kartika Putri",
    email: "kartika.putri@example.co.id",
    phoneNumber: "0813-8765-4321",
    address: "Jl. Majapahit No. 21, Semarang",
    totalPrice: "150000",
    status: "Cancelled",
  }
];

function OrderListPage() {
  const [orders, setOrders] = useState(staticOrders);

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
        setOrders(orders.filter((order) => order.id !== orderId));
        Swal.fire("Deleted!", "Order has been deleted.", "success");
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
      <Container>
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
                  <th>Nama Pelanggan</th>
                  <th>Email</th>
                  <th>No Handphone</th>
                  <th>Alamat</th>
                  <th>Total Harga</th>
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
