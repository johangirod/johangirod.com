import React from 'react';
import s from './contact.module.css';

const Contact = () => (
    <section className={s.contact}>
        <h2> Envie de travailler ensemble ? </h2>
        <a
            className={s.cta}
            href="&#x6d;&#x61;&#x69;&#x6c;&#116;&#x6f;&#58;&#104;&#x69;&#64;&#106;&#x6f;&#x68;&#97;&#x6e;&#x67;&#105;&#114;&#x6f;&#100;&#46;&#99;&#111;&#109;"
        >
            Partager votre projet
        </a>
    </section>
);

export default Contact;
