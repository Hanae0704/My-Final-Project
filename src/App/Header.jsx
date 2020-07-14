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
            Blue Pooch
            <Nav/>
            </div>
            
        </HeaderStyled>
    )
}
export default Header;


const HeaderStyled = styled.header`

color: white;
font-size: 28px;
padding: 20px 0px 0px 10px;


.left-container {
    text-align: center;

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
    margin-right: 10px;
}

`;