import React, { useEffect } from 'react';
import { ContactListItem } from '../ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { List } from './ContactList.styled';
import { getVisibleList } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

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
