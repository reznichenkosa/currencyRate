import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__title"><NavLink to="/" className='header__link'>Currency<span>RATE</span></NavLink></div>
                </div>
            </div>
        </header>
    );
};

export default Header;