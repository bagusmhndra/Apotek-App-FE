import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token and user data from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');

    // Remove the token from the default headers
    delete api.defaults.headers.common['Authorization'];

    // Redirect to the login page
    navigate('/');
  }, [navigate]);

  return null;
};

export default Logout;