import React from 'react';
import video from "./Mixkit-movie-720p.mp4"
import "./home.css"


const Home = () => {
    return (
        <div className="home" >
            <video id="bg-video" ref={ i => { if (i) {i.playbackRate = 0.2}}}  autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className="title">
                <h1>Taro Yamada's Portfolio</h1>
                <h3>KARAAGE TABETAI</h3>
            </div>
        </div>
    )
}


export default Home
