import React, {createContext, useEffect, useState} from 'react';
import {descubrir_peliculas, pelicula_trailer} from '../constants/index';

export const PeliculasContext = createContext();

const PeliculasContextProvider = ({children}) => {

    // Hooks
    const [peliculas, setPeliculas] = useState([]);
    const [contenidoPrincipal, setContenidoPrincipal] = useState([]);
    const [trailerContenidoPrincipal, setTrailerContenidoPrincipal] = useState([]);

    useEffect(() => ObtencionPeliculas(), []);

    async function ObtencionPeliculas() {

        // Peliculas
        await fetch(descubrir_peliculas())
        .then(res => res.json())
        .then(data => {
            setPeliculas( data.results );
            setContenidoPrincipal( data.results[5] );
            trailer(data.results[5].id);
        })
        .catch(err => console.log(err));

    }

    // Trailer contenido principal
    const trailer = async (id) =>{
         
         await fetch( pelicula_trailer(id) )
         .then(res => res.json())
         .then(data => {
            setTrailerContenidoPrincipal(data.results[0].key);
         })
         .catch(err => console.log(err));

    }

    return (
        <div>
             <PeliculasContext.Provider value={{ peliculas, contenidoPrincipal, trailerContenidoPrincipal }}>
                { children }
            </PeliculasContext.Provider>
        </div>
    )
}

export default PeliculasContextProvider;
