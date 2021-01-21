import React from 'react'

import footerStyle from '../../utilities/Sass/footerStyle.module.css'

import Logo from '../../utilities/img/LogoSplendorgasbianco.png'

import mail from '../../utilities/img/iconamail.svg'

import tel from '../../utilities/img/iconachiamatabianca.svg'

import position from '../../utilities/img/iconaluogo.svg'

import logoAicon from '../../utilities/img/logoaicon.png'

function Footer() {
    return (
        <div className={footerStyle.cont__footer}>
            <div className={footerStyle.cont__footer_inside}>
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
                        <a href="https://goo.gl/maps/wYCdLbE1vrWkfUuJ6">Via Traversa Perusi 135, 04020 SS. Cosma e Damiano (LT)</a>
                    </li>
                </ul>

                <iframe title="Mappa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.6910359886806!2d13.803581415656842!3d41.27206261109893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ac491bd0941e5%3A0x44b73c70eaf3bec7!2sVia%20Perusi%2C%20135%2C%2004020%20Grunuovo-campomaggiore%20San%20Luca%20LT!5e0!3m2!1sit!2sit!4v1611230758209!5m2!1sit!2sit" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>

            <div className={footerStyle.cont__footer_under}>
            <p>Powered by</p>
            <img src={logoAicon} alt="Icona Position"/>
            </div>
        </div>
    )
}

export default Footer
