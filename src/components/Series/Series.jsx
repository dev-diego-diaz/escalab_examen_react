import React, {Fragment, useContext} from 'react';
import { SeriesContext } from '../../contexts/SeriesContext';

import { Box } from '@material-ui/core';
import CardContenido from '../Common/CardContenido'
import ContenidoPrincipal from '../Common/ContenidoPrincipal';

const Series = () => {

    const { series, contenidoPrincipal, trailerContenidoPrincipal } = useContext(SeriesContext);

    return (

        <Fragment>

            <ContenidoPrincipal titulo={contenidoPrincipal.title} sinopsis={contenidoPrincipal.overview} trailer={trailerContenidoPrincipal} style={{marginTop: '130px'}}/>

            <div className="paddingContent">
                
                <Box display="flex" flexWrap="wrap" justifyContent="center" alignContent="center" >
                    { series.map((serie, index) => (
                            <CardContenido key={index} id={serie.id} img={'https://www.themoviedb.org/t/p/w220_and_h330_face/'+serie.poster_path} titulo={serie.name} valoracion={serie.vote_average} fecha={serie.first_air_date} />
                        ))
                    }
                </Box>

            </div>

        </Fragment>
        
        )
}

export default Series;
