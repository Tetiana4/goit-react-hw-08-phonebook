import React from 'react';
import { Filter } from '../../components/Filter';
import { ContactList } from '../../components/ContactList';
import { Container, Title } from '../ContactsView/ContactsView.styled';
import { ContactForm } from '../../components/ContactForm';

export const ContactsView = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Filter />
      <ContactList />
    </Container>
  );
};
