import React from "react"
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const useStyles = makeStyles(theme => ({
  root: {},
  link: {
    textDecoration: 'none',
  },
  button: {

  },
}));




const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const makeLink = (to) => React.forwardRef((props, ref) => <NavLink innerRef={ref} to={to} {...props} />)

  const homeLink = makeLink("/")
  const aboutLink = makeLink("/about")
  const workLink = makeLink("/work")
  const contactLink = makeLink("/contact")

  return (
    <header className="header">
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered className={classes.root}>
          <Tab className={classes.button} component={homeLink} label="Home" ></Tab>
          <Tab className={classes.button} component={aboutLink} label="About" ></Tab>
          <Tab className={classes.button} component={workLink} label="Work" ></Tab>
          <Tab className={classes.button} component={contactLink} label="Contact" ></Tab>
        </Tabs>
      </AppBar>
    </header>
  )
}

export default Header
