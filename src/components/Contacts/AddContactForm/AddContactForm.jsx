import { Formik } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { memo, useEffect } from 'react';

import { IoIosCall, IoMdPerson, IoMdPersonAdd } from 'react-icons/io';

import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsAPI';

import { PhonebookForm as Form } from './AddContactForm.styled';
import Box from 'components/shared/Box';
import Button from 'components/shared/Button';
import FormField from 'components/shared/FormField';

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

const AddContactForm = () => {
  const { data: myContacts = [] } = useGetContactsQuery();

  const [
    addContact,
    {
      isLoading: isContactAddLoading,
      isSuccess: isContactAddSuccec,
      isError: isContactAddError,
      error: ContactaddError,
      isUninitialized,
    },
  ] = useAddContactMutation();

  const handleContactAdd = contact => {
    const { name } = contact;

    const normalizedName = name.toLowerCase().trim();

    const dublicate = myContacts.find(({ name }) => {
      return name.toLowerCase().trim() === normalizedName;
    });

    if (dublicate) {
      Notify.failure(`${name} already in contacts`, {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
      return;
    } else {
      addContact(contact);
    }
  };

  useEffect(() => {
    if (!isUninitialized && isContactAddSuccec) {
      Notify.success('Contact added successfully', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }

    if (!isUninitialized && isContactAddError) {
      Notify.failure('What a shame! Contact Add Error', {
        showOnlyTheLastOne: true,
        position: 'right-top',
      });
    }
  }, [isContactAddError, isContactAddSuccec, isUninitialized]);

  return (
    <Formik
      initialValues={{
        name: '',
        tel: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={({ name, tel }, { resetForm }) => {
        const contact = {
          name: name.trim(),
          number: tel.trim(),
        };

        handleContactAdd(contact);
        resetForm();
      }}
    >
      <Form>
        <Box mr={[5]}>
          <FormField
            type="name"
            label="Name"
            icon={IoMdPerson}
            placeholder="Name"
          />
        </Box>

        <Box mr="auto">
          <FormField
            type="tel"
            label="Phone number"
            icon={IoIosCall}
            placeholder="Number: 000000000000"
          />
        </Box>

        <Button
          type="submit"
          isLoading={isContactAddLoading}
          icon={IoMdPersonAdd}
          disabled={isContactAddLoading ? true : false}
          children="Add contact"
          iconSize={20}
        />
      </Form>
    </Formik>
  );
};

export default memo(AddContactForm);
