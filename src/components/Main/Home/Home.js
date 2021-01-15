import React from 'react'

// importing Style

import homeClasses from '../../../utilities/Sass/homeStyle.module.css'

// import Intro Slide Show

import Intro from '../Intro/Intro'

// import checkIcon

import checkIcon from '../../../utilities/img/iconapuntualita.svg';

// import leaderIcon

import leaderIcon from '../../../utilities/img/iconaleader.svg';

// import Services 

import Services from '../Services/Services'

function Home() {
    return (
        <div className={homeClasses.cont__home}>
            <Intro />

            <ul className={homeClasses.cont__home_info}>
                <li>
                    <img src={checkIcon} alt="Icon Check" />

                    <h2>
                        Puntualità nelle consegne
                    </h2>
                </li>

                <li>
                    <img src={leaderIcon} alt="Icon leader" />

                    <h2>
                        Azienda leader del settore
                    </h2>
                </li>
            </ul>

            <p>
                <b>SplendorGas</b> è partner
                del <b>Gruppo AutoGas</b>,
                presente sul territorio
                da oltre 60 anni nel
                settore dell’<b>Energia</b>, e,
                grazie ai suoi requisiti,
                ha l’eccezionale
                vantaggio di rifornirsi
                direttamente dai
                <b> depositi costieri!</b>
            </p>

            <div className={homeClasses.cont__home_descr}>
                <h2>
                    <b>GPL</b> è sinonimo di
                    <b> Ecosostenibilità</b> e
                    grandi <b>Vantaggi!</b>
                </h2>
            </div>

            <Services />
        </div>
    )
}

export default Home
