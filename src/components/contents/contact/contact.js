import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link';

const Contact = () => {
    return (
        <div>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{margin: "1.2rem auto"}}>
          Contact
        </Typography>
        <Card style={{textAlign: "center", maxWidth:"80%", margin: "2em auto"}}>
            <CardContent>
         <p>電話してちょ～だい</p>
         <hr/>
         <iframe title="callme" width="560" height="315" src="https://www.youtube-nocookie.com/embed/q6_kuLksjDE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;muted" allowFullScreen></iframe>
            </CardContent>
        </Card>

        <Card style={{maxWidth: "80%", margin: "auto"}}>
            <CardContent>
                <p>Credit</p>
                <p>Background Movie at Home:Mixkit <Link href="https://mixkit.co/videos/business-and-tech/245/" color="primary">Closeup video in slow motion of a laptop</Link> </p>
            </CardContent> 
        </Card>
        </div>
    )
}

export default Contact
