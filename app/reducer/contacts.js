import {Record, OrderedMap} from 'immutable';
import {arrToMap} from '../helpers';
import {ADD_CONTACT} from '../constants';
import {contacts} from '../data';

const ContactRecord = Record({
    id: null,
    cname: null,
    cemail: null,
    cmesage: null
});

const defaultContacts = new OrderedMap(arrToMap(contacts, ContactRecord));

export default (contactsState = defaultContacts, action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case ADD_CONTACT:
            return contactsState.set(randomId, 
                new ContactRecord({...payload.contact, id: randomId}));
    };

    return contactsState;
    
};