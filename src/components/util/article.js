import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';


const Article = props => {

  const styles = {
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
      backgroundSize: props.from === "about" ? "contain" : "cover",
    },
    articleBody: {
      padding: 16,
    }
  }


  return (
    <Card style={styles.card && props.title ? {} : {visibility :"hidden"}}>
        <CardContent style={styles.cardContent} className="Article">
                  {props.img === "nope" ? "" : <CardMedia style={styles.cardMedia} image={props.img} title={props.title} />}
                <section style={styles.articleBody} className="Article-Body">
                  <Typography variant="h4">{props.title}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">{props.subtitle}</Typography>
                  <Typography variant="body1" component="div">{props.text}</Typography>
                </section>
        </CardContent>
    </Card>
  )
}

export default Article
