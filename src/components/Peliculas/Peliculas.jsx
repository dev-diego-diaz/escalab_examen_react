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
                            <CardContenido key={index} img={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+pelicula.poster_path} titulo={pelicula.title} valoracion={pelicula.vote_average} fecha={pelicula.release_date} />
                        ))
                    }
                </Box>
                    

                {/* <DetallePersona 
                    img={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg'}
                    nombre={'Scarlett Johansson'}
                    biografia={'Scarlett Johansson, es una actriz, modelo y cantante estadounidense. Hizo su debut cinematográfico en North (1994) y más tarde fue nominada para el premio Independent Spirit a la mejor protagonista femenina por su actuación en Manny & Lo (1996), obteniendo más aclamación y prominencia con papeles en The Horse Whisperer (1998) y Ghost. Mundo (2001). Pasó a papeles adultos con sus actuaciones en Girl with a Pearl Earring (2003) y Lost in Translation (2003) de Sofia Coppola, por la que ganó un premio BAFTA a la Mejor Actriz en un Papel Protagónico; ambas películas también le valieron nominaciones al Globo de Oro.'}
                    peliculas={'abc'}
                    informacionPersonal={{birthday: "1984-11-22", place_of_birth: 'New York City, New York, USA', popularity: 41.073}}
                /> */}

            </div>

        </Fragment>
    )
}

export default Peliculas;