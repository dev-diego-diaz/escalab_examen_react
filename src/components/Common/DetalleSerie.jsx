import React, { Fragment, useContext, useState } from 'react';
import { Box } from '@material-ui/core';
import { TrendingContext } from '../../contexts/TrendingContext';

import '../../assets/css/style.css';
import CardPeople from './CardPeople';
import noImage from '../../assets/img/no_imagen.png';

import useModal             from '../../hooks/useModal';
import Modal                from './Modal';

import { withError } from '../Error/index';

const DetalleSerie = () => {

    const { detalleSerie, infoGeneralSerie } = useContext(TrendingContext);
    const { name, backdrop_path, poster_path, first_air_date, vote_average, overview } = detalleSerie;

    const { modal, abrirModal, cerrarModal} = useModal();

    return (
        <Fragment>
            <div style={{position:'relative'}}>
                <div className="contenedorBackground" style={ backdrop_path && {backgroundImage: `url(https://www.themoviedb.org/t/p/w1280${backdrop_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <Box display="flex" className="contenedorBackgroundTenue">
                        <Box style={{position:'relative', width:'100%'}} display="flex">
                            <Box style={{width:'30%',height:'100%'}} display="flex" justifyContent="center" alignItems="center">
                                <img src={ poster_path && `https://www.themoviedb.org/t/p/w342${poster_path}`} style={{width:'70%', borderRadius:'3%', cursor:'pointer'}} alt={name} onClick={abrirModal}/>
                            </Box>
                            <Box style={{width:'70%', margin:'30px', color:'#fff'}} display="flex" flexDirection="column">
                                <Box style={{fontSize:'40px'}}><b>{name}</b> ({new Date(first_air_date).getFullYear()})</Box>
                                <Box>Puntuación de usuarios {vote_average * 10}%</Box>

                                <Box style={{marginTop:'10px'}}><h3>Sinopsis</h3></Box>
                                <Box style={{textAlign:'justify'}}>{overview}</Box>

                                <h2 style={{paddingTop:'10px'}}>Reparto</h2>
                                <Box display="flex" justifyContent="start" alignContent="center" style={{overflowX:'scroll', overflowY:'hidden', width:'100%', minHeight:'320px'}}>
                                    { 
                                        infoGeneralSerie.length > 0 && infoGeneralSerie.map((info, index) => (
                                            <CardPeople id={info.id} key={index} img={ (info.profile_path) ? 'https://www.themoviedb.org/t/p/w220_and_h330_face/'+info.profile_path : noImage} nombre={info.name} valoracion={info.popularity} />
                                        ))
                                    }
                                </Box>

                            </Box>
                            
                        </Box>
                    </Box>
                </div>
            </div>

            <Modal isOpen={modal} onClose={cerrarModal}>
                <img src={`https://www.themoviedb.org/t/p/w342${poster_path}`} style={{width:'120%', borderRadius:'3%'}} alt=""/>
            </Modal>
        </Fragment>
    )
}

export default withError(DetalleSerie);