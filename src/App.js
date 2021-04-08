import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";


import Header from './components/Common/Header';
import Trending from './components/Trending/Trending';
import Peliculas from './components/Peliculas/Peliculas';
import Series from './components/Series/Series';

import './assets/css/style.css';
import TrendingContextProvider from './contexts/TrendingContext';

function App() {
  return (

    <Fragment>
      <BrowserRouter>
        <Header/>
          <Switch>
            
              <TrendingContextProvider>
                <Route exact path="/" activeClassName="active" component={Trending} />
              </TrendingContextProvider>


            <Route path="/peliculas" component={Peliculas} />
            <Route path="/series" component={Series} />
          </Switch>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
