import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { CgClose } from 'react-icons/cg';

import useLockBodyScroll from 'hooks/useLockBodyScroll';

import IconButton from 'components/shared/IconButton';
import EditContactForm from 'components/Contacts/EditContactForm';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClick, showModal, contact }) => {
  const closeModal = useCallback(
    ({ code, target, currentTarget }) => {
      if (target === currentTarget || code === 'Escape') {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal, onClick]);

  useLockBodyScroll();

  return createPortal(
    <Backdrop onClick={closeModal}>
      <ModalWindow>
        <IconButton
          icon={CgClose}
          iconSize={20}
          ariaLable="close button"
          onClick={onClick}
          round={true}
        />

        <EditContactForm data={contact} toggleModal={onClick} />
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
