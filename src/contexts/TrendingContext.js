import React, {createContext, useEffect, useState} from 'react';
import {tendencias_semanal_peliculas, 
        tendencias_semanal_series, 
        tendencias_semanal_actores,
        pelicula_trailer} from '../constants/index';

export const TrendingContext = createContext();

const TrendingContextProvider = ({children}) => {

    // Hooks URLS
    const [urlTrendingPeliculas, setUrlTrendingPeliculas] = useState(tendencias_semanal_peliculas);
    const [urlTrendingSeries, setUrlTrendingSeries] = useState(tendencias_semanal_series);
    const [urlTrendingActores, setUrlTrendingActores] = useState(tendencias_semanal_actores);

    // Hooks
    const [contenidoPrincipal, setContenidoPrincipal] = useState([]);
    const [trailerContenidoPrincipal, setTrailerContenidoPrincipal] = useState([]);
    const [trendingPeliculas, setTrendingPeliculas]   = useState([]);
    const [trendingSeries,    setTrendingSeries]      = useState([]);
    const [trendingActores,   setTrendingActores]     = useState([]);

    useEffect(() => ObtencionTrendings(), []);

    async function ObtencionTrendings() {

        // Peliculas
        await fetch(urlTrendingPeliculas)
        .then(res => res.json())
        .then(data => {
            setTrendingPeliculas( data.results );
            setContenidoPrincipal( data.results[1] );
            trailer(data.results[1].id);
        })
        .catch(err => console.log(err));
        
        // Series
        await fetch(urlTrendingSeries)
        .then(res => res.json())
        .then(data => {
            setTrendingSeries( data.results );
        })
        .catch(err => console.log(err));
        
        // Actores
        await fetch(urlTrendingActores)
        .then(res => res.json())
        .then(data => {
            setTrendingActores( data.results );
        })
        .catch(err => console.log(err));

    }

    // Trailer contenido principal
    const trailer = (id) =>{
         
         fetch( pelicula_trailer(id) )
         .then(res => res.json())
         .then(data => {
            setTrailerContenidoPrincipal(data.results[0].key);
         })
         .catch(err => console.log(err));

    }

    return (
        <div>
             <TrendingContext.Provider value={{ contenidoPrincipal, trailerContenidoPrincipal, trendingPeliculas, trendingSeries, trendingActores }}>
                { children }
            </TrendingContext.Provider>
        </div>
    )
}

export default TrendingContextProvider;
