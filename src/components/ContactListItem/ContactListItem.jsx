import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/Contacts';
import { ListItem, Span, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ListItem key={id}>
      <Span>{name}</Span>
      <Span>{number}</Span>
      <Button onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </ListItem>
  );
};

ContactListItem.propeTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
};
