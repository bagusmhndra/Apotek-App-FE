import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// AUTH
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import Logout from './Auth/Logout';
//import AdminRoute from './Auth/AdminRoute';

// PAGES
import Home from './Pages/User/Home';
import AboutUs from './Pages/User/AboutUs';
import Contact from './Pages/User/Contact';
import DetailProduct from './Pages/User/DetailProduct';
import Product from './Pages/User/Product';
import ProductsByCategory from "./Pages/User/ProductsByCategory";
import NotFoundPage from './Pages/User/NotFoundPage';
import Checkout from './Pages/User/Checkout';


// DASHBOARD
import DashboardPage from './Pages/Admin/DashboardPage';
import MyProfilePage from './Pages/Admin/MyProfilePage';
import ProductList from './Pages/Admin/ProductList';
import OrderListPage from './Pages/Admin/OrderListPage';
import UserListPage from './Pages/Admin/UserListPage';
import CategoryListPage from './Pages/Admin/Category';


const App = () => {

  return (
    <Router>
      <div className="app-container">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id_category" element={<ProductsByCategory />} />
          <Route path="/products/detail-product" element={<DetailProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* DASHBOARD */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/my-profile" element={<MyProfilePage />} />
          <Route path="/dashboard/product-list" element={<ProductList />} />
          <Route path="/dashboard/user-list" element={<UserListPage />} />
          <Route path="/dashboard/category-list" element={<CategoryListPage />} />
          <Route path="/dashboard/order-list" element={<OrderListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
