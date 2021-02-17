import React from 'react'

// import Style 

import aboutStyle from '../../../utilities/Sass/aboutStyle.module.css'

// import Intro

import Intro from '../Intro/Intro'

// import Logo 

import icon from '../../../utilities/img/iconaleader.svg'

// import Video Component

import Video from '../Video/Video'
import video1 from '../../../utilities/img/video/video1.webm'
import screen1 from '../../../utilities/img/screen-video-1.jpg'

function About() {

    return (
        <div className={aboutStyle.cont__about}>
            <Intro section="about" />

            <div className={aboutStyle.cont__about_inside}>
                <img src={icon} alt="Icon" />

                <h2>
                    Chi Siamo
                </h2>

                <p>
                    <b>…A marzo del 2019</b> Lampogas viene ceduta al <b>Gruppo AutoGas</b>, passando sotto il marchio <i>AGN Energia.</i> <i>Il Gruppo AutoGas</i>, <b>di cui SplendorGas attualmente fa parte</b>, è una multiutility che offre un’offerta completa nel settore energetico.
                </p>

                <p>
                    SplendorGas si occupa <b>di commercializzare e distribuire GPL in piccoli serbatoi</b>, offrendo la <b>qualità del prodotto</b> nella massima <b>trasparenza</b> del servizio e con <b>efficace distributiva logistica.</b>
                </p>

                <Video videoSrc={video1} poster={screen1} />

                <p>
                    <b>Scegliere il GPL significa dare un contributo ecosostenibile sostanzioso</b>, infatti è un combustibile facilmente <b>reperibile</b> con un <b>basso impatto ambientale</b> ed un’<b>elevata resa energetica</b> e <b>calorifica</b> per ogni ambiente ed utilizzo (es. cucina, riscaldamento, acqua calda oppure un uso industriale od agricolo). Per questo motivo, pur essendo estremamente infiammabile, non <b>è tossico</b>.
                </p>

                <p>
                    Inoltre, è <b>facilmente trasportabile ed economicamente vantaggioso</b> rispetto alle spese date dalle altre fonti energetiche.
                </p>

                <p>
                    <b>L’obiettivo primario</b> di <i>SplendorGas</i> è di <b>offrire</b> ad ogni nostro cliente <b>la soluzione ideale</b> che permetta di soddisfare in modo autonomo, proficuo e conveniente la sua esigenza di energia a tutto tondo.
                </p>

                <p>
                    <i>SplendorGas</i>, grazie ai requisiti <i>AutoGas</i>, ha l’incredibile <b>vantaggio di approvvigionarsi direttamente dai depositi costieri</b> per offrire e fornire sempre il massimo della <b>qualità</b> con <b>disponibilità continua di GPL.</b> 
                </p>

                <div className={aboutStyle.cont__about_descr}>
                    <h2>
                        <b>GPL</b> è sinonimo di
                        <b> Ecosostenibilità</b> e
                        grandi <b>Vantaggi!</b>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default About
