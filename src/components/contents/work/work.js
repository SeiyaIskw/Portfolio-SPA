import React from 'react';
import Typography from '@material-ui/core/Typography';
import ArticleList from "../../util/articleList"
// import workList from "./workList"
import portfolio from "./img/portfolio.png"

// const articles = workList

const articles = [{
    title: "My Portfolio",
    subtitle: "React, React-Router, Material-UI",
    img: portfolio,
    text: <p>ここです</p>
}, {
    title: "おなかすいた",
    subtitle: "とりにく",
    img: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/710704.jpeg",
    text: <p>からあげ好き</p>
}, {
    title: "お茶漬け",
    subtitle: "おこめ、おちゃ",
    img: "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/main-47.jpg",
    text: <p>むずかしい</p>
}, {
    title: "まんじゅう",
    subtitle: "",
    img: "hoge.jpg",
    text: <p> こわい </p>
}, {
    title: "まんじゅう",
    subtitle: "",
    img: "hoge.jpg",
    text: <p>こわい </p>
}, ]

// レイアウトが崩れないように2の倍数じゃない場合空の要素を入れる
if (articles.length % 2 !== 0) articles.push({})

const Work = () => {
    return (
        <div style={style}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Work
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph  style={{paddingBottom: "2em"}}>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <ArticleList articles={articles} from="works" />
        </div>
    )
}

const style = {
    maxWidth: "80%",
    margin: "0 auto",
    marginTop: "2em"
}

export default Work
