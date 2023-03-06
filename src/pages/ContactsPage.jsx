import Contacts from 'components/Contacts';
import Section from 'components/shared/Section';

import AddContactForm from 'components/Contacts/AddContactForm';
import Filter from 'components/Contacts/Filter';
import { GridBox } from './ContactsPage.styled';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/selectors';

const ContactsPage = () => {
  const { token } = useSelector(getAuth);

  return (
    <>
      {token !== '' ? (
        <Section>
          <GridBox>
            <Filter />
            <AddContactForm />
          </GridBox>
          <Contacts />
        </Section>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default ContactsPage;
