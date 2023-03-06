import { useState } from 'react';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsAPI';

import { InfinitySpin } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactsItem } from './ContactItem';
import { ContactsList } from './Contacts.styled';
import Modal from './Modal';
import theme from 'theme';

import useToggleModal from 'hooks/useToggleModal';

const Contacts = () => {
  const { data: myContacts = [], isLoading, error } = useGetContactsQuery();

  const [modalData, setModalData] = useState({});
  const { showModal, toggleModal } = useToggleModal();

  const handleModal = contact => {
    setModalData(contact);
    toggleModal();
  };

  const { filterValue } = useSelector(getFilter);

  const visibleСontacts = (value, contacts) => {
    if (value) {
      const visibleСontacts = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(value);
      });
      if (visibleСontacts.length === 0) {
        Notify.failure('No contacts with this name', {
          showOnlyTheLastOne: true,
          position: 'right-top',
        });
      } else {
        return visibleСontacts;
      }
    }
    return contacts;
  };

  return (
    <>
      {!myContacts.length > 0 && isLoading && (
        <InfinitySpin width="200" color={theme.colors.accent} />
      )}
      <ContactsList>
        {visibleСontacts(filterValue, myContacts).map(contact => (
          <ContactsItem
            key={contact.id}
            handleModal={handleModal}
            contact={contact}
          />
        ))}
      </ContactsList>
      {showModal && (
        <Modal
          onClick={toggleModal}
          showModal={showModal}
          contact={modalData}
        />
      )}
    </>
  );
};

export default Contacts;
