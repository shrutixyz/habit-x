import React from 'react'
import rain from '../assets/rain.mp3'
import harry from '../assets/harry-styles.mp3'
import ReactPlayer from 'react-player'

function Audio() {

    

    return (
        <div>
            <h1>Audio</h1>
            <ReactPlayer
                url={rain}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
            />

            <ReactPlayer
                url={harry}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
            />
        </div>
    )
}

export default Audio
