import React from 'react';
//import './Track.css';

class Article extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="Track">
              <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
              </div>
              {this.props.isRemoval ?  <button className="Track-action" onClick={this.removeTrack}>ー</button> : <button onClick={this.addTrack}>＋</button> }
            </div>
        )
    }
}

export default Article
