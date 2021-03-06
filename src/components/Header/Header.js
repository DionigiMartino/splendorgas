import React from 'react'
import callIcon from '../../utilities/img/iconachiamatarossa.svg'
import emailIcon from '../../utilities/img/iconamailrossa.svg'
import Logo from '../../utilities/img/LogoSplendorgas.png'

// import Style

import headerClasses from '../../utilities/Sass/headerStyle.module.css'

// importing Link to navigate 

import {Link} from 'react-router-dom'

function Header() {
    
    const menuHandler = () => {
            
        // Taking the reference to the menu div

        const buttonMenu = document.querySelector('button');
        const menuZone = document.querySelector('.headerStyle_cont__header_menuZone_inside__UY-x0');
        const line = document.querySelectorAll('.headerStyle_cont__header_menuZone_menu_line__2FA9m');

        menuZone.classList.toggle('headerStyle_open__3KOnJ');
        line.forEach(el => el.classList.toggle('headerStyle_changeColor__3RQrr'));
        buttonMenu.classList.toggle('headerStyle_no_bg__17qe2');
    }

    return (
        <div className={headerClasses.cont__header}>
            <div className={headerClasses.cont__header_cta}>
                <a href="tel:+390771674589">
                    <img src={callIcon} alt="Icon Call" /> 
                    0771.67.45.89
               </a>
                
                <a href="https://goo.gl/maps/wYCdLbE1vrWkfUuJ6">
                    <img src={emailIcon} alt="Icon Call" /> 
                    info@splendorgas.com
                </a>
            </div>

            <div className={headerClasses.cont__header_desktop}>
                <div className={headerClasses.cont__header_logo}>
                    <Link to="/">
                        <img src={Logo} alt="Logo Splendorgas" /> 
                    </Link>
                </div>

                <div className={headerClasses.cont__header_menuZone}>
                    <Link to="/contatti" className={headerClasses.cont__header_menuZone_cta}>
                        Richiedi un Preventivo
                    </Link>

                    <button className={headerClasses.cont__header_menuZone_menu} onClick={menuHandler}>
                        <span className={headerClasses.cont__header_menuZone_menu_line}></span>
                        <span className={headerClasses.cont__header_menuZone_menu_line}></span>
                        <span className={headerClasses.cont__header_menuZone_menu_line}></span>
                    </button>
                    
                    <nav className={headerClasses.cont__header_menuZone_inside}>
                        <ul>
                            <li>
                                <Link to="/" onClick={menuHandler}>
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/chisiamo" onClick={menuHandler}>
                                    Chi Siamo
                                </Link>
                            </li>

                            <li>
                                <Link to="/gpl" onClick={menuHandler}>
                                    GPL
                                </Link>
                            </li>

                            <li>
                                <Link to="/contatti" onClick={menuHandler}>
                                    Contatti
                                </Link>
                            </li>

                            <li>
                                <Link to="/lavora-con-noi" onClick={menuHandler}>
                                    Lavora con Noi
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className={headerClasses.cont__header_menuZone_desktop}>
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/chisiamo">
                                    Chi Siamo
                                </Link>
                            </li>

                            <li>
                                <Link to="/gpl">
                                    GPL
                                </Link>
                            </li>

                            <li>
                                <Link to="/contatti">
                                    Contatti
                                </Link>
                            </li>

                            <li>
                                <Link to="/lavora-con-noi">
                                    Lavora con Noi
                                </Link>
                            </li>
                        </ul>
                    </nav>


                </div>
            </div>
        </div>
    )
}

export default Header
