import { useState } from 'react';

import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactsAPI';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { ContactsItem } from './ContactItem';
import { ContactsList } from './Contacts.styled';
import Modal from './Modal';
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

  const visibleContacts = (value, contacts) => {
    if (value) {
      const visibleContacts = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(value);
      });
      if (visibleContacts.length === 0) {
        Notify.failure('No contacts with this name', {
          showOnlyTheLastOne: true,
          position: 'right-top',
        });
      } else {
        return visibleContacts;
      }
    }
    return contacts;
  };

  return (
    <>
      <ContactsList>
        {visibleContacts(filterValue, myContacts).map(contact => (
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
