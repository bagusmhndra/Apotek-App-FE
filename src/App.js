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
import DetailProduct from './Pages/User/DetailProduct';
import Product from './Pages/User/Product';
import NotFoundPage from './Pages/User/NotFoundPage';

// DASHBOARD
import DashboardPage from './Pages/Admin/DashboardPage';
import MyProfilePage from './Pages/Admin/MyProfilePage';
import ProductList from './Pages/Admin/ProductList';
import UserListPage from './Pages/Admin/UserListPage';

const App = () => {

  return (
    <Router>
      <div className="app-container">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/detail-product" element={<DetailProduct />} />
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
          <Route
            path="/dashboard/my-profile"
            element={
              <MyProfilePage />
            }
          />
          <Route
            path="/dashboard/product-list"
            element={
              <ProductList />
            }
          />
          <Route
            path="/dashboard/user-list"
            element={
              <UserListPage />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
