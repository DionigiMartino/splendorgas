import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video `
    width: 90%;
    margin: 5vh 0;
    object-fit: cover;
    height: 40vh;
    border-radius: 25px;
`

function Video(props) {
    return (
        <div>
            <StyledVideo src={props.videoSrc} poster={props.poster} controls muted/>
        </div>
    )
}

export default Video
