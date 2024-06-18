import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// AUTH
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';

// PAGES
import Home from './Pages/User/Home';
import AboutUs from './Pages/User/AboutUs';
import Contact from './Pages/User/Contact';
import DetailProduct from './Pages/User/DetailProduct';
import Product from './Pages/User/Product';
import NotFoundPage from './Pages/User/NotFoundPage';
import Vitamin from './Pages/User/VitaminC';
import Suplemen from './Pages/User/Suplemen';
import ObatBatuk from './Pages/User/ObatBatuk';
import ObatDemam from './Pages/User/ObatDemam';
import VitaminAnak from './Pages/User/VitaminAnak';
import ObatKulit from './Pages/User/ObatKulit';
import Checkout from './Pages/User/Checkout';


// DASHBOARD
import DashboardPage from './Pages/Admin/DashboardPage';
import MyProfilePage from './Pages/Admin/MyProfilePage';
import ProductList from './Pages/Admin/ProductList';
import UserListPage from './Pages/Admin/UserListPage';
import AddAdmin from './Pages/Admin/AddAdmin';
import OrderListPage from './Pages/Admin/OrderListPage';
import Settings from './Pages/Admin/Settings';


const App = () => {

  return (
    <Router>
      <div className="app-container">

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/detail-product" element={<DetailProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/products/vitamin-c" element={<Vitamin />} />
          <Route path="/products/suplemen" element={<Suplemen />} />
          <Route path="/products/obat-batuk" element={<ObatBatuk />} />
          <Route path="/products/obat-demam" element={<ObatDemam />} />
          <Route path="/products/vitamin-anak" element={<VitaminAnak />} />
          <Route path="/products/obat-kulit" element={<ObatKulit />} />
          <Route path="/checkout" element={<Checkout />} />


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
          <Route
            path="/dashboard/add-admin"
            element={
              <AddAdmin />
            }
          />
          <Route
            path="/dashboard/order-list"
            element={
              <OrderListPage />
            }
          />
          <Route
            path="/dashboard/settings"
            element={
              <Settings />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
