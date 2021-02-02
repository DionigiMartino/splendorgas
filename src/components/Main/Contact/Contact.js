import React from 'react'

import contactStyle from '../../../utilities/Sass/contactStyle.module.css'

import Intro from '../Intro/Intro'

function Contact(props) {
    return (
        <div className={contactStyle.cont__contact}>
            <Intro section={props.section} />

            <form className={contactStyle.cont__contact_form}>
                <input type="text" name="nome" placeholder="Nome-Cognome" />
                <input type="text" name="tel" placeholder="Telefono" />
                <input type="text" name="email" placeholder="Email" />
                <textarea name="msg" rows="8" placeholder="Messaggio" />

                {props.section === "lavora_con_noi" && (
                    <input type="file" name="allegato" />
                )}

                <button id="submit">INVIA</button>
            </form>

            <h2>
                Oppure chiama il <a href="tel:+390771674589">0771 67 45 89</a>
            </h2>
        </div>
    )
}

export default Contact
