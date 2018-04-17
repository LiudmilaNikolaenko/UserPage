import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapToArr} from '../../helpers';
import './skills.css';

class Skills extends React.Component {
  static propTypes = {
    skills: PropTypes.array,
  };

  render() {
    const {skills} = this.props;
    return (
      <div className="skills">
        <h2>SKILLS</h2>
        {skills.map(skill => 
          <div key = {skill.id} className="skills__item">
            <div className="skills__text">{skill.name}</div>
            <div className="skills__scale">{this.getLevel(skill.level)}</div>
          </div>)}
      </div>
    )
  };

  getLevel = level => {
    let levelArr = [];
    for (let i = 0; i < level; i++) {
      levelArr.push(<div key = {i} className="circle circle--dark"></div>)
    }
    for (let i = level; i < 10; i++) {
      levelArr.push(<div key = {i} className="circle circle--light"></div>)
    }
    return levelArr;
  }

};

export default connect((state) => ({
  skills: mapToArr(state.skills)
}))(Skills);