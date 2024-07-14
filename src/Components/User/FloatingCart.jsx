import React, { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Cart2, Trash, Plus, Dash } from 'react-bootstrap-icons';
import { CartContext } from '../../Contexts/CartContext';
import '../../Assets/css/FloatingCart.css';

const FloatingCart = ({ hideCartButton }) => {
  const location = useLocation();
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const floatingCartRef = useRef(null);

  const hideOnPaths = ['/dashboard', '/login', '/register', '/checkout', '/forgot-password', '/reset-password', '/*', '/contact', '/about-us', '/order-success', '/user-profile'];
  const shouldHide = hideOnPaths.some(path => location.pathname.startsWith(path));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (floatingCartRef.current && !floatingCartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleCheckout = () => {
    setShowCart(false);
    navigate('/checkout');
  };

  const handleRemoveItem = async (productId) => {
    try {
      await removeFromCart(productId);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleQuantityChange = async (productId, newQuantity) => {
    try {
      await updateCartItemQuantity(productId, newQuantity);
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  };

  if (hideCartButton || shouldHide) return null;

  return (
    <div className="floating-cart" ref={floatingCartRef}>
      <Button variant="primary" onClick={handleCartClick} className="floating-cart-button">
        <Cart2 size={30} />
        {cart && cart.items.length > 0 && <span className="cart-item-count">{cart.items.length}</span>}
      </Button>
      {showCart && cart && (
        <div className="floating-cart-details shadow">
          <Container>
            <Row>
              <Col>
                <h5>Cart</h5>
                {cart.items.map(item => (
                  <div key={item.product._id} className="cart-item">
                    <Image src={item.product.image || '/placeholder.png'} thumbnail />
                    <div className="cart-item-details">
                      <h6>{item.product.productName}</h6>
                      <p>
                        <span className="mr-2">{item.quantity} x</span>
                        <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.product.price)}</span>
                      </p>
                      <div className="cart-item-actions">
                        <Button variant="link" onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}>
                          <Dash />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button variant="link" onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}>
                          <Plus />
                        </Button>
                        <Button variant="link" onClick={() => handleRemoveItem(item.product._id)} className="ml-3">
                          <Trash />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="success" onClick={handleCheckout} disabled={cart.items.length === 0} className="checkout-button">
                  Checkout
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default FloatingCart;