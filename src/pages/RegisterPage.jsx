import RegisterForm from 'components/RegistartionForm/RegisterForm';
import Section from 'components/shared/Section';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';

const RegisterPage = () => {
  const { token } = useSelector(getAuth);

  return (
    <>
      {token === '' ? (
        <Section>
          <RegisterForm />
        </Section>
      ) : (
        <Navigate to="/contacts" />
      )}
    </>
  );
};

export default RegisterPage;
