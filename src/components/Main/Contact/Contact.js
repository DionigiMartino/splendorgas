import React from 'react'

import contactStyle from '../../../utilities/Sass/contactStyle.module.css'

import Intro from '../Intro/Intro'

function Contact() {
    return (
        <div className={contactStyle.cont__contact}>
            <Intro />

            <h2>
                Richiedi un preventivo gratuito
            </h2>

            <form className={contactStyle.cont__contact_form}>
                <input type="text" name="nome" placeholder="Nome-Cognome" />
                <input type="text" name="tel" placeholder="Telefono" />
                <input type="text" name="email" placeholder="Email" />
                <textarea name="msg" rows="8" placeholder="Messaggio" />

                <input type="submit" value="INVIA" />
            </form>
        </div>
    )
}

export default Contact
