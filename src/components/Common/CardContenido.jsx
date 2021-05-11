import React, { useState } from 'react';
import propTypes from 'prop-types';

import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const CardContenido = ({id, img, titulo, valoracion, fecha, pelicula}) => {

    return (
        <div className="cardContenido" style={{marginBottom:'30px'}}>

            <Link to={ (pelicula) ? `/detalle/pelicula/${id}` : `/detalle/serie/${id}`} title={titulo}>
                <img className="cardContenidoImg" src={img} alt={titulo} />
            </Link>

            <Box component="fieldset" borderColor="transparent">
                <Rating size="small" name="half-rating-read" defaultValue={valoracion * 5 / 10} precision={0.5} readOnly/>
            </Box>

            <div className="cardTitulo">{titulo}</div>
            <div className="cardFecha">{fecha}</div>

        </div>
        
    )
}

CardContenido.propTypes = {
    id         : propTypes.number,
    img        : propTypes.string,
    titulo     : propTypes.string,
    valoracion : propTypes.number,
    fecha      : propTypes.string,
    pelicula   : propTypes.bool,

};

CardContenido.defaultProps = {
    pelicula: false,
}

export default CardContenido;