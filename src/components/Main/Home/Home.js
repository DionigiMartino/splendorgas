import React from 'react'

// importing Style

import homeClasses from '../../../utilities/Sass/homeStyle.module.css'

// import Intro Slide Show

import Intro from '../Intro/Intro'

// import icons

import checkIcon from '../../../utilities/img/iconapuntualita.svg';
import leaderIcon from '../../../utilities/img/iconaleader.svg';
import trustIcon from '../../../utilities/img/iconaaffidabilita.svg';

// import eco

import ecoIcon from '../../../utilities/img/iconaeco.svg'

// import Services 

import Services from '../Services/Services'

// import Video Components

import Video from '../Video/Video';
import video1 from '../../../utilities/img/video/video1.mp4'
import video3 from '../../../utilities/img/video/video3.mp4'
import screen1 from '../../../utilities/img/screen-video-1.jpg'
import screen3 from '../../../utilities/img/screen-video-3.jpg'

function Home() {
    return (
        <div className={homeClasses.cont__home}>
            <Intro section="home" />

            <ul className={homeClasses.cont__home_info}>
                <li>
                    <img src={checkIcon} alt="Icon Check" />

                    <h2>
                        Puntualità nelle consegne
                    </h2>
                </li>

                <li>
                    <img src={trustIcon} alt="Icon Affidabilita" />

                    <h2>
                        Affidabilità
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
                <b>SplendorGas</b> fa parte
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

            <Video videoSrc={video3} poster={screen3} />

            <div className={homeClasses.cont__home_descr}>
                <h2>
                    <b>GPL</b> è sinonimo di
                    <b> Ecosostenibilità</b> e
                    grandi <b>Vantaggi!</b>
                </h2>
            </div>

            <Services />

            <div className={homeClasses.cont__home_eco}>
                <img src={ecoIcon} alt="Icon Eco" />

                <h2>
                    Il <b style={{'color': '#FF0000'}}>GPL</b> è il miglior combustibile
                    <b style={{'color': '#FF0000'}}> consigliato</b> per uso industriale ed agricolo perché è
                    <b style={{'color': '#FF0000'}}> ecosostenibile</b> e molto calorifico.
                </h2>
            </div>

            <Video videoSrc={video1} poster={screen1} />
        </div>
    )
}

export default Home
