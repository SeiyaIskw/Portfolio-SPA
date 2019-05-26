import React from 'react';
//import './Track.css';

class Article extends React.Component {

    render() {
        return (
            <article className="Article">
              <section className="Article-information">
                <img src={this.props.img} alt="No Image" />
                <h3>{this.props.title}</h3>
              </section>
              <section className="Article-Body">
                <p>{this.props.text}</p>
              </section>
            </article>
        )
    }
}

export default Article
