import React from 'react';
import Header from '../components/Header/Header';
import Résumé from '../components/Résumé/Résumé';
import Contact from '../components/Contact/Contact';
import Skills from '../components/Skills/Skills';

const Home = () => (
    <div>
        <Header />
        <Résumé />
        <Skills />
        <Contact />
    </div>
);

export default Home;
