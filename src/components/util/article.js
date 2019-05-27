import React from 'react';
import { typography } from '@material-ui/system';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


class Article extends React.Component {

  render() {
    return (
      <Card>
        <CardContent className="Article">
                <section className="Article-information">
                  <img src={this.props.img} height="200" width="400" alt="No img" />
                  <h3>{this.props.title}</h3>
                </section>
                <section className="Article-Body">
                  <div>{this.props.text}</div>
                </section>
        </CardContent>
      </Card>
    )
  }
}

export default Article
