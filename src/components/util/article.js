import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const Article = props => {

  const useStyles = makeStyles({
    card: {
      margin: "1em 0",
    },
    cardContent: {
      padding: 0,
    },
    cardMedia: {
      height: 0,
      paddingTop: "50%",
      margin: 0,
    },
    articleBody: {
      padding: 16,
    }
  })

  const classes = useStyles()

  return (
    <Card className={classes.card} style={props.title ? {} : {visibility :"hidden"}}>
        <CardContent className={classes.cardContent}>
                  {props.img === "nope" ? "" : <CardMedia className={classes.cardMedia} style={{backgroundSize: props.from === "about" ? "contain" : "cover"}} image={props.img} title={props.title} />}
                <section className={classes.articleBody}>
                  <Typography variant="h4">{props.title}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{props.subtitle}</Typography>
                  <Typography variant="body1" component="div" style={{whiteSpace: 'pre-line'}}>{props.text}</Typography>
                </section>
        </CardContent>
    </Card>
  )
}

export default Article
