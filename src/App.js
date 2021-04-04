import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/Common/Header';
import Trending from './components/Trending/Trending';
import Peliculas from './components/Peliculas/Peliculas';
import Series from './components/Series/Series';

import './assets/css/style.css';

function App() {
  return (

    <Fragment>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/" activeClassName="active" component={Trending} />
            <Route path="/peliculas" component={Peliculas} />
            <Route path="/series" component={Series} />
          </Switch>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
