import React from 'react';
import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const CardContenido = ({img, titulo, valoracion, fecha}) => {

    return (
        
        <div className="cardContenido">
            <Link href="#" title={titulo}>
                <img className="cardContenidoImg" src={img} alt=""/>
            </Link>

            <Box component="fieldset" borderColor="transparent">
                <Rating size="small" name="half-rating-read" defaultValue={valoracion * 5 / 10} precision={0.5} readOnly/>
            </Box>

            <div className="cardTitulo">{titulo}</div>
            <div className="cardFecha">{fecha}</div>
            
           
        </div>
        
    )
}

export default CardContenido;