import { Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';

import { IoIosCall, IoMdPerson } from 'react-icons/io';
import { RiSave3Fill } from 'react-icons/ri';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useEditContactMutation } from 'redux/contactsAPI';

import FormField from 'components/shared/FormField';

import { PhonebookForm as Form } from './EditContactForm.styled';
import Box from 'components/shared/Box';
import Button from 'components/shared/Button';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Number is not valid')
    .required('Required'),
});

const EditContactForm = ({ data, toggleModal }) => {
  const [
    editContact,
    { isLoading, isSuccess, isError, error, isUninitialized },
  ] = useEditContactMutation();

  useEffect(() => {
    if (!isUninitialized && isSuccess) {
      Notify.warning('Contact successfully changed');
    }

    if (!isUninitialized && isError) {
      Notify.failure('What a shame! Contact update failed.');
    }
  }, [isError, isSuccess, isUninitialized]);

  return (
    <Formik
      initialValues={{
        name: data.name,
        tel: data.number,
      }}
      validationSchema={ValidationSchema}
      onSubmit={({ name, tel }) => {
        const contact = {
          name: name,
          number: tel,
        };

        editContact({ contact: contact, id: data.id }).then(response =>
          toggleModal()
        );
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
            type="tel"
            label="Phone number"
            icon={IoIosCall}
            placeholder="Number: 000000000000"
          />
        </Box>

        <Button
          type="submit"
          isLoading={isLoading}
          icon={RiSave3Fill}
          disabled={isLoading ? true : false}
          children="Save"
          iconSize={20}
        />
      </Form>
    </Formik>
  );
};

export default EditContactForm;
