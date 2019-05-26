import React from 'react';
import video from "./Mixkit-movie-720p.mp4"


const Home = () => {
    return (
        <div style={style} >
            <p>here?</p>
            <video id="bg-video" style={videoStyle} ref={ i => { if (i) {i.playbackRate = 0.2}}}  autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <p>this is home</p>
        </div>
    )
}

const style = {
    width: "100%",
    height: "90%",
    position: "relative"
}

const videoStyle = {
    display: "block",
    position: "fixed",
    right: 0,
    top: 50,
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    zIndex: -1,
    opacity: 0.5,
}

export default Home
