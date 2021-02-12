import React from 'react'
import styled from 'styled-components'

const StyledVideo = styled.video `
    width: 90%;
    margin: 5vh 0;
    object-fit: cover;
    height: 25vh;
    border-radius: 25px;

    @media(min-width: 1024px){
        height: 65vh;
    }
`

function Video(props) {
    return (
        <div>
            <StyledVideo src={props.videoSrc} poster={props.poster} controls muted/>
        </div>
    )
}

export default Video
