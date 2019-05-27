import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';


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
  },
  articleBody: {
    padding: 16,
  }
}

class Article extends React.Component {


  render() {
    return (
      <Card style={styles.card}>
        <CardContent style={styles.cardContent} className="Article">
                  {this.props.img === "nope" ? "" : <CardMedia style={styles.cardMedia} image={this.props.img} title={this.props.title}/>}
                <section style={styles.articleBody} className="Article-Body">
                  <Typography variant="h4">{this.props.title}</Typography>
                  <Typography>{this.props.text}</Typography>
                </section>
        </CardContent>
      </Card>
    )
  }
}

export default Article
