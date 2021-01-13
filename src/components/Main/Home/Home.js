import React from 'react'

// importing Style

import homeClasses from '../../../utilities/Sass/homeStyle.module.css'

// import Intro Slide Show

import Intro from '../Intro/Intro'

function Home() {
    return (
        <div className={homeClasses.cont__home}>
            <Intro />
        </div>
    )
}

export default Home
