import {Record} from 'immutable';
import {ADD_CONTACT} from '../AC';
import {user} from '../data';

const UserRecord = Record({
  id: null,
  surname: null,
  name: null,
  position: null,
  goals: null,
  dreams: null,
  photo: null,
  skills: [],
  phone: null,
  email: null,
  skype: null,
  contacts: []
});

const defaultUser = new UserRecord(user);

export default (userState = defaultUser, action) => {
  const {type, randomId} = action;

  switch (type) {
    case ADD_CONTACT:
      return userState.update(
        'contacts',
        contacts => contacts.concat(randomId)
      );
    default:
      return userState;
  }

}