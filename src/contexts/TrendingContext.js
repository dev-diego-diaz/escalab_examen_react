import React, {createContext, useEffect, useState} from 'react';
import {tendencias_semanal_peliculas, 
        tendencias_semanal_series, 
        tendencias_semanal_actores,
        detalle_pelicula,
        detalle_persona,
        filmografia,
        info_general_pelicula,
        pelicula_trailer} from '../constants/index';

export const TrendingContext = createContext();

const TrendingContextProvider = ({children}) => {


    const id_actor    = window.location.pathname.split("/")[3];
    const id_pelicula = window.location.pathname.split("/")[3];

    // Hooks URLS
    const [urlTrendingPeliculas, setUrlTrendingPeliculas] = useState(tendencias_semanal_peliculas);
    const [urlTrendingSeries, setUrlTrendingSeries]       = useState(tendencias_semanal_series);
    const [urlTrendingActores, setUrlTrendingActores]     = useState(tendencias_semanal_actores);

    // Hooks
    const [contenidoPrincipal,        setContenidoPrincipal]        = useState([]);
    const [trailerContenidoPrincipal, setTrailerContenidoPrincipal] = useState([]);
    const [trendingPeliculas,         setTrendingPeliculas]         = useState([]);
    const [trendingSeries,            setTrendingSeries]            = useState([]);
    const [trendingActores,           setTrendingActores]           = useState([]);
    const [detallePelicula,           setDetallePelicula]           = useState([]);
    const [detallePersona,            setDetallePersona]            = useState([]);
    const [filmografiaActor,          setFilmografiaActor]          = useState([]);
    const [generos,                   setGeneros]                   = useState([]);
    const [infoGeneralPelicula,       setInfoGeneralPelicula]       = useState([]);


    useEffect(() => ObtencionTrendings(), []);
    useEffect(() => getDetallePelicula(id_pelicula), [id_pelicula]);
    useEffect(() => getInfoGeneralPelicula(id_pelicula), [id_pelicula]);
    useEffect(() => getDetallePersona(id_actor), [id_actor]);
    useEffect(() => getFilmografiaPersona(id_actor), [id_actor]);

    async function ObtencionTrendings() {

        // Peliculas
        await fetch(urlTrendingPeliculas)
        .then(res => res.json())
        .then(data => {
            setTrendingPeliculas( data.results );
            setContenidoPrincipal( data.results[3] );
            trailer(data.results[3].id);
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
    const trailer = (id) => {
         
        id != undefined &&
         fetch( pelicula_trailer(id) )
         .then(res => res.json())
         .then(data => {
            setTrailerContenidoPrincipal(data.results[0].key);
         })
         .catch(err => console.log(err));

    }

    const getDetallePersona = (id_actor) =>{

        id_actor != undefined &&
        fetch( detalle_persona(id_actor) )
        .then( res => res.json())
        .then( data => {
            setDetallePersona(data)
        })
        .catch(err => console.log(err));

    }

    const getDetallePelicula = (id_pelicula) => {

        id_pelicula != undefined &&
        fetch( detalle_pelicula(id_pelicula) )
        .then( res => res.json())
        .then( data => {
            setDetallePelicula(data);
            getInfoGeneralPelicula(id_pelicula);
        })
        .catch(err => console.log(err));

    }


    const getInfoGeneralPelicula = (id_pelicula) => {

        id_pelicula != undefined &&
        fetch( info_general_pelicula(id_pelicula) )
        .then( res => res.json())
        .then( data => {
            setInfoGeneralPelicula(data['cast']);
        })
        .catch(err => console.log(err));

    }

    const getFilmografiaPersona = (id_actor) => {

        id_actor != undefined &&
        fetch( filmografia(id_actor) )
        .then( res => res.json())
        .then( data => {
            setFilmografiaActor(data['crew'])
        })
        .catch(err => console.log(err));

    }

    return (
        <div>
             <TrendingContext.Provider value={{ contenidoPrincipal, trailerContenidoPrincipal, trendingPeliculas, 
                                                trendingSeries, trendingActores, detallePelicula, detallePersona, 
                                                filmografiaActor, generos, infoGeneralPelicula }}>
                { children }
            </TrendingContext.Provider>
        </div>
    )
}

export default TrendingContextProvider;
