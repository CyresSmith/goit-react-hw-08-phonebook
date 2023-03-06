import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';

import { IoMdPerson, IoIosMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { ImUserPlus } from 'react-icons/im';

import { useUserSignUpMutation } from 'redux/userAPI';
import { setAuthHeader } from 'redux/axiosBaseQuery';
import { setAuth } from 'redux/authSlice';

import Button from 'components/shared/Button';
import Box from 'components/shared/Box';
import FormField from 'components/shared/FormField';
import { RegisterForm as Form } from './RegisterForm.styled';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be valid email').required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [userSignUp, { data, isError, isLoading, isSuccess, error }] =
    useUserSignUpMutation();

  if (isSuccess) {
    Notify.success(
      `Welcome aboard, ${data.user.name}! Registration successful!`
    );
    setAuthHeader(data.token);
    dispatch(setAuth(data));
  }

  if (isError) {
    switch (error.status) {
      case 400:
        Notify.failure(`What a shame! User creation error.`);
        break;

      case 500:
        Notify.failure(`What a shame! Server error.`);
        break;

      default:
        Notify.failure(`What a shame! Some problems happend.`);
        break;
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={({ name, email, password }, { resetForm }) => {
        const user = {
          name: name.trim(),
          email: email.trim(),
          password: password.trim(),
        };

        resetForm();
        userSignUp(user);
      }}
    >
      <Form>
        <Box mb={[5]}>
          <FormField
            type="name"
            label="Name"
            icon={IoMdPerson}
            placeholder="Name"
          />
        </Box>
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
          icon={ImUserPlus}
          disabled={isLoading ? true : false}
          children="Registration"
          iconSize={20}
        />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
