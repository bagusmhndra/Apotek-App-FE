import React, { useEffect, useState, useCallback } from "react";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";
import SalesSummary from "../Admin/SalesSummary";
import PharmacyDatabase from "../Admin/PharmacyDatabase";
import StoreAnalysis from "../Admin/StoreAnalysis";
import CalendarWidget from "../Admin/CalendarWidget";
import { getItems } from "./Api";
import { Container, Row, Col } from 'react-bootstrap';

const DashboardPage = () => {
  const [items, setItems] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [pharmacists, setPharmacists] = useState([]);
  const [salesData, setSalesData] = useState([]);

  const fetchItems = useCallback(async () => {
    const data = await getItems();
    setItems(data);
    // Example data fetching
    setTotalSales(5000); // Dummy data
    setCustomers([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" }
    ]);
    setProducts([
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 }
    ]);
    setPharmacists([
      { id: 1, name: "Pharmacist 1", email: "ph1@example.com" },
      { id: 2, name: "Pharmacist 2", email: "ph2@example.com" }
    ]);
    setSalesData([
      { date: '2021-01-01', sales: 400 },
      { date: '2021-01-02', sales: 300 },
      { date: '2021-01-03', sales: 500 }
    ]);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <>
      <HeaderDashboard />
      <Container fluid>
        <Row className="mt-4">
          <Col md={4}>
            <SalesSummary totalSales={totalSales} />
          </Col>
          <Col md={8}>
            <StoreAnalysis salesData={salesData} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <PharmacyDatabase customers={customers} products={products} pharmacists={pharmacists} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="d-flex justify-content-end">
            <CalendarWidget />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DashboardPage;
