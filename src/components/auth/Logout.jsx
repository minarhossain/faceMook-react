import React from 'react';
import logout from '../../assets/icons/logout.svg';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <button onClick={handleLogout} className='icon-btn'>
      <img src={logout} alt='Logout' />
    </button>
  );
};

export default Logout;
