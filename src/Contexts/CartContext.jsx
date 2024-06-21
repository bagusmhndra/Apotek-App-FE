import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    try {
      const response = await api.get('/cart');
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (productId, quantity) => {
    try {
      await api.post('/cart', { productId, quantity });
      fetchCart(); // Refresh cart after adding item
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await api.delete(`/cart/${itemId}`);
      fetchCart(); // Refresh cart after removing item
    } catch (error) {
      console.error('Error removing from cart', error);
    }
  };

  const updateCartItemQuantity = async (itemId, quantity) => {
    try {
      await api.put(`/cart/${itemId}`, { quantity });
      fetchCart(); // Refresh cart after updating item quantity
    } catch (error) {
      console.error('Error updating cart item quantity', error);
    }
  };

  const checkout = async () => {
    try {
      await api.post('/order/checkout');
      setCart([]);
      fetchCart();
    } catch (error) {
      console.error('Error during checkout', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, fetchCart, addToCart, removeFromCart, updateCartItemQuantity, checkout }}>
      {children}
    </CartContext.Provider>
  );
};
