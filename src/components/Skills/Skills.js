import React from 'react';
import SkillCard from './SkillCard';
import s from './skills.module.css';
import starCool from './starCool.svg';
import starNerd from './starNerd.svg';
import starHappy from './starHappy.svg';

const Skills = () => (
    <section>
        <h2> Compétences </h2>
        <div className={s['card-container']}>
            <SkillCard
                title="Expert"
                skillList={['React', 'Javascript', 'HTTP', 'Redux', 'Webpack']}
                iconUrl={starHappy}
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
                iconUrl={starCool}
            />
            <SkillCard
                title="Prochain talents"
                iconUrl={starNerd}
                skillList={['Elm', 'Rust', 'Web assembly', 'CycleJS', 'ReactiveX']}
            />
        </div>
    </section>
);

export default Skills;
