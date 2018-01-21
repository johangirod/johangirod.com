import React from 'react';
import northernLightImg from './images/northern_lights.jpg';
import avatarImg from './images/avatar.jpg';
import s from './header.module.css';

const Header = () => (
    <header className={s.container}>
        <img
            title="Header background image"
            alt="Aurore boréale vue dans le ciel du cap nord, en Norvège septentrionale"
            src={northernLightImg}
            className={s.backgroundImg}
        />
        <img
            title="Avatar image"
            alt="Moi, Johan Girod, dans un bateau en Irlande avec une veste de pluie"
            src={avatarImg}
            className={s.avatarImg}
        />
        <h1>
            Johan Girod <br />
            <small>Expert React et technologies Front-end</small>
        </h1>
    </header>
);

export default Header;
