import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Notify } from 'notiflix';

import { IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { RiLoginBoxFill } from 'react-icons/ri';

import { useUserLogInMutation } from 'redux/userAPI';
import { setAuthHeader } from 'redux/axiosBaseQuery';
import { setAuth } from 'redux/authSlice';

import FormField from 'components/shared/FormField';
import { LoginForm as Form } from './LoginForm.styled';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const [userLogIn, { data, isError, isLoading, isSuccess }] =
    useUserLogInMutation();

  useEffect(() => {
    if (isSuccess) {
      Notify.success(`Woohoo! Glad to see you again ${data.user.name}! `);
      setAuthHeader(data.token);
      dispatch(setAuth(data));
    }

    if (isError) {
      Notify.failure(`What a shame! User login error.`);
    }
  }, [data, dispatch, isError, isSuccess]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={({ email, password }, { resetForm }) => {
        const user = {
          email: email.trim(),
          password: password.trim(),
        };

        userLogIn(user);
        resetForm();
      }}
    >
      <Form>
        <Box mb={[5]}>
          <FormField
            type="email"
            label="Email"
            icon={IoIosMail}
            placeholder="mail@mail.com"
          />
        </Box>

        <Box mb={[5]}>
          <FormField
            type="password"
            label="Password"
            icon={RiLockPasswordFill}
            placeholder="********"
          />
        </Box>

        <Button
          type="submit"
          isLoading={isLoading}
          icon={RiLoginBoxFill}
          disabled={isLoading ? true : false}
          children="Log in"
          iconSize={20}
        />
      </Form>
    </Formik>
  );
};

export default LoginForm;
