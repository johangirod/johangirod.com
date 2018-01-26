import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
import avatarUrl from '../components/Header/images/avatar.jpg';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <title>Johan Girod - Expert React et technologies Front-end</title>
            <meta
                name="description"
                content="Ingénieur de formation, je me suis spécialisé sur les
            technologies Front-end. Expert en Javascript, React, HTTP,  Webpack..."
            />
            <meta
                name="keywords"
                content="react, freelance, expert, front-end, johan girod, development"
            />
            <meta property="og:title" content="Johan Girod" />
            <meta property="og:type" content="profile" />
            <meta property="og:url" content="https://johangirod.com/" />
            <meta property="og:image" content={avatarUrl} />
            <meta
                property="og:description"
                content="Expert React et technologies Front-end. Compétences, contact, liens, experiences."
            />
            <script type="application/ld+json">
                {`
            {
                "@context": "http://schema.org",
                "@type": "Person",
                "gender": "male",
                "nationality": "French",
                "alumniOf": "Ensimag",
                "height": "181 cm",
                "url": "https://johangirod.com",
                "name": "Johan Girod",
                "birthDate": "1991-06-11",
                "jobTitle": "Ingénieur Front-end",
                "image": "${avatarUrl}"
            }
            `}
            </script>
        </Helmet>
        {children()}
    </div>
);

export default TemplateWrapper;
