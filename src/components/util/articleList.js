import React from 'react';
import Article from "./article"

class ArticleList extends React.Component {
    render() {
        return (
            <div className="ArticleList">
                {
                    this.props.articles.map((article, index) => 
                    <Article key={article.index} title={article.title} img={article.image} text={article.text}/>)
                }
            </div>
        )
    }
}

export default ArticleList
