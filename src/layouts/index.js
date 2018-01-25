import React from 'react';
import Helmet from 'react-helmet';
import './style.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <title>Johan Girod</title>
            <meta name="description" content="Expert en React et technologies Front-end" />
            <meta
                name="keywords"
                content="react, freelance, expert, front-end, johan girod, development"
            />
        </Helmet>
        {children()}
    </div>
);

export default TemplateWrapper;
