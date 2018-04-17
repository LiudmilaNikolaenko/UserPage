import randomID from 'random-id';

export const ADD_CONTACT = 'ADD_CONTACT';

export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    payload: { contact },
    randomId: randomID(17,"0a")
  }
};