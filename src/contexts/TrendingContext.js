import React, {createContext, useEffect, useState} from 'react';
import {tendencias_semanal_peliculas, 
        tendencias_semanal_series, 
        tendencias_semanal_actores,
        detalle_pelicula,
        detalle_persona,
        detalle_serie,
        filmografia,
        info_general_pelicula,
        info_general_serie,
        pelicula_trailer} from '../constants/index';

export const TrendingContext = createContext();

const TrendingContextProvider = ({children}) => {


    const id_actor     = window.location.pathname.split("/")[3];
    const id_contenido = window.location.pathname.split("/")[3];

    // Hooks
    const [contenidoPrincipal,        setContenidoPrincipal]        = useState([]);
    const [trailerContenidoPrincipal, setTrailerContenidoPrincipal] = useState([]);
    const [trendingPeliculas,         setTrendingPeliculas]         = useState([]);
    const [trendingSeries,            setTrendingSeries]            = useState([]);
    const [trendingActores,           setTrendingActores]           = useState([]);
    const [detallePelicula,           setDetallePelicula]           = useState([]);
    const [detalleSerie,              setDetalleSerie]              = useState([]);
    const [detallePersona,            setDetallePersona]            = useState([]);
    const [filmografiaActor,          setFilmografiaActor]          = useState([]);
    const [infoGeneralPelicula,       setInfoGeneralPelicula]       = useState([]);
    const [infoGeneralSerie,          setInfoGeneralSerie]          = useState([]);


    useEffect(() => ObtencionTrendings(), []);
    useEffect(() => getDetallePelicula(id_contenido), [id_contenido]);
    useEffect(() => getDetalleSerie(id_contenido), [id_contenido]);
    useEffect(() => getInfoGeneralPelicula(id_contenido), [id_contenido]);
    useEffect(() => getInfoGeneralSerie(id_contenido), [id_contenido]);
    useEffect(() => getDetallePersona(id_actor), [id_actor]);
    useEffect(() => getFilmografiaPersona(id_actor), [id_actor]);

    async function ObtencionTrendings() {

        // Peliculas
        await fetch(tendencias_semanal_peliculas())
        .then(res => res.json())
        .then(data => {
            setTrendingPeliculas( data.results );
            setContenidoPrincipal( data.results[3] );
            trailer(data.results[3].id);
        })
        .catch(err => console.log(err));
        
        // Series
        await fetch(tendencias_semanal_series())
        .then(res => res.json())
        .then(data => {
            setTrendingSeries( data.results );
        })
        .catch(err => console.log(err));
        
        // Actores
        await fetch(tendencias_semanal_actores())
        .then(res => res.json())
        .then(data => {
            setTrendingActores( data.results );
        })
        .catch(err => console.log(err));

    }

    // Trailer contenido principal
    const trailer = async (id) => {
         
        id != undefined &&
        await fetch( pelicula_trailer(id) )
         .then(res => res.json())
         .then(data => {
            setTrailerContenidoPrincipal(data.results[0].key);
         })
         .catch(err => console.log(err));

    }

    const getDetallePersona = async (id_actor) =>{

        id_actor != undefined &&
        await fetch( detalle_persona(id_actor) )
        .then( res => res.json())
        .then( data => {
            setDetallePersona(data)
        })
        .catch(err => console.log(err));

    }

    const getDetallePelicula = async (id_pelicula) => {

        id_pelicula != undefined &&
        await fetch( detalle_pelicula(id_pelicula) )
        .then( res => res.json())
        .then( data => {
            setDetallePelicula(data);
            getInfoGeneralPelicula(id_pelicula);
        })
        .catch(err => console.log(err));

    }

    const getDetalleSerie = async (id_serie) => {

        id_serie != undefined &&
        await fetch( detalle_serie(id_serie) )
        .then( res => res.json())
        .then( data => {
            setDetalleSerie(data)
        })
        .catch( err => console.log(err));

    }

    const getInfoGeneralPelicula = async (id_pelicula) => {

        id_pelicula != undefined &&
        await fetch( info_general_pelicula(id_pelicula) )
        .then( res => res.json())
        .then( data => {
            setInfoGeneralPelicula(data['cast']);
        })
        .catch(err => console.log(err));

    }

    const getInfoGeneralSerie = async (id_serie) => {

        id_serie != undefined &&
        await fetch( info_general_serie(id_serie) )
        .then( res => res.json())
        .then( data => {
            setInfoGeneralSerie(data['cast']);
        })
        .catch(err => console.log(err));

    }

    const getFilmografiaPersona = (id_actor) => {

        id_actor != undefined &&
        fetch( filmografia(id_actor) )
        .then( res => res.json())
        .then( data => {
            setFilmografiaActor(data['cast'])
        })
        .catch(err => console.log(err));

    }

    return (
        <div>
             <TrendingContext.Provider value={{ contenidoPrincipal, trailerContenidoPrincipal, trendingPeliculas, 
                                                trendingSeries, trendingActores, detallePelicula, detalleSerie, 
                                                detallePersona, filmografiaActor, infoGeneralPelicula, infoGeneralSerie }}>
                { children }
            </TrendingContext.Provider>
        </div>
    )
}

export default TrendingContextProvider;
