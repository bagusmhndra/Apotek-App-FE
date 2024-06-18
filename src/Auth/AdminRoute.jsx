import React from 'react';
import { Navigate } from 'react-router-dom';
import api from '../api';

export const AdminRoute = ({ element }) => {
  const token = localStorage.getItem('authToken');
  const user = JSON.parse(localStorage.getItem('userData'));

  if (token && (user?.role === 'Admin' || user?.role === 'Superadmin')) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;
