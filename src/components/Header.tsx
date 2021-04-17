/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import logo from '../logo.svg';

function Header() {
    return (
        <div id="page-header">
            <header id="header">
                <div className="logo">
                    <img
                        id="header-img"
                        src={logo}
                        alt="mon pro web logo"
                    />
                </div>

                <nav id="nav-bar">
                    <ul>
                        <li><a className="nav-link" href="#features">Features</a></li>
                        <li><a className="nav-link" href="#how-it-works">How It Works</a></li>
                        <li><a className="nav-link" href="#pricing">Pricing</a></li>
                    </ul>
                </nav>
            </header>

            <div className="container"></div>
        </div >
    );
}

export default Header;
