import React from 'react';
import Article from "./article"
import Grid from '@material-ui/core/Grid';

const ArticleList = props => {

    return (
        <Grid container spacing={3} justify="space-evenly" alignItems="stretch" >
                    {
                        props.articles.map((article, index) => 
                        <Grid item xs={12} md={props.md || 5} >
                            <Article key={props.from + index} title={article.title} img={article.img} text={article.text} subtitle={article.subtitle} from={props.from}/>
                        </Grid>)
                    }
                    
        </Grid>
    )
}


export default ArticleList
