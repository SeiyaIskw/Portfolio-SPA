import React from 'react';
import ArticleList from "../../util/articleList"
import workList from "./workList"
import portfolio from "./img/portfolio.png"

const articles = [{
    title: "Portfolio of Mine",
    subtitle: "React, Material-UI",
    img: portfolio,
    text: <div>
            <p>ここです</p>
          </div>
}, {
    title: "おなかすいた",
    subtitle: "とりにく",
    img: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/710704.jpeg",
    text: <div>
            <p>からあげ好き</p>
          </div>
}, {
    title: "お茶漬け",
    subtitle: "おこめ、おちゃ",
    img: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/main-47.jpg",
    text: <div>
            <p>むずかしい</p>
          </div>
}, {
    title: "まんじゅう",
    subtitle: "",
    img: "hoge.jpg",
    text: <div>
            こわい
          </div>
}, ]

const Work = () => {
    return (
        <div style={style}>
            <ArticleList articles={articles} />
        </div>
    )
}

const style = {
    maxWidth: "80%",
    margin: "0 auto",
    marginTop: "2em"
}

export default Work
