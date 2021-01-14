import React from 'react'

// importing Style

import homeClasses from '../../../utilities/Sass/homeStyle.module.css'

// import Intro Slide Show

import Intro from '../Intro/Intro'

// import checkIcon

import checkIcon from '../../../utilities/img/iconapuntualita.svg';

// import leaderIcon

import leaderIcon from '../../../utilities/img/iconaleader.svg';

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
        </div>
    )
}

export default Home
