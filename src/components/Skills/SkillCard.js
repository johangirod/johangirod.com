import React from 'react';
import s from './skills.module.css';

const SkillCard = ({ title, skillList }) => (
    <div className={s.card}>
        <h3>{title}</h3>
        <ul>{skillList.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </div>
);

export default SkillCard;
