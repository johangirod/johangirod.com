import React from 'react';
import Header from '../components/Header/Header';
import Résumé from '../components/Résumé/Résumé';
import Skills from '../components/Skills/Skills';

const Home = () => (
    <React.Fragment>
        <Header />
        <Résumé />
        <Skills />
    </React.Fragment>
);

export default Home;
