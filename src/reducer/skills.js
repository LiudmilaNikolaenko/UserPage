import {Record, OrderedMap} from 'immutable';
import {arrToMap} from '../helpers';
import {skills} from '../data';

const SkillRecord = Record({
    id: null, 
    name: null, 
    level: null
});

const defaultSkills = new OrderedMap(arrToMap(skills, SkillRecord));

export default (skillsState = defaultSkills, action) => {

    return skillsState;
    
};