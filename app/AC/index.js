import {ADD_CONTACT} from '../constants';

export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        payload: { contact },
        generateId: true
    }
};
