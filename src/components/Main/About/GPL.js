import React from 'react'

import gplClasses from '../../../utilities/Sass/aboutStyle.module.css'

import Intro from '../Intro/Intro'

function GPL() {
    return (
        <div className={gplClasses.cont__gpl}>
            <Intro section="gpl" />
        </div>
    )
}

export default GPL
