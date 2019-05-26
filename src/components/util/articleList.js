import React from 'react';
import Article from "./article.js"

class ArticleList extends React.Component {
    render() {
        return (
            <div className="ArticleList">
                {
                    this.props.tracks.map(Article => 
                    <Aritcle key={Article.id} track={Article} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />)
                }
            </div>
        )
    }
}

export default ArticleList
