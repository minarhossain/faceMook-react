import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<LoginPage />} path='/login' />
        <Route element={<RegistrationPage />} path='/registration' />
        <Route element={<ProfilePage />} path='/profile' />
      </Routes>
    </>
  );
}

export default App;
