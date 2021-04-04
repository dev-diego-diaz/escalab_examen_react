import React from 'react';
import { Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const CardContenido = () => {

    const [valoracion, setValoracion] = React.useState(3.4);
    const [titulo, setTitulo]         = React.useState('¿Quién mató a Sara?');
    const [fecha, setFecha]           = React.useState('24 mar 2021');

    // Calcular valor de estrellas desde porcentaje : x * 5 / 100

    return (
        
        <div className="cardContenido">
            <Link href="#" title="¿Quién mató a Sara?">
                <img className="cardContenidoImg" src="https://www.themoviedb.org/t/p/w220_and_h330_face/jnit57q25N5VvVrK4pj4Uj8BLe7.jpg" alt=""/>
            </Link>

            <div className="cardTitulo">{titulo}</div>
            <div className="cardFecha">{fecha}</div>
            
            <Box component="fieldset" borderColor="transparent">
                <Rating size="small" name="half-rating-read" defaultValue={valoracion} precision={0.5} readOnly/>
            </Box>
        </div>
        
    )
}

export default CardContenido;