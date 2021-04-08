import React from 'react';
import { Link } from '@material-ui/core';


const CardPeople = ({img, nombre}) => {
    return (

        <div className="cardContenidoPeople">
            <Link href="#" title={nombre}>
                <img className="cardContenidoImgPeople" src={img} alt={nombre}/>
            </Link>

            <div className="cardTituloPeople">{nombre}</div>
        </div>
    )
}

export default CardPeople;