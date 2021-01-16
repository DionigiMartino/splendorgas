import React from 'react'

import footerStyle from '../../utilities/Sass/footerStyle.module.css'

import Logo from '../../utilities/img/LogoSplendorgasbianco.png'

import mail from '../../utilities/img/iconamail.svg'

import tel from '../../utilities/img/iconachiamatabianca.svg'

import position from '../../utilities/img/iconaluogo.svg'

function Footer() {
    return (
        <div className={footerStyle.cont__footer}>
            <img src={Logo} alt="logo Splendorgas"/>

            <ul>
                <li>
                    <img src={mail} alt="Icona Mail"/>
                    <a href="mailto:info@splendorgas.com">info@splendorgas.com</a>
                </li>

                <li>
                    <img src={tel} alt="Icona Tel"/>
                    <a href="tel:+390771674589">0771 674589</a>
                </li>

                <li>
                    <img src={position} alt="Icona Position"/>
                    <a href="tel:+390771674589">Via Traversa Perusi 135, 04020 SS. Cosma e Damiano (LT)</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
