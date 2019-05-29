import React from "react"
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transparent",
    display: "inline-block",
    textAlign: "center",
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    margin: theme.spacing(1, 5),
  },
}));


const Header = () => {
  const classes = useStyles()
  //  color="primary"

  const makeLink = (to) => React.forwardRef((props, ref) => <NavLink innerRef={ref} to={to} {...props} />)

  const homeLink = makeLink("/")
  const aboutLink = makeLink("/about")
  const workLink = makeLink("/work")
  const contactLink = makeLink("/contact")

  return (
    <header className="header">
        <AppBar position="static" className={classes.root}>
          <Button className={classes.button} component={homeLink}>Home</Button>
          <Button className={classes.button} component={aboutLink}>About</Button>
          <Button className={classes.button} component={workLink}>Work</Button>
          <Button className={classes.button} component={contactLink}>Contact</Button>
        </AppBar>
    </header>
  )
}

export default Header
