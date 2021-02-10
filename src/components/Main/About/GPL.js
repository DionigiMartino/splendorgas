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
                    Il <b>gas GPL</b> è una grande <b>risorsa naturale</b>, costituita da una miscela di idrocarburi tra i quali vi sono principalmente il propano e il butano. 
                    <br />
                    Questo gas può essere prodotto dalla lavorazione del petrolio, oppure estratto da giacimenti naturali di gas.

                    <br /><br />
                    Il GPL rappresenta una <b>fonte di energia versatile</b>, pulita e facilmente trasportabile, quindi utilizzabile capillarmente anche nelle zone più accidentate. 
                    <br />
                    Il GPL è <b>un'energia sicura, comoda,</b> con una <b>resa calorifica costante</b> che <b>soddisfa ogni esigenza </b>relativa al riscaldamento, alla produzione di acqua calda e nei cicli di lavorazione industriale, artigianale, in agricoltura e zootecnica, nelle abitazioni e nelle comunità. Inoltre è una soluzione ottimale e <b>versatile per tutti gli usi</b>, dalla singola abitazione alle reti canalizzate per interi comuni e ha una <b>bassa incidenza sulle spese di manutenzione</b> degli impianti utilizzatori. 
                </p>

                <ul>
                    <li id="home">
                        <img src={homeIcon} alt="Icon Home"/>

                        <p>LE SOLUZIONI PER LA CASA</p>

                        <p>
                            Scegli la soluzione personalizzata e conveniente per la tua utenza privata!
                        </p>

                        <p style={{'color': '#FF0000'}}>GPL DOMESTICO IN SERBATOI</p>

                        <p>
                            Il Gruppo Fornisce i propri serbatoi di capacità e tipologia idonee per ogni utilizzo: <br />
                            fuori terra  <br />
                            interrati <br />
                            concessi in uso gratuito <br />
                        </p>
                    </li>

                    <li id="home">
                        <img src={homeIcon} alt="Icon Home"/>

                        <p>LE SOLUZIONI PER LA CASA</p>

                        <p>
                            Scegli la soluzione personalizzata e conveniente per la tua utenza privata!
                        </p>

                        <p style={{'color': '#FF0000'}}>GPL CASA PER IMPIANTI CENTRALIZZATI</p>

                        <p>
                            Proponiamo soluzioni GPL casa personalizzate che assicurano una fornitura pratica e diversi servizi: <br /><br /> 

                            possibilità di realizzare impianti centralizzati <br />
                            installazione di un contatore per ogni singola utenza <br />
                            fatturazione diretta su singoli quantitativi consumati
                        </p>
                    </li>

                    <li id="business">
                        <img src={businessIcon} alt="Icon business" />
                        
                        <p>
                            IL GPL per piccole e medie attività è una soluzione che gode di diversi punti di forza:
                        </p>

                        <p>
                            copertura capillare in tutte le aree non raggiunte dal metano <br />
                            rinfornimenti tempestivi, puntuali, certificati e controllati <br />
                            monitoraggio dell'impianto a distanza e gestione telematica della flotta <br />
                            manutenzione e controlli periodici dello stato degli impianti <br />
                            rispetto delle norme tecniche di sicurezza <br />
                            assistenza commerciale e reperibilità tecnica 24 ore su 24 <br />
                            correttezza e trasparenza contrattuale
                        </p>
                    </li>

                    <li id="flat">
                        <img src={flatIcon} alt="Icon Flat" />

                        <p>
                            Scegli la migliore soluzione Gas condominiale nel massimo della convenienza!
                        </p>

                        <p>
                            Il Gruppo SplendorGas propone soluzioni GPL personalizzate per amministratori condominiali assicurando una fornitura pratica e la possibilità di realizzare impianti centralizzati con installazione di un contatore per ogni singola utenza. In più offriamo:
                        </p>

                        <p>
                            Fatturazione diretta su singoli quantitativi consumati <br />
                            Gestione e realizzazione di reti canalizzate <br />
                            Serbatoi da esterno o da interno, concessi in uso gratuito e con rinfornimento programmato <br />
                        </p>
 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GPL
