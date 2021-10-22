import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './operations';
import * as actions from './actions';

const reducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_state, { payload }) => payload,
});

export default combineReducers({
  contacts: reducer,
  filter,
});
