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
import DetallePersona from './components/Common/DetallePersona';
import DetalleContenido from './components/Common/DetalleContenido';
import PaginaNoEncontrada from './components/Common/PaginaNoEncontrada';

function App() {
  return (

    <Fragment>
      <BrowserRouter>
        <Header/>
          <Suspense fallback={<p>Cargando ... </p>}>
            <Switch>
                <Route exact path="/" activeClassName="active">
                  <TrendingContextProvider>
                    <Trending />
                  </TrendingContextProvider>
                </Route>

                <Route path="/peliculas">
                  <PeliculasContextProvider>
                    <Peliculas />
                  </PeliculasContextProvider>
                </Route>

                <Route path="/series">
                  <SeriesContextProvider>
                    <Series />
                  </SeriesContextProvider>
                </Route>

                <Route path="/detalle/:id_pelicula">
                  <TrendingContextProvider>
                    <DetalleContenido/>
                  </TrendingContextProvider>
                </Route>

                <Route path="/actor/detalle/:id_actor">
                  <TrendingContextProvider>
                    <DetallePersona />
                  </TrendingContextProvider>
                </Route>
                
                <Route component={PaginaNoEncontrada}/>
            </Switch>
          </Suspense>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
