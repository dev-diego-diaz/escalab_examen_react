import React, {useContext, useState}  from 'react'
import { Box }              from '@material-ui/core'
import { TrendingContext }  from '../../contexts/TrendingContext';
import { url_imagen }       from '../../constants';
import CardContenido        from './CardContenido';
import noImage              from '../../assets/img/no_imagen.png';

import useModal             from '../../hooks/useModal';
import Modal                from './Modal';

const DetallePersona = () => {

    const {detallePersona, filmografiaActor} = useContext(TrendingContext);
    const { name, birthday, biography, place_of_birth, popularity, profile_path } = detallePersona;

    const { modal, abrirModal, cerrarModal} = useModal();

    return (
        <div style={{width:'100%'}}>

            <Box style={{width:'100%'}} display="flex">

                <Box style={{width:'35%'}} display="flex" flexDirection="column" justifyContent="center" alignItems="center">

                    <img style={{width:'60%', cursor:'pointer'}} src={ (profile_path) ? `${url_imagen}${profile_path}` : noImage} alt={name} onClick={abrirModal} />
                    <p style={{fontSize:'1.5rem', fontWeight:700, padding: '10px 0 7px 0', margin: 0}}>Información personal</p>
                    
                    <p style={{padding: 0, margin: 0}}>Lugar de Nacimiento : {place_of_birth}</p>
                    <p style={{padding: 0, margin: 0}}>Fecha de Nacimiento : {birthday}</p>
                    <p style={{padding: 0, margin: 0}}>Popularidad : { (popularity) ? popularity.toFixed() : 0} de 100</p>

                </Box>

                <Box style={{width:'60%'}} display="flex" flexDirection="column">
                    <h1>{name}</h1>

                    <h2 style={{margin: '0 0', fontWeight: 500}}>Biografía</h2>
                    <p style={{textAlign:'justify'}}>{(biography) ?  biography : 'Sin información'}</p>

                    <h2 style={{marginBottom: '15px', fontWeight: 500}}>Filmografía</h2>

                    {
                        filmografiaActor ? (

                            <Box display="flex" justifyContent="start" alignContent="center" style={{overflowX:'scroll', overflowY:'hidden', width:'100%', minHeight:'320px'}}>
                                { 
                                    filmografiaActor?.map((pelicula, index) => (
                                        <CardContenido pelicula key={index} id={pelicula.id} img={ (pelicula.poster_path) ? 'https://www.themoviedb.org/t/p/w220_and_h330_face/'+pelicula.poster_path : noImage} titulo={pelicula.title} valoracion={pelicula.vote_average} fecha={pelicula.release_date} />
                                    ))
                                }
                            </Box>

                        ) : (

                            <p>Sin información filmográfica</p>

                        )
                    }

                </Box>

            </Box> 

            <Modal isOpen={modal} onClose={cerrarModal}>
                <img style={{width:'80%'}} src={ (profile_path) ? `${url_imagen}${profile_path}` : noImage} alt={name}/>
            </Modal>

        </div>
    )
}


export default DetallePersona;
