import React from 'react';
import styled from 'styled-components';

import Nav from './Nav.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPaw,
} from '@fortawesome/free-solid-svg-icons';

import { mg } from '../common/mediaQueries.js';

const Header = () => {
    
    return (
        <HeaderStyled>
            <div className="left-container">
            <div className='logo'><FontAwesomeIcon icon={ faPaw }/></div>
            <div className='company-name'>Blue Pooch</div>
            <Nav/>
            </div>
            
        </HeaderStyled>
    )
}
export default Header;


const HeaderStyled = styled.header`

color: white;

padding: 20px 0px 0px 10px;

@font-face {font-family: 'Brusher';
            src: url(/font/Brusher-Regular.ttf);}

.company-name {
    font-family: Brusher;
    font-size: 30px;
    }

.left-container {

    text-align: center; 
    
    /*@media ${mg.phone} {
      text-align: center; 
    }  */

    @media ${mg.tablet} {
        display: flex;
        justify-content: center;  
    }   

    @media ${mg.desktop} {
        display: flex;
        justify-content: center;  
    }
}

.logo {
    font-size: 28px;

    @media ${mg.phone} {
           margin-right: 10px; 
    }   
}

`;