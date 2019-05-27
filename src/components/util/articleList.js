import React from 'react';
import Article from "./article"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "left",
    }
}))


class ArticleList extends React.Component {
    render() {
        return (
            <Grid container justify="space-around" className="hoge">
                    {
                        this.props.articles.map((article, index) => 
                        <Grid item xs={12} md={5} className={styles.paper}>
                            <Article key={index} title={article.title} img={article.img} text={article.text} subtitle={article.subtitle}/>
                        </Grid>)
                    }
                    
            </Grid>
        )
    }
}


export default ArticleList
