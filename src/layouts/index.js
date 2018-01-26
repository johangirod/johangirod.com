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
            technologies Front-end. Expert en Javascript, React, HTTP ou encore Webpack."
            />
            <meta
                name="keywords"
                content="react, freelance, expert, front-end, johan girod, development"
            />
            <script type="application/ld+json">
                {`
            {
                "@context": "http://schema.org",
                "@type": "Person",
                "@language": "fr-FR",
                "gender": "male",
                "nationality": "French",
                "alumniOf": "Evaneos",
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
