import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link';

const Contact = () => {
    return (
        <div>
        <Card style={{textAlign: "center", marginBottom: "2em"}}>
            <CardContent>
         <p>電話してちょ～だい</p>
         <hr/>
         <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/q6_kuLksjDE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;muted" allowfullscreen></iframe>
            </CardContent>
        </Card>

        <Card style={{maxWidth: "70%", margin: "auto"}}>
            <CardContent>
                <p>Credit</p>
                <p>Background Movie at Home:Mixkit <Link href="https://mixkit.co/videos/business-and-tech/245/" color="primary">Closeup video in slow motion of a laptop</Link> </p>
            </CardContent> 
        </Card>
        </div>
    )
}

export default Contact
