import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './about.css';

class About  extends React.Component {
  static propTypes = {
    goals: PropTypes.string,
    dreams: PropTypes.string,
    photo: PropTypes.string
  };

  render() {
    const {goals, dreams, photo} = this.props;
    return (
      <div className="about">
        <h2>ABOUT</h2>
        <div className="about__wrapper">
          <div className="about__item">
            <h4>Goals</h4>
            <p>{goals}</p>
          </div>
          <div className="about__photo">
            <img src={require(`./${photo}`)} alt="" />
          </div>
          <div className="about__item align_left">
            <h4>Dreams</h4>
            <p>{dreams}</p>
          </div>
        </div>
      </div>
    )
  };

};

export default connect((state) => ({
  goals: state.user.goals,
  dreams: state.user.dreams,
  photo: state.user.photo
}))(About);