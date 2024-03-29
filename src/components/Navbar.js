import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css';
import { IconContext } from 'react-icons/lib';


/* Navbar Function */
function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <div className='auct'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='navbar-icon' alt='Auction Haeus and Liquidation Centre' src={'images/AuctionLogoIcon.png'} />
                        Auction Haeus & Liquidation Centre
                    </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/FAQ' className='nav-links' onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        <li className='nav-btn'>
                            {button ? (
                                <Link to= {{ pathname:'https://auctionhaeus.hibid.com/' }} rel='noopener' target='_blank' className='btn-link' onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline'>BID NOW</Button>
                                </Link>
                            ): (
                                <Link to= {{ pathname: 'https://auctionhaeus.hibid.com/' }} rel='noopener' target='_blank' className='btn-link'>
                                    <Button buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'
                                        onClick={closeMobileMenu}
                                        >BID NOW</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
