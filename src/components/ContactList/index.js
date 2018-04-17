import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapToArr} from '../../helpers';
import './contactlist.css';

class ContactList extends React.Component {
  static propTypes = {
    contacts: PropTypes.array
  };

  render() {
    const {contacts} = this.props;
    if (!contacts.length) return (
      <div className="contact_list">
        <p>No contacts.</p>
      </div>
    );
    return (
      <div className="contact_list">
        <ul>
          {contacts.map(contact => 
            <li key = {contact.id}>
              {contact.cmesage} <span>by {contact.cname} ({contact.cemail})</span>
            </li>)}
        </ul>
      </div>
    )
  };
  
};

export default connect((state) => ({
  contacts: mapToArr(state.contacts)
}))(ContactList);