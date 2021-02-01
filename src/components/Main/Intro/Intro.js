import React, {useEffect} from 'react'

// importing React slideshow

import {Slide} from 'react-slideshow-image';

// importing SlideShow Styles

import 'react-slideshow-image/dist/styles.css';

// import Style 

import introSlide from '../../../utilities/Sass/introStyle.module.css'

// list of Images

import image1 from '../../../utilities/img/foto/1-grande.jpg'
import image2 from '../../../utilities/img/foto/2-grande.jpg'
import image3 from '../../../utilities/img/foto/3-grande.jpg'


const listImages = [
    image1, 
    image2,
    image3
]

function Intro(props) {
    let renderText = () => {
        const span = document.querySelectorAll('#intro_text');

        if(props?.section === "home"){
            span.forEach(el => {
                el.innerHTML = `
                    Dal <b>2006</b> al vostro <b> servizio</b> per il <b>trasporto </b> e la <b>vendita</b> di <b>GPL</b> in piccoli serbatoi.
                `
            })
        } else if (props?.section === "about"){
            span.forEach(el => {
                el.innerHTML = `
                    <b>SplendorGas</b> nasce nel 2006 in società con la multinazionale Lampogas, azienda competente nel settore GPL da oltre <b>60 anni…</b>
                `
            })
        } else if (props?.section === "gpl"){
            span.forEach(el => {
                el.innerHTML = `
                    <b>Versatile</b> ed <b>economicamente vantaggioso</b> sia per gli usi domestici che industriali, il <b>Gas Metano</b> è la scelta migliore per ogni tua soluzione! 
                `
            })
        }
    }

    useEffect(() => {
        renderText();
    })


    return (
        <div className={introSlide.cont_slide}>
            <div className="slide-container">
                <Slide duration={3000} transitionDuration={500} arrows={false}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${listImages[0]})`}} className={introSlide.cont_slide_slide}>
                            <span id="intro_text"></span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${listImages[1]})`}} className={introSlide.cont_slide_slide}>
                            <span id="intro_text"></span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${listImages[2]})`}} className={introSlide.cont_slide_slide}>
                            <span id="intro_text"></span>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}


export default Intro
