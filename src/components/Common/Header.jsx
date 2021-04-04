import React from 'react';
import { Link } from "react-router-dom";

import { AppBar, Toolbar } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Logo from '../../assets/img/logo.svg';


const Header = () => {
    return(
        <AppBar position="sticky">
            
            <Box display="flex" style={{marginLeft : '30px'}} flexDirection="row" justifyContent="start" alignItems="center">

                <img src={Logo} style={{width:'10%'}} alt=""/>

                <Toolbar>

                    <ul className="menuPrincipal">
                        <li>
                            {/* Inicio */}
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            {/* Películas */}
                            <Link to="/peliculas">Películas</Link>
                        </li>
                        <li>
                            {/* Series */}
                            <Link to="/series">Series</Link>
                        </li>
                    </ul>

                </Toolbar>

            </Box>

        </AppBar>
    );
};

export default Header;