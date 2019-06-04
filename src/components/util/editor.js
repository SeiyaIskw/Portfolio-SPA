import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Article from "./article"
import Grid from '@material-ui/core/Grid';
import portfolio from "../contents/work/img/portfolio.png"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "My Portfolio",
      subtitle: "React, React-Router, Material-UI",
      img: portfolio,
      text: "ここです"
    }

    this.handleChange = this.handleChange.bind(this)
    this.incertNewLine = this.incertNewLine.bind(this)
  }

  handleChange = name => event => {
    this.setState(({
      [name]: event.target.value
    }))
  }

  incertNewLine = () => {
    this.setState(({
      "text": this.state.text.split("\n").join("<br/>\n")
    }))
  }

  render() {
    return (
      <div className="editor">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Editor
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph  style={{paddingBottom: "2em"}} onClick={()=>{console.log(this.state[0])}}>
          本番環境では削除する項目です、これを使ってaboutやworkのカードの中身を作成しています
        </Typography>
        <Grid container spacing={2} justify="space-evenly" alignItems="stretch">
          <Grid item xs={12} md={5} >
            <Article title={this.state.title} subtitle={this.state.subtitle} img={this.state.img} text={this.state.text} />
          </Grid>
          <Grid item xs={12} md={6} >
            <Card className={this.props.classes.card}>
              <CardContent className={this.props.classes.cardContent}>
                <TextField label="Title" className={this.props.classes.upperTextField} value={this.state.title} onChange={this.handleChange("title")} />
                <TextField label="Subtitle" className={this.props.classes.upperTextField} value={this.state.subtitle} onChange={this.handleChange("subtitle")}/><br/>
                <TextField label="imgSource" className={this.props.classes.lowerTextField} value={this.state.img} onChange={this.handleChange("img")}/><br/>
                <TextField label="text(buggy)" className={this.props.classes.lowerTextField}  value={this.state.text} onChange={this.handleChange("text")} multiline rows="10"/>
                  <Button color="secondary" variant="outlined"  onClick={this.incertNewLine} style={{textTransform: "none"}}>New Line to {"<br/>"}</Button>
              </CardContent>
            </Card>
            <Card className={this.props.classes.card} style={{margin: "1em", padding: "1em"}}>
                <p style={{whiteSpace: 'pre-line'}}>{'{'}  title: "{this.state.title}",<br/>
                   subtitle: "{this.state.subtitle}",<br/>
                   img: "{this.state.img}",<br/>
                    text: {"<Typography>"}{this.state.text}{"</Typography>"},<br/>
                {'},'}</p>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = {
  Card: {
    margin: "1em 0",
  },
  CardContent: {
    padding: 0,
  },
  upperTextField: {
    width: "45%",
    marginRight: "1em"
  },
  lowerTextField: {
    width: "100%",
    marginTop: "1em"
  }
}

export default withStyles(styles)(Editor)
