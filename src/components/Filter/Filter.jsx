import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/Contacts';
import { getFilter } from '../../redux/Contacts';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeChandler = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <label>
      <input type="text" value={value} onChange={onChangeChandler} />
    </label>
  );
};
