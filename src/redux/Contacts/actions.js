import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
export const filterContact = createAction('changeFilter/Contact');
export const addContact = createAction('add/Contact', data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

export const deleteContact = createAction('delete/Contact');
