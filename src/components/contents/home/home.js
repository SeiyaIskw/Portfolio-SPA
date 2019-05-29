import React from 'react';
import video from "./Mixkit-movie-720p.mp4"
import "./home.css"


const Home = () => {
    return (
        <div className="home" >
            <video id="bg-video" src={video} type="video/mp4"  autoPlay loop muted></video>
            <div className="title">
                <h1>Portfolio</h1>
                <h3>KARAAGE TABETAI</h3>
            </div>
        </div>
    )
}


export default Home
