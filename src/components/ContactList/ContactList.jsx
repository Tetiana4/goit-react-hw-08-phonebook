import React from 'react';
import { ContactListItem } from '../ContactListItem';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { getVisibleList } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getVisibleList);

  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
