import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItem, Span, Button } from './ContactListItem.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));
  return (
    <ListItem key={id}>
      <Span>{name}</Span>
      <Span>{number}</Span>
      <Button onClick={() => onDelete(id)}>
        {/* {isDeleting ? 'Deleting...' : 'Delete'} */}
      </Button>
    </ListItem>
  );
};

ContactListItem.propeTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.number,
};
