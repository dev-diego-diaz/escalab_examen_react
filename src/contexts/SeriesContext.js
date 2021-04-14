import React, {createContext, useEffect, useState} from 'react';
import {descubrir_series, serie_trailer} from '../constants/index';

export const SeriesContext = createContext();

const SeriesContextProvider = ({children}) => {

    // Hooks URLS
    const [urlSeries, setUrlSeries] = useState(descubrir_series);

    // Hooks
    const [series, setSeries] = useState([]);
    const [contenidoPrincipal, setContenidoPrincipal] = useState([]);
    const [trailerContenidoPrincipal, setTrailerContenidoPrincipal] = useState([]);

    useEffect(() => ObtencionSeries(), []);

    async function ObtencionSeries() {

        // Series
        await fetch(urlSeries)
        .then(res => res.json())
        .then(data => {
            setSeries( data.results );
            setContenidoPrincipal( data.results[0] );
            trailer(data.results[0].id);
        })
        .catch(err => console.log(err));

    }

    // Trailer contenido principal
    const trailer = (id) =>{
         
         fetch( serie_trailer(id) )
         .then(res => res.json())
         .then(data => {
            console.log(data.results);
            setTrailerContenidoPrincipal(data.results[0].key);
         })
         .catch(err => console.log(err));

    }

    return (
        <div>
             <SeriesContext.Provider value={{ series, contenidoPrincipal, trailerContenidoPrincipal }}>
                { children }
            </SeriesContext.Provider>
        </div>
    )
}

export default SeriesContextProvider;
