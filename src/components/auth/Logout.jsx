import React from 'react';
import logout from '../../assets/icons/logout.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
    navigate('/login');
  };
  return (
    <button onClick={handleLogout} className='icon-btn'>
      <img src={logout} alt='Logout' />
    </button>
  );
};

export default Logout;
