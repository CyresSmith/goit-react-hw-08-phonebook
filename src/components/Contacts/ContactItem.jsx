import { IoMdPerson, IoIosCall } from 'react-icons/io';
import { MdPersonRemoveAlt1 } from 'react-icons/md';
import { BiLoaderCircle } from 'react-icons/bi';
import { FaUserEdit } from 'react-icons/fa';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useRemoveContactMutation } from 'redux/contactsAPI';

import { Contact, Name, DeletBtn, EditBtn, Loader } from './Contacts.styled';
import theme from 'theme';
import Box from 'components/shared/Box';

export const ContactsItem = ({ handleModal, contact }) => {
  const { id, name, number } = contact;
  const [
    removeContact,
    {
      isLoading: isRemoveLoading,
      isSuccess: isRemoveSuccess,
      isError: isRemoveError,
      error: removeError,
    },
  ] = useRemoveContactMutation();

  const handleContactRemove = id => {
    Confirm.show(
      'Confirm contact delete',
      'Are you sure you want to delete a contact?',
      'Yes',
      'No',
      () => {
        removeContact(id);
      },
      () => {
        return;
      },
      {
        backOverlayColor: 'rgba(0, 0, 0, 0.8)',
        fontFamily: theme.fonts.body,
        titleColor: theme.colors.accent,
        messageColor: theme.colors.accent,
        okButtonColor: 'white',
        okButtonBackground: 'red',
        borderRadius: theme.radii.high,
        cancelButtonBackground: theme.colors.background,
        backgroundColor: theme.colors.secondary,
      }
    );
  };

  if (isRemoveSuccess) {
    Notify.warning(`Сontact successfully deleted`, {
      position: 'right-top',
    });
  }

  if (isRemoveError) {
    switch (removeError.code) {
      case 401:
        Notify.failure(`What a shame! Some problems with authorization.`, {
          position: 'right-top',
        });
        break;

      case 404:
        Notify.failure(`What a shame! There is no such user collection.`, {
          position: 'right-top',
        });
        break;

      case 500:
        Notify.failure(`What a shame! Some server error, try again later`, {
          position: 'right-top',
        });
        break;

      default:
        break;
    }
  }

  return (
    <Contact>
      <Box>
        <Box display="flex" alignItems="center" mb={[4]}>
          <IoMdPerson size={20} color={theme.colors.secondary} />
          <Name>{name}</Name>
        </Box>
        <Box display="flex" alignItems="center">
          <IoIosCall size={20} color={theme.colors.secondary} />
          <Name>{number}</Name>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <EditBtn
          disabled={isRemoveLoading ? true : false}
          onClick={() => handleModal(contact)}
        >
          {isRemoveLoading && (
            <Loader>
              <BiLoaderCircle size={20} color={theme.colors.white} />
            </Loader>
          )}
          {!isRemoveLoading && (
            <FaUserEdit size={20} color={theme.colors.white} />
          )}
        </EditBtn>

        <DeletBtn
          disabled={isRemoveLoading ? true : false}
          onClick={() => handleContactRemove(id)}
        >
          {isRemoveLoading && (
            <Loader>
              <BiLoaderCircle size={20} color={theme.colors.white} />
            </Loader>
          )}
          {!isRemoveLoading && (
            <MdPersonRemoveAlt1 size={20} color={theme.colors.white} />
          )}
        </DeletBtn>
      </Box>
    </Contact>
  );
};
