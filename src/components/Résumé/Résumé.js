import React from 'react';

const yearSince = (dateString) => {
    const diffAsDate = new Date(Date.now() - new Date(dateString));
    return Math.abs(diffAsDate.getUTCFullYear() - 1970);
};

const Résumé = () => (
    <section>
        <p>
            <strong>Ingénieur</strong> de formation, je me suis spécialisé sur les{' '}
            <strong>technologies Front-end</strong>. Le dynamisme, le foisonnement d’expérimentation
            et la quantité d’innovation que l’on peut trouver dans l’écosystème front est entré en
            résonance avec ma propre <strong>soif de découverte</strong>
            et ma quête de nouveaux horizons.
        </p>

        <p>
            Parlez moi de <strong>programmation fonctionnelle</strong>, de typage statique, de
            progressive app, de state management ou de <strong>lean UX</strong> et je peux continuer
            pendant des heures (surtout avec une bière à la main).
        </p>
        <p>
            Une grosse affinité pour le <strong>produit</strong>. J’aime comprendre pourquoi je fait
            les choses. J’aime <strong>comprendre le métier</strong>. J’aime être parti prenante
            dans l’élaboration du produit, avec le <strong>reste de la team</strong>. Je crois
            d’ailleurs que les meilleurs réalisations sont celles qui sont{' '}
            <strong>co-construites</strong> avec toutes les compétences representée (Produit, UX,
            Front, Back).
        </p>
        <p>
            Voilà maintenant <strong>{yearSince('2013-07-01')} ans</strong> que je fait du front,
            dont <strong>{yearSince('2015-12-01')} ans</strong> sur React uniquement.
        </p>
        <p>
            Auteur de <a href="https://github.com/Evaneos/vitaminjs">vitaminjs</a>
        </p>
        <p>
            Je suis aussi passioné de <a href="https://vagalam.bike"> voyage à vélo </a>
        </p>
    </section>
);

export default Résumé;
