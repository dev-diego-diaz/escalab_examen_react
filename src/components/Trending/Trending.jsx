import React from 'react'
import { Box } from '@material-ui/core';

import CardContenido from '../Common/CardContenido'



const Trending = () => {
    return (
        <div className="paddingContent">
            <Box display="flex" justifyContent="start" alignContent="center" style={{overflowX:'scroll', overflowY:'hidden', width:'100%', minHeight:'320px'}}>
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
                <CardContenido />
            </Box>

        </div>
    )
}

export default Trending;