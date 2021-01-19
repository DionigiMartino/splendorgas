import React from 'react'
import CallIcon from '../../utilities/img/iconachiamatarossa.svg'
import Logo from '../../utilities/img/LogoSplendorgas.png'

// import Style

import headerClasses from '../../utilities/Sass/headerStyle.module.css'

// importing Link to navigate 

import {Link} from 'react-router-dom'

function Header() {

    // Taking the reference to the menu div

    const buttonMenu = document.querySelector('.headerStyle_cont__header_menuZone_menu__juWMH');
    const menuZone = document.querySelector('.headerStyle_cont__header_menuZone_inside__UY-x0');
    const line = document.querySelectorAll('.headerStyle_cont__header_menuZone_menu_line__2FA9m');
    
    const menuHandler = () => {
        menuZone.classList.toggle('headerStyle_open__3KOnJ');
        line.forEach(el => el.classList.toggle('headerStyle_changeColor__3RQrr'));
        buttonMenu.classList.toggle('headerStyle_no_bg__17qe2');
    }

    return (
        <div className={headerClasses.cont__header}>
            <div className={headerClasses.cont__header_cta}>
                <img src={CallIcon} alt="Icon Call" /> 
                <a href="tel:+390771674589">0771.67.45.89</a>
            </div>

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
                    <div className={headerClasses.cont__header_menuZone_menu_line}></div>
                    <div className={headerClasses.cont__header_menuZone_menu_line}></div>
                    <div className={headerClasses.cont__header_menuZone_menu_line}></div>
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
                            <Link to="/contatti" onClick={menuHandler}>
                                Contatti
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
