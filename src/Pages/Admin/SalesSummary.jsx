import React from 'react';
import { Card } from 'react-bootstrap';

const SalesSummary = ({ totalSales }) => (
  <Card>
    <Card.Body>
      <Card.Title>Ringkasan Penjualan</Card.Title>
      <Card.Text>
        Total Penjualan: {totalSales}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default SalesSummary;
