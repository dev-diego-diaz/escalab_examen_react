import React, { Fragment, useContext } from 'react';
import { Box } from '@material-ui/core';
import { TrendingContext } from '../../contexts/TrendingContext';

import '../../assets/css/style.css';
import CardPeople from './CardPeople';
import noImage from '../../assets/img/no_imagen.png';

import useModal from '../../hooks/useModal';
import Modal from './Modal';

import { withError } from '../Error/index';

const DetalleContenido = () => {

    const { modal, abrirModal, cerrarModal} = useModal();
    
    const { detallePelicula, infoGeneralPelicula } = useContext(TrendingContext);
    const { title, backdrop_path, poster_path, release_date, vote_average, overview } = detallePelicula;

    return (
        <Fragment>
            <div style={{position:'relative'}}>
                <div className="contenedorBackground" style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w1280${backdrop_path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                    <Box display="flex" className="contenedorBackgroundTenue">
                        <Box style={{position:'relative', width:'100%'}} display="flex">
                            <Box style={{width:'30%',height:'100%'}} display="flex" justifyContent="center" alignItems="center">
                                <img src={ (poster_path) ? `https://www.themoviedb.org/t/p/w342${poster_path}` : poster_path} 
                                     style={{width:'70%', borderRadius:'3%', cursor:'pointer'}} 
                                     alt={title} 
                                     onClick={abrirModal}
                                />
                            </Box>
                            <Box style={{width:'70%', margin:'30px', color:'#fff'}} display="flex" flexDirection="column">
                                <Box style={{fontSize:'40px'}}><b>{title}</b> ({new Date(release_date).getFullYear()})</Box>
                                <Box>Puntuación de usuarios {vote_average * 10}%</Box>

                                <Box style={{marginTop:'10px'}}><h3>Sinopsis</h3></Box>
                                <Box style={{textAlign:'justify'}}>{overview}</Box>

                                {/* Reparto */}
                                <h2 style={{paddingTop:'10px'}}>Reparto</h2>
                                <Box display="flex" justifyContent="start" alignContent="center" style={{overflowX:'scroll', overflowY:'hidden', width:'100%', minHeight:'320px'}}>
                                    { 
                                        infoGeneralPelicula?.map((info, index) => (
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
                <img src={ (poster_path) ? `https://www.themoviedb.org/t/p/w342${poster_path}` : poster_path} style={{width:'120%', borderRadius:'3%'}} alt={title} />
            </Modal>

            
        </Fragment>
    )
}

export default withError(DetalleContenido);