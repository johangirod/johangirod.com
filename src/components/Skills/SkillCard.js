import React from 'react';
import s from './skills.module.css';

const SkillCard = ({ title, skillList, iconUrl }) => (
    <div className={s.card}>
        <img src={iconUrl} alt="" />
        <h3>{title}</h3>
        <ul>{skillList.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </div>
);

export default SkillCard;
