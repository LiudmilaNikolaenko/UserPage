import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addContact} from '../../AC';
import {Route} from 'react-router-dom';
import ContactList from '../ContactList';
import './contact.css';

class Contact extends React.Component {
  static propTypes = {
    phone: PropTypes.string,
    email: PropTypes.string,
    skype: PropTypes.string,
    addContact: PropTypes.func
  };

  state = {
    cname: '',
    cemail: '',
    cmesage: '',
    invalidForm: false
  };

  render() {
    const {phone, email, skype} = this.props;
    const {cname, cemail, cmesage} = this.state;
    return (
      <div className="contact">
        <h2>CONTACT</h2>
        <div className="contact__wrapper">
          <div className="contact__info">
            <h5>Phone number:</h5>
            <p>{phone}</p>
            <h5>Email:</h5>
            <p>{email}</p>
            <h5>Skype:</h5>
            <p>{skype}</p>
          </div>
          <div className="contact__form">
            <form onSubmit = {this.handleSubmit}>
              <p><input type = 'text'
                placeholder = "Name"
                value = {cname}
                onChange = {this.handleChange('cname')} 
                className = {this.getClassName('cname')} /></p>
              <p><input type = 'text'
                placeholder = 'Email'
                value = {cemail}
                onChange = {this.handleChange('cemail')} 
                className = {this.getClassName('cemail')} /></p>
              <p><textarea
                placeholder = 'Send a message'
                value = {cmesage}
                onChange = {this.handleChange('cmesage')}
                className = {this.getClassName('cmesage')} ></textarea></p>
              <p><button type = "submit">SEND</button></p>
            </form>
          </div>
        </div>
        <Route path='/contact' component={ContactList} />
      </div>
    )
  };

  handleChange = type => ev => {
    this.setState({ [type]: ev.target.value });
  };

  getClassName = type => {
    if (this.state.invalidForm) 
      return this.invalidValue(type) ? 'invalid_val' : '';
    return '';
  };

  handleSubmit = ev => {
    ev.preventDefault();
    if (this.invalidValue('cname') || this.invalidValue('cemail') || this.invalidValue('cmesage')) {
      this.setState({ invalidForm: true });
      return;
    };
    const {cname, cemail, cmesage} = this.state;
    console.log({cname, cemail, cmesage});
    this.props.addContact({cname, cemail, cmesage});
    this.setState({
      cname: '',
      cemail: '',
      cmesage: '',
      invalidForm: false
    });
  };

  invalidValue = type => {
    let pattern;
    const str = this.state[type];
    switch (type) {
      case 'cname': 
        pattern = /^[a-zA-Z0-9А-Яа-я]+$/;
        break;
      case 'cemail': 
        pattern = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        break;
      case 'cmesage':
        pattern = /[a-zA-Z0-9А-Яа-я]/;
        break;
      default:
        pattern = /[a-zA-Z0-9А-Яа-я]/;
    };
    if (pattern.test(str)) return false;
    else return true;
  };

};

export default connect((state) => ({
  phone: state.user.phone,
  email: state.user.email,
  skype: state.user.skype
}), { addContact })(Contact);