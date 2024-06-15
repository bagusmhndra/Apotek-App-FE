import React from 'react';
import { Card, Table } from 'react-bootstrap';

const PharmacyDatabase = ({ customers, products, pharmacists }) => (
  <Card>
    <Card.Body>
      <Card.Title>Database Apotek</Card.Title>
      <Card.Text>Data Pelanggan</Card.Text>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Card.Text>Data Produk</Card.Text>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Card.Text>Data Apoteker</Card.Text>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {pharmacists.map(pharmacist => (
            <tr key={pharmacist.id}>
              <td>{pharmacist.id}</td>
              <td>{pharmacist.name}</td>
              <td>{pharmacist.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  </Card>
);

export default PharmacyDatabase;
