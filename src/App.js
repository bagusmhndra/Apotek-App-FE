import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//AUTH
import Login from './Auth/Login';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';

//COMPONENT
import Header from './Components/Header';
import Footer from './Components/Footer';

//PAGES
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Category from './Pages/Category';
import Diagnosis from './Pages/Diagnose';
import DetailProduct from './Pages/DetailProduct';
import Product from './Pages/Product';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowForgotPassword(false);
  };

  const handleCloseLogin = () => setShowLogin(false);

  const handleShowRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowForgotPassword(false);
  };

  const handleCloseRegister = () => setShowRegister(false);

  const handleShowForgotPassword = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowForgotPassword(true);
  };

  const handleCloseForgotPassword = () => setShowForgotPassword(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Header onLoginClick={handleShowLogin} onRegisterClick={handleShowRegister} isAuthenticated={isAuthenticated} onLogoutClick={handleLogout} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category" element={<Category />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/products" element={<Product />} />
            <Route path="/detail-product" element={<DetailProduct />} />
          </Routes>
        </div>
        <Footer />
        <Login show={showLogin}
          handleClose={handleCloseLogin}
          handleShowRegister={handleShowRegister}
          handleShowForgotPassword={handleShowForgotPassword}
          onLoginSuccess={handleLoginSuccess} />
        <Register show={showRegister} handleClose={handleCloseRegister} />
        <ForgotPassword show={showForgotPassword} handleClose={handleCloseForgotPassword} />
      </div>
    </Router>
  );
}

export default App;