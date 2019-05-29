import React from 'react';
import Typography from '@material-ui/core/Typography';
import ArticleList from "../../util/articleList"
import Article from "../../util/article"
import Grid from '@material-ui/core/Grid';
import logo from "../logo.svg"

const aboutMe = {
    title: "ワイ",
    img: "nope",
    text: <p>ワイのこと</p>,
}

const articles = [{
    title: "英語",
    subtitle: "20年以上",
    img: "image.jpg",
    text: <p>そこそこ</p>
}, {
    title: "日本語",
    subtitle: "生まれてから",
    img: "hoge.jpg",
    text: <p>むずかしい</p>
}, {
    title: "React",
    subtitle: "2,3週間",
    img: logo,
    text: <p>もうだめぽ</p>
}, {
    title: "Vue",
    subtitle: "",
    img: "hoge.jpg",
    text: <p>3秒しか触ってない</p>
}, ]

const style = {
    root: {
        maxWidth: "80%",
        margin: "0 auto",
        marginTop: "2em",
        backgroundSize: "contain",
    },
    hr: {
        margin: "2em 0"
    },
}

// レイアウトが崩れないように3の倍数じゃない場合空の要素を入れる
if (articles.length % 3 !== 0) {
    do { articles.push({}) }
    while (articles.length % 3 !== 0)
}

const About = () => {
    return (
        <div style={style.root}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph style={{paddingBottom: "2em"}}>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            
            <Grid container>
                <Grid item xs={12}>
                    <Article title={aboutMe.title} img={aboutMe.img} text={aboutMe.text} />
                </Grid>
            </Grid>
            
            <hr style={style.hr} />
            
            <ArticleList articles={articles} md={4} from="about" />
        </div>
    )
}


export default About
