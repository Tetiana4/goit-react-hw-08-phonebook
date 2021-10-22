import React from 'react';
import { Filter } from '../../components/Filter';
import { ContactList } from '../../components/ContactList';
import { Title } from '../../components/App/App.styled';
import { ContactForm } from '../../components/ContactForm';

export const ContactsView = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />

      <Filter />
      <ContactList />
    </div>
  );
};
