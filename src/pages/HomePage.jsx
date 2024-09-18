import React from 'react';
import RegistrationForm from '../components/prac/RegistrationForm';
import Header from '../components/common/Header';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <p>Home page</p>
      <Link to='/profile'>Go to Porfile Page</Link>
    </div>
  );
};

export default HomePage;
