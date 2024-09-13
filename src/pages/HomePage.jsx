import React from 'react';
import RegistrationForm from '../components/prac/RegistrationForm';
import Header from '../components/common/Header';
import { useAuth } from '../hooks/useAuth';

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <Header />
      <p>Home page</p>
    </div>
  );
};

export default HomePage;
