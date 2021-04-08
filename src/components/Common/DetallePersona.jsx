import React from 'react'
import { Box } from '@material-ui/core'

const DetallePersona = ({img, nombre, biografia, peliculas, informacionPersonal}) => {
    return (
        <div style={{width:'100%'}}>

            <Box style={{width:'100%'}} display="flex">

                <Box style={{width:'35%'}} display="flex" flexDirection="column">
                    <img style={{width:'60%'}} src={img} alt={nombre}/>
                    <p style={{fontSize:'1.5rem', fontWeight:700, padding: '10px 0 7px 0', margin: 0}}>Información personal</p>
                    
                    <p style={{padding: 0, margin: 0}}>Lugar de Nacimiento: {informacionPersonal.place_of_birth}</p>
                    <p style={{padding: 0, margin: 0}}>Cumpleaños : {informacionPersonal.birthday}</p>
                    <p style={{padding: 0, margin: 0}}>Popularidad : {informacionPersonal.popularity}</p>

                </Box>

                <Box style={{width:'65%'}} display="flex" flexDirection="column">
                    <h1>{nombre}</h1>

                    <h2 style={{margin: '0 0', fontWeight: 500}}>Biografía</h2>
                    <p>{biografia}</p>

                    <h2 style={{margin: '0 0', fontWeight: 500}}>Filmografía</h2>
                </Box>

            </Box>   

        </div>
    )
}


export default DetallePersona;
