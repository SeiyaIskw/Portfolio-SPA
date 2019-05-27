import React from "react"
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    display: "inline-block",
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1, 5),
  },
}));


const Header = () => {
  const classes = useStyles()
  //  color="primary"
  return (
    <header className="header">
        <AppBar position="static" className={classes.root}>
            <Link to="/"><Button className={classes.button}>Home</Button></Link>
            <Link to="/about"><Button className={classes.button}>About</Button></Link>
            <Link to="/work"><Button className={classes.button}>Work</Button></Link>
            <Link to="/contact"><Button className={classes.button}>Contact</Button></Link>
        </AppBar>
    </header>
  )
}

export default Header
