import React, { Fragment, useContext } from 'react'
import { TrendingContext } from '../../contexts/TrendingContext';

import { Box } from '@material-ui/core';
import CardContenido from '../Common/CardContenido'
import ContenidoPrincipal from '../Common/ContenidoPrincipal';
import CardPeople from '../Common/CardPeople';

import noImage from '../../assets/img/no_imagen.png';


const Trending = () => {

    const { contenidoPrincipal, trailerContenidoPrincipal, trendingPeliculas, trendingSeries, trendingActores } = useContext(TrendingContext);

    return (

        <Fragment>

            <ContenidoPrincipal titulo={contenidoPrincipal.title} sinopsis={contenidoPrincipal.overview} trailer={trailerContenidoPrincipal} style={{marginTop: '130px'}}/>

            <div className="paddingContent">

                <h2>Tendencias en películas</h2>
                <Box display="flex" justifyContent="start" alignContent="center" style={{overflowX:'scroll', overflowY:'hidden', width:'100%', minHeight:'320px'}}>
                    { trendingPeliculas.map((pelicula, index) => (
                            <CardContenido key={index} id={pelicula.id} img={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+pelicula.poster_path} titulo={pelicula.title} valoracion={pelicula.vote_average} fecha={pelicula.release_date} />
                        ))
                    }
                </Box>

                <h2>Tendencias en series</h2>
                <Box display="flex" justifyContent="start" alignContent="center" style={{overflowX:'scroll', overflowY:'hidden', width:'100%', minHeight:'320px'}}>
                    { trendingSeries.map((serie, index) => (
                            <CardContenido key={index} img={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+serie.poster_path} titulo={serie.title} valoracion={serie.vote_average} fecha={serie.first_air_date} />
                        ))
                    }
                </Box>

                <h2 style={{paddingTop:'10px'}}>Actores que marcan tendencia</h2>
                <Box display="flex" justifyContent="start" alignContent="center" style={{overflowX:'scroll', overflowY:'hidden', width:'100%', minHeight:'320px'}}>
                    { trendingActores.map((actor, index) => (
                            <CardPeople id={actor.id} key={index} img={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+actor.profile_path} nombre={actor.name} valoracion={actor.popularity} />
                        ))
                    }
                </Box>
                
            </div>

        </ Fragment>
    )
}

export default Trending;