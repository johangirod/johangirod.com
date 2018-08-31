import React from 'react';
import s from './résumé.module.css';

const yearSince = (dateString) => {
    const diffAsDate = new Date(Date.now() - new Date(dateString));
    return Math.abs(diffAsDate.getUTCFullYear() - 1970);
};

const Résumé = () => (
    <section className={s.resume}>
        <p>
            <strong>Ingénieur</strong> de formation, je me suis spécialisé sur les{' '}
            <strong>technologies Front-end</strong>. Le dynamisme, l'innovation et le foisonnement
            d’expérimentations que l'on trouve dans l’écosystème front est rentré en résonance avec
            ma propre <strong>soif de découverte</strong> et ma quête de nouveaux horizons.
        </p>

        <p>
            Parlez moi de <strong>programmation fonctionnelle</strong>, de typage statique, de
            progressive app, de state management ou de <strong>lean UX</strong> et je peux continuer
            pendant des heures (surtout une bière à la main).
        </p>
        <p>
            Une grosse affinité pour le <strong>produit</strong>. J’aime comprendre pourquoi je fais
            les choses. J’aime <strong>comprendre le métier</strong>. J’aime être partie prenante
            dans l’élaboration du produit, avec le <strong>reste de la team</strong>. Je crois
            d’ailleurs que les meilleurs réalisations sont celles qui sont{' '}
            <strong>co-construites</strong> avec toutes les compétences representées (Produit, UX,
            Front, Back).
        </p>
        <p>
            Voilà maintenant <strong>{yearSince('2013-07-01')} ans</strong> que je fais du front,
            dont <strong>{yearSince('2015-12-01')} ans</strong> sur React uniquement.
        </p>
        <p>
            Auteur de <a href="https://github.com/Evaneos/vitaminjs">vitaminjs</a>
        </p>
        <p>
            Je suis aussi un grand passionné de <a href="https://vagalam.bike"> voyage à vélo </a>
        </p>
    </section>
);

export default Résumé;
