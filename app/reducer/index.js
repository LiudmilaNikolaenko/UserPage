import {combineReducers} from 'redux';
import user from './user';
import skills from './skills';
import contacts from './contacts';

export default combineReducers({
    user, skills, contacts
})