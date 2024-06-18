import React from "react";
import { Container, Table, Form } from "react-bootstrap";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

// Static data
const users = [
  {
    id: 1,
    username: "ani.puspita",
    fullname: "Ani Puspita",
    phone: "0812-3456-7890",
    email: "ani.puspita@example.co.id",
    address: "Jl. Merdeka No. 123, Jakarta",
  },
  {
    id: 2,
    username: "budi.jaya",
    fullname: "Budi Jaya",
    phone: "0877-9876-5432",
    email: "budi.jaya@example.co.id",
    address: "Jl. Pahlawan No. 45, Bandung",
  },
  {
    id: 3,
    username: "citra.ramdhani",
    fullname: "Citra Ramdhani",
    phone: "0856-1234-5678",
    email: "citra.ramdhani@example.co.id",
    address: "Jl. Diponegoro No. 78, Yogyakarta",
  },
  {
    id: 4,
    username: "dewi.sari",
    fullname: "Dewi Sari",
    phone: "0813-8765-4321",
    email: "dewi.sari@example.co.id",
    address: "Jl. Kencana No. 9, Surabaya",
  },
  {
    id: 5,
    username: "erwin.putra",
    fullname: "Erwin Putra",
    phone: "0899-2345-6789",
    email: "erwin.putra@example.co.id",
    address: "Jl. Merah No. 12, Medan",
  },
];

const orders = [
  {
    id: 1,
    customerName: "Budi Santoso",
    email: "budi.santoso@example.co.id",
    phoneNumber: "0812-3456-7890",
    address: "Jl. Merdeka No. 123, Jakarta",
    totalPrice: 250000,
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Citra Ramadhani",
    email: "citra.ramadhani@example.co.id",
    phoneNumber: "0877-9876-5432",
    address: "Jl. Pahlawan No. 45, Bandung",
    totalPrice: 350000,
    status: "Delivered",
  },
  {
    id: 3,
    customerName: "Dewi Sari",
    email: "dewi.sari@example.co.id",
    phoneNumber: "0856-1234-5678",
    address: "Jl. Diponegoro No. 78, Yogyakarta",
    totalPrice: 150000,
    status: "Shipped",
  },
  {
    id: 4,
    customerName: "Eka Prasetyo",
    email: "eka.prasetyo@example.co.id",
    phoneNumber: "0813-8765-4321",
    address: "Jl. Kencana No. 9, Surabaya",
    totalPrice: 500000,
    status: "Pending",
  },
  {
    id: 5,
    customerName: "Fitriani Putri",
    email: "fitriani.putri@example.co.id",
    phoneNumber: "0899-2345-6789",
    address: "Jl. Merah No. 12, Medan",
    totalPrice: 180000,
    status: "Cancelled",
  },
  {
    id: 6,
    customerName: "Hendri Susanto",
    email: "hendri.susanto@example.co.id",
    phoneNumber: "0812-3456-7890",
    address: "Jl. Cendana No. 7, Jakarta",
    totalPrice: 300000,
    status: "Delivered",
  },
  {
    id: 7,
    customerName: "Ines Amelia",
    email: "ines.amelia@example.co.id",
    phoneNumber: "0877-9876-5432",
    address: "Jl. Kartini No. 15, Bandung",
    totalPrice: 280000,
    status: "Shipped",
  },
  {
    id: 8,
    customerName: "Joko Santoso",
    email: "joko.santoso@example.co.id",
    phoneNumber: "0856-1234-5678",
    address: "Jl. Darmo No. 3, Surabaya",
    totalPrice: 200000,
    status: "Pending",
  },
  {
    id: 9,
    customerName: "Kartika Putri",
    email: "kartika.putri@example.co.id",
    phoneNumber: "0813-8765-4321",
    address: "Jl. Majapahit No. 21, Semarang",
    totalPrice: 150000,
    status: "Cancelled",
  },
];

const products = [
  {
    id: 1,
    name: "DegiroI 0,25 mg 10 Tablet",
    description: "/Strip",
    price: 16297,
    stock: 100,
    image:
      "https://d2qjkwm11akmwu.cloudfront.net/products/862528_2-4-2019_10-31-18-1665793368.webp",
  },
  {
    id: 2,
    name: "Becom Zet 10 Kaplet",
    description: "/Strip",
    price: 34032,
    stock: 200,
    image:
      "https://res-1.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659931609_5fb3880f41ab59059e86a0ff ",
  },
  {
    id: 3,
    name: "Tempra Drop 15 ml",
    description: "/Botol",
    price: 64196,
    stock: 200,
    image:
      "https://res-2.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659933112_5fb3899241ab59059e86a4d1",
  },
  {
    id: 4,
    name: "Silex Sirup 100 ml",
    description: "/Botol",
    price: 101853,
    stock: 200,
    image:
      "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659930406_5fb37b0841ab59059e8681ba",
  },
  {
    id: 5,
    name: "Shampo Sebamed",
    description: "/Botol",
    price: 236170,
    stock: 200,
    image:
      "https://res-3.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1701133331_untitled_design",
  },
  {
    id: 6,
    name: "Lacto B Sachet 1 gr",
    description: "/Sachet",
    price: 16297,
    stock: 200,
    image:
      "https://res-5.cloudinary.com/dk0z4ums3/image/upload/c_scale,h_500,w_500/v1/production/pharmacy/products/1659930651_5fb37f7041ab59059e868c57",
  },
];

const Dashboard = () => {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.totalPrice, 0);

  return (
    <>
      <HeaderDashboard />
      <Container>
        <Form className="p-5 flex-column gap-3 shadow">
          <h2 className="orderlist-title mb-4">Dashboard</h2>

          <Table striped bordered hover className="table-order shadow">
            <thead>
              <tr>
                <th colSpan="2">Summary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Order</td>
                <td>{totalOrders}</td>
              </tr>
              <tr>
                <td>Total Penghasilan</td>
                <td>Rp{totalRevenue},00</td>
              </tr>
            </tbody>
          </Table>

          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th colSpan="2">Produk List</th>
              </tr>
              <tr>
                <th>Nama</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>Rp{product.price},00</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="table-responsive">
            <Table striped bordered hover className="mt-4">
              <thead>
                <tr>
                  <th colSpan="5">User List</th>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Nama Lengkap</th>
                  <th>Email</th>
                  <th>No Handphone</th>
                  <th>Alamat</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Dashboard;
