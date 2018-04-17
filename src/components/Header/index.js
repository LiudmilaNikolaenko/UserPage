import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  static propTypes = {
    surname: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string
  };

  render() {
    const {surname, name, position} = this.props;
    return (
      <div className="header">
        <div className="menu">
          <NavLink to="/" className="menu__l">{'</>'}</NavLink>
          <div className="menu__r">
            <NavLink to="/home" className="menu__item" activeClassName="menu__item--active">Home</NavLink>
            <NavLink to="/about" className="menu__item" activeClassName="menu__item--active">About</NavLink>
            <NavLink to="/skills" className="menu__item" activeClassName="menu__item--active">Skills</NavLink>
            <NavLink to="/contact" className="menu__item" activeClassName="menu__item--active">Contact</NavLink>
          </div>
        </div>
        <div className="title">
          <h1>{name} {surname}</h1>
          <h3>{position}</h3>
        </div>
      </div>
    )
  };

};

export default connect((state) => ({
  surname: state.user.surname,
  name: state.user.name,
  position: state.user.position
}), {}, null, {pure: false})(Header);