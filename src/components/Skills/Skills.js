import React from 'react';

const Skills = () => (
    <section>
        <h2> Compétences </h2>
        <h3>Expert</h3>
        <ul>
            {['React', 'Javascript', 'HTTP', 'Redux', 'Webpack'].map(talent => <li>{talent}</li>)}
        </ul>
        <h3>Compétent</h3>
        <ul>
            {[
                'Node',
                'Test Driven Developement',
                'Flow',
                'Jest',
                'CSS',
                'Babel',
                'Programmation Fonctionnelle',
            ].map(talent => <li>{talent}</li>)}
        </ul>
        <h3>Prochains talents</h3>
        <ul>
            {['Elm', 'Rust', 'Web assembly', 'CycleJS', 'ReactiveX'].map(talent => (
                <li>{talent}</li>
            ))}
        </ul>
    </section>
);

export default Skills;
