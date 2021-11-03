import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import * as actions from './actions';

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, {payload}) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});


const filter = createReducer('', {
  [actions.filterContact]: (_state, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
