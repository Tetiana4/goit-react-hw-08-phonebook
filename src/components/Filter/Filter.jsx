import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts';
import { Label, Title } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeChandler = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Label>
      <Title>Contacts</Title>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChangeChandler} />
    </Label>
  );
};
