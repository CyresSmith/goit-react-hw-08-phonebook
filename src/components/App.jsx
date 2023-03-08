import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';

import { useGetCurrentUserQuery } from 'redux/userAPI';
import { setAuthHeader } from 'redux/axiosBaseQuery';
import { setUser } from 'redux/authSlice';

import Spinner from './shared/Spinner';
import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(getAuth);

  useEffect(() => {
    if (!token) {
      return;
    }

    setAuthHeader(token);
  }, [token]);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetCurrentUserQuery(token, { skip: token === '' });

  if (isSuccess) {
    dispatch(setUser(data));
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
