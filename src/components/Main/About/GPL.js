import React from 'react'

import gplClasses from '../../../utilities/Sass/aboutStyle.module.css'

import Intro from '../Intro/Intro'

// import icons

import homeIcon from '../../../utilities/img/iconacasa.svg'
import businessIcon from '../../../utilities/img/iconabusiness.svg'
import flatIcon from '../../../utilities/img/iconacondominio.svg'

function GPL() {
    return (
        <div className={gplClasses.cont__about}>
            <Intro section="gpl" />

            <div className={gplClasses.cont__about_inside}>
                <p>
                    Il metano è un semplice idrocarburo saturo, inodore e non tossico presente in molti gas naturali. È un combustibile facilmente reperibile, considerato tra i più ecologici oggi presenti sul mercato: infatti, a differenza degli altri combustibili, esso non produce biossido di zolfo, assai inquinante. A parità di calore prodotto, il metano produce soltanto anidride carbonica e ossido di azoto, ma in misura decisamente minore di carbone e petrolio e, di conseguenza, con effetti meno dannosi per l'ambiente.
                    <br />
                    Versatile ed economicamente vantaggioso sia per gli usi domestici che industriali, il Gas Metano è la scelta migliore per ogni tua soluzione!  
                </p>

                <ul>
                    <li>
                        <img src={homeIcon} />

                        <p>
                            Scegli la soluzione personalizzata e conveniente per la tua utenza privata!
                        </p>

                        <p>
                            Affidabilità sui costi di consumo  <br />
                            Garanzia di risparmio <br />
                            Tariffe chiari e semplici <br />
                            Fatture trasparenti <br />
                            Personalizza la tua offerta 
                        </p>
                    </li>

                    <li>
                        <img src={businessIcon} />

                        <p>
                            Scegli la soluzione migliore di risparmio energetico per la tua attività commerciale!
                        </p>

                        <p>
                            Consumi Ottimizzati <br />
                            Garanzia di risparmio <br />
                            Risparmio Efficiente <br />
                            Fatture trasparenti <br />
                            Personalizza la tua offerta
                        </p>
                    </li>

                    <li>
                        <img src={flatIcon} />

                        <p>
                            Scegli la migliore soluzione Gas condominiale nel massimo della convenienza!
                        </p>

                        <p>
                            Risparmio energetico <br />
                            Sistema di contabilizzazione del calore <br />
                            Servizio di riqualificazione della centrale termica <br />
                            Sistema di regolazione e termostatizzazione dei locali <br />
                            Maggiore efficienza
                        </p>
 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GPL
