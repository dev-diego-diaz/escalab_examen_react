import React, { Fragment, useContext } from 'react';
// import DetallePersona from '../Common/DetallePersona';
import { PeliculasContext } from '../../contexts/PeliculasContext';

import { Box } from '@material-ui/core';
import CardContenido from '../Common/CardContenido'
import ContenidoPrincipal from '../Common/ContenidoPrincipal';

const Peliculas = () => {

    const { peliculas, contenidoPrincipal, trailerContenidoPrincipal } = useContext(PeliculasContext);

    return (

        <Fragment>

            <ContenidoPrincipal titulo={contenidoPrincipal.title} sinopsis={contenidoPrincipal.overview} trailer={trailerContenidoPrincipal} style={{marginTop: '130px'}}/>

            <div className="paddingContent">
                <Box display="flex" flexWrap="wrap" justifyContent="center" alignContent="center" >
                    { peliculas.map((pelicula, index) => (
                            <CardContenido pelicula id={pelicula.id} key={index} img={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+pelicula.poster_path} titulo={pelicula.title} valoracion={pelicula.vote_average} fecha={pelicula.release_date} />
                        ))
                    }
                </Box>

            </div>

        </Fragment>
    )
}

export default Peliculas;