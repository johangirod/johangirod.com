import React from 'react';
import SkillCard from './SkillCard';
import s from './skills.module.css';

const Skills = () => (
    <section>
        <h2> Compétences </h2>
        <div className={s['card-container']}>
            <SkillCard
                title="Expert"
                skillList={['React', 'Javascript', 'HTTP', 'Redux', 'Webpack']}
            />
            <SkillCard
                title="Compétent"
                skillList={[
                    'Node.js',
                    'Test Driven Developement',
                    'Flow',
                    'Jest',
                    'CSS',
                    'Babel',
                    'Programmation Fonctionnelle',
                ]}
            />
            <SkillCard
                title="Prochain talents"
                skillList={['Elm', 'Rust', 'Web assembly', 'CycleJS', 'ReactiveX']}
            />
        </div>
    </section>
);

export default Skills;
