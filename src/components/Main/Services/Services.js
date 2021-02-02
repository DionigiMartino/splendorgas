import React from 'react'
import {Link} from 'react-router-dom'

// importing Styles

import servicesStyle from '../../../utilities/Sass/servicesStyle.module.css'

// import icon

import homeIcon from '../../../utilities/img/iconacasa.svg'
import businessIcon from '../../../utilities/img/iconabusiness.svg'
import flatIcon from '../../../utilities/img/iconacondominio.svg'


function Services() {

    const services = [
        {select: 'home', icon: homeIcon, text: 'Scegli la Soluzione Ideale che soddisfa ogni ambiente. Dal riscaldamento all’acqua calda!'},
        {select: 'business', icon: businessIcon, text: 'Scegli la Soluzione ideale per la tua azienda o attività commerciale!'},
        {select: 'flat', icon: flatIcon, text: 'Scegli la Soluzione ideale di forniture veloci, sicure ed affidabili! '}
    ]

    let servicesMapped = services.map((el, index) => <li key={index} id={el.select}> <img  src={el.icon} alt={index} />  <p>{el.text}</p> <Link to="/gpl">Scopri di più</Link></li>)
    
    return (
        <ul className={servicesStyle.cont__services}>
            {servicesMapped}
        </ul>
    )
}

export default Services
