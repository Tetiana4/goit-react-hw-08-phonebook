import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { filterContact } from './actions';
import * as actions from './actions';

const reducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_state, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  contacts: reducer,
  filter,
});
