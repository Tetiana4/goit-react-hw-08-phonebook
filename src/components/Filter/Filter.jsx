import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/Contacts';
import { getFilter } from '../../redux/Contacts';
import { Label } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeChandler = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Label>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChangeChandler} />
    </Label>
  );
};
