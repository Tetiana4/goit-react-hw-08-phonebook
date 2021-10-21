import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

// import { v4 as uuidv4 } from 'uuid';
export const filterContact = createAction('changeFilter/Contact');

// export const addContact = createAction('add/Contact', data => ({
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// }));

// export const deleteContact = createAction('delete/Contact');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

// export async function addContact(contact) {
//   const { data } = await axios.post(`/contacts`, contact);
//   return data;
// }

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
