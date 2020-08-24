import React from 'react';
import styled from 'styled-components';
import { mg } from './mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, } from '@fortawesome/free-solid-svg-icons';

const Lightbox = ({hideAction, show=false, children, width=300 }) => {

    const handleHide = () => {
        hideAction();
    }

    const stopBubbleUp = (event) => { 
        event.stopPropagation();
    }

    return (
        show &&
        <LightboxStyled className='Lightbox'
        onClick={handleHide}>
        {/* lightWidth={width} */}

            <div className="light" onClick={ stopBubbleUp }>
            <FontAwesomeIcon className="close" icon={ faWindowClose } onClick={handleHide}/>
            {children}
            </div>
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`

    background-color: rgba(0,0,0,.7);
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    z-index: 1000;

    .light {
        width: 250px;
        padding: 20px;
        background-color: white;

        position: absolute;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        @media ${mg.phone} {
            width: 400px;
        }

        @media ${mg.tablet} {
            width: 500px;
        }

    img {
        display: inline;
        }
    }

    .close {
        font-size: 20px;
        position: absolute;
        right:3px; top:3px;

        cursor: pointer;
        color: skyblue;
    }
`;
