import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from "@material-ui/styles"
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./header/header"

import Home from "./contents/home/home"
import About from "./contents/about/about"
import Work from "./contents/work/work"
import Contact from "./contents/contact/contact"


import theme from "./util/theme"


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Header />
          <article>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </article>
        </div>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
