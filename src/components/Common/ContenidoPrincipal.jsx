import React from 'react';
import { Button } from '@material-ui/core';
import ReactPlayer from 'react-player';

const ContenidoPrincipal = ({ titulo, sinopsis, trailer }) => {
    return (
        <div>

            <div style={{position:'absolute', top:'15%', left:'5%'}}>
                <h2 style={{color:'white'}}>{titulo}</h2>
                <p style={{width:'40%', color:'white', textAlign: 'justify'}}>{sinopsis}</p>
                <Button size="small" variant="outlined" color="primary" style={{marginRight:'10px'}}>Reproducir</Button>
                <Button size="small" variant="outlined" color="primary">Más información</Button>
            </div>

            <ReactPlayer 
                url={'https://www.youtube.com/watch?v='+trailer}
                width='100%'
                height='380px'
                volume={0.2}
                playing={true}
            />
        </div>
    )
}

export default ContenidoPrincipal;