import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoutes from './routes/PrivateRoutes';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HomePage />} path='/' />
          <Route element={<ProfilePage />} path='/profile' />
        </Route>
        <Route element={<LoginPage />} path='/login' />
        <Route element={<RegistrationPage />} path='/registration' />
        <Route element={<NotFoundPage />} path='*' />
      </Routes>
    </>
  );
}

export default App;
