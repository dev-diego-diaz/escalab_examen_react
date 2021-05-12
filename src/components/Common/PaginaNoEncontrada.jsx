import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { withError } from '../Error/index';

const PaginaNoEncontrada = () => {
    return (
       <Box style={{height:'80vh'}} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
           <h3>Lo sentimos, no encontramos lo que buscabas :(</h3>
            <Link to={`/`} title="volver">
                volver
            </Link>
       </Box>
    )
}

export default withError(PaginaNoEncontrada);
