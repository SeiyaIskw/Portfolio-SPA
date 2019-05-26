import React from 'react';
import ArticleList from "../../util/articleList"


const articles = [{
    img: "hoge.jpg",
    title: "おなかすいた",
    text: "そんな感じ"
}, {
    img: "hoge.jpg",
    title: "日本語",
    text: "むずかしい"
}, {
    img: "hoge.jpg",
    title: "React",
    text: "もうだめぽ"
}, ]

const Work = () => {
    return (
        <div>
            <ArticleList articles={articles} />
        </div>
    )
}

export default Work
