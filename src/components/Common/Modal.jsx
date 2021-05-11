import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({isOpen, children, onClose}) => {

    const [ modal, setModal ] = useState(true);

    return (
        isOpen ?
            createPortal(
                <div className='modal'>
                    <div className='modal__container'>
                        {children}
                    </div>
                    
                    <div style={{color:'white',textAlign:'center',width:'100%', cursor:'pointer'}} onClick={onClose}>Cerrar</div>
                    
                </div>,

                document.getElementById('modal'),
            ) :
            ''
        )
    }

export default Modal
