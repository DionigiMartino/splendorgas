import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video `
    width: 100%;
    margin: 5vh 0;
    object-fit: contain;
`

function Video(props) {
    return (
        <div>
            <StyledVideo src={props.videoSrc} controls muted/>
        </div>
    )
}

export default Video
