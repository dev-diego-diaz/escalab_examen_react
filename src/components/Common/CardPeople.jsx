import React from 'react';
import { Link } from 'react-router-dom';


const CardPeople = ({id, img, nombre}) => {
    return (

        <div className="cardContenidoPeople">
            <Link to={`/actor/detalle/${id}`} replace title={nombre}>
                <img className="cardContenidoImgPeople" src={img} alt={nombre}/>
            </Link>

            <div className="cardTituloPeople">{nombre}</div>
        </div>
    )
}

export default CardPeople;