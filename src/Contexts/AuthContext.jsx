import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (token && userData) {
      setAuthToken(token);
      setUser(userData);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await api.post('/users/login', { username, password });
      if (response.status === 200) {
        const userData = response.data;
        const token = userData.token;
        localStorage.setItem('authToken', token);
        localStorage.setItem('userData', JSON.stringify(userData.user));
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthToken(token);
        setUser(userData.user);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      throw error.response?.data?.message || 'Login failed';
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setAuthToken(null);
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
