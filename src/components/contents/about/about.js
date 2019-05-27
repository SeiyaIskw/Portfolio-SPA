import React from 'react';
import ArticleList from "../../util/articleList"
import Article from "../../util/article"
import Grid from '@material-ui/core/Grid';
import logo from "../logo.svg"

const articles = [{
    title: "英語",
    img: "",
    text: <div>
            <p>そこそこ</p>
          </div>
}, {
    title: "日本語",
    img: "hoge.jpg",
    text: <div>
            <p>むずかしい</p>
          </div>
}, {
    title: "React",
    img: logo,
    text: <div>
            <p>もうだめぽ</p>
          </div>
}, {
    title: "Vue",
    img: "hoge.jpg",
    text: <div>
            <p>3秒しか触ってない</p>
          </div>
}, ]

const About = () => {
    return (
        <div style={style.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Article title="ワイ" img="nope" text={<div><p>ワイのこと</p></div>} />
                </Grid>
            </Grid>
            
            <hr style={style.hr} />
            
            <ArticleList articles={articles} />
        </div>
    )
}

const style = {
    root: {
        maxWidth: "80%",
        margin: "0 auto",
        marginTop: "2em"
    },
    hr: {
        margin: "2em 0"
    }
}


export default About
