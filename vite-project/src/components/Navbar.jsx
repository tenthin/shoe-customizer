import React, { useState } from 'react';
import logo from '../assets/h-horizontal-logo.png';

const Navbar = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleSearch= () =>{
        setShowSearch(!showSearch);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className={`header-search ${showSearch ? 'show' : ''}`}>
                <div className="header-search-inner">
                    <form method='get' action="">
                        <input type="search" placeholder='Type and press enter' name="s" id='s' />
                    </form>
                </div>
            </div>

            <div className="nav-toggle" onClick={toggleMenu}>
                <p>Menu</p>
                <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <div className={`mobile-menu-container ${showMenu ? 'show' : 'hidden'}`}>
                <ul className="mobile-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">Company</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="" className='active-link'>Shop</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Company</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="" className='active-link'>Shop</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                    <li><button className="search-icon" onClick={toggleSearch}>Search</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;