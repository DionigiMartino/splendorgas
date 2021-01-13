import React from 'react'

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

function Intro() {
    return (
        <div className={introSlide.cont_slide}>
            <div className="slide-container">
                <Slide duration="6500">
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${listImages[0]})`}}>
                            <span>Slide 1</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${listImages[1]})`}}>
                            <span>Slide 2</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${listImages[2]})`}}>
                            <span>Slide 3</span>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Intro
