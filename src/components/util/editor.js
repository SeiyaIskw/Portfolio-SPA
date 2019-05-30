import React from 'react';
import Typography from '@material-ui/core/Typography';
import ArticleList from "./articleList"
import portfolio from "../contents/work/img/portfolio.png"

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [{
                title: "My Portfolio",
                subtitle: "React, React-Router, Material-UI",
                img: portfolio,
                text: <p>ここです</p>
            }, { title: " ", text: "ここ" }]
        }
    }
    render() {
        return (
            <div className="editor">
                <ArticleList articles={this.state.articles} />
            </div>
        )
    }
}

const style = {
    //title={this.state.title} subtitle={this.state.subtitle} img={this.state.img} text={this.state.text}
}

export default Editor
