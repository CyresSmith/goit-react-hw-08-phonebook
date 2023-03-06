import LoginForm from 'components/LoginForm';
import Section from 'components/shared/Section';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';

const LoginPage = () => {
  const { token } = useSelector(getAuth);

  return (
    <>
      {token === '' ? (
        <Section>
          <LoginForm />
        </Section>
      ) : (
        <Navigate to="/contacts" />
      )}
    </>
  );
};

export default LoginPage;
