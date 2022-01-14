import React from 'react';
import { Container, Title, Button } from './modal.styled';

export const ModalOut = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <Button>Yes</Button>
        <Button>No</Button>
      </div>
    </Container>
  );
};
