import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withError } from '../Error/index';

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

CardPeople.propTypes = {
    id         : propTypes.number,
    img        : propTypes.string,
    nombre     : propTypes.string
};

export default withError(CardPeople);