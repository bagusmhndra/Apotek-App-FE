import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// AUTH
import Login from './Auth/Login';
import Register from './Auth/Register';

// PAGES
import Home from './Pages/User/Home';
import AboutUs from './Pages/User/AboutUs';
import Contact from './Pages/User/Contact';
import Category from './Pages/User/Category';
import Diagnosis from './Pages/User/Diagnose';
import DetailProduct from './Pages/User/DetailProduct';
import Product from './Pages/User/Product';
import NotFoundPage from './Pages/User/NotFoundPage';

// DASHBOARD
import DashboardPage from './Pages/Admin/DashboardPage';

const App = () => {

  return (
    <Router>
      <div className="app-container">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/products" element={<Product />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <DashboardPage />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
