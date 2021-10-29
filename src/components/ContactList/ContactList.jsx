import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactListItem } from '../ContactListItem';
import { getVisibleList } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleList);

  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
