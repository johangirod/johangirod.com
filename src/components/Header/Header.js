import React from 'react';
import SocialIcons from 'react-social-icons';
import avatarImg from './images/avatar.jpg';
import s from './header.module.css';

const Header = () => (
    <header className={s.container}>
        <div className={s['background-img']}>
            <div className={s['social-icons']}>
                <SocialIcons
                    color="rgba(255,255,255,0.8)"
                    urls={[
                        'https://github.com/johangirod',
                        'https://linkedin.com/in/johangirod',
                        'https://twitter.com/ganceab_',
                        'https://codepen.io/ganceab',
                        'mailto:hi@johangirod.com',
                    ]}
                    className={s['social-icon']}
                />
            </div>
        </div>
        <img title="Avatar image" alt="Moi" src={avatarImg} className={s['avatar-img']} />
        <h1>
            Johan Girod <br />
            <small>Expert React et technologies Front-end</small>
        </h1>
    </header>
);

export default Header;
