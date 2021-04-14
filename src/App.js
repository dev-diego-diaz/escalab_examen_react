import React, {Fragment, Suspense, lazy} from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";


import Header from './components/Common/Header';
import Trending from './components/Trending/Trending';
import Peliculas from './components/Peliculas/Peliculas';
import Series from './components/Series/Series';

import './assets/css/style.css';
import TrendingContextProvider from './contexts/TrendingContext';
import PeliculasContextProvider from './contexts/PeliculasContext';
import SeriesContextProvider from './contexts/SeriesContext';

function App() {
  return (

    <Fragment>
      <BrowserRouter>
        <Header/>
          <Switch>
            <Suspense>
                <TrendingContextProvider>
                  <Route exact path="/" activeClassName="active" component={Trending} />
                </TrendingContextProvider>

                <PeliculasContextProvider>
                  <Route path="/peliculas" component={Peliculas} />
                </PeliculasContextProvider>

                <SeriesContextProvider>
                  <Route path="/series" component={Series} />
                </SeriesContextProvider>
            </Suspense>

          </Switch>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
