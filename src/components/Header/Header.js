import React from 'react'
import CallIcon from '../../utilities/img/iconachiamatarossa.svg'

// import Style

import headerClasses from '../../utilities/Sass/headerStyle.module.css'

// importing Link to navigate 

import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className={headerClasses.cont__header}>
            <div className={headerClasses.cont__header_cta}>
                <img src={CallIcon} alt="Icon Call" /> 
                <a href="tel:+390771674589">0771.67.45.89</a>
            </div>

            <div className={headerClasses.cont__header_logo}>

            </div>

            <div className={headerClasses.cont__header_menuZone}>
                <Link to="/contatti" className={headerClasses.cont__header_menuZone_cta}>
                    Richiedi un Preventivo
                </Link>
            </div>
        </div>
    )
}

export default Header
