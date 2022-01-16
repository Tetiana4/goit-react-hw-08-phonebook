import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Container,
  Title,
  Button,
  Backdrop,
  CloseButton,
} from './modal.styled';
const modalRoot = document.querySelector('#modal-root');

export default function ModalOut({ onClose, onAgree, title }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Container>
        <CloseButton type="button" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path d="M1 1L13 13" stroke="#52555F" strokeWidth="2" />
            <path d="M1 13L13 0.999999" stroke="#52555F" strokeWidth="2" />
          </svg>
        </CloseButton>
        <Title>{title}</Title>
        <div>
          <Button type="button" onClick={onAgree}>
            Yes
          </Button>
          <Button type="button" onClick={onClose}>
            No
          </Button>
        </div>
      </Container>
    </Backdrop>,
    modalRoot,
  );
}
