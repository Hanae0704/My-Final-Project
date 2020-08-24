import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPaw,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    
    return (
        <FooterStyled>
        COPYRIGHT 2020 | All RIGHT RESERVED
        <div className="left-container">
        <div className='logo'><FontAwesomeIcon icon={ faPaw }/></div>
        <div className='company-name'>Blue Pooch</div>
        </div>

        </FooterStyled>
    )
}
export default Footer;

const FooterStyled = styled.footer`

    text-align: center;
    font-size:13px;
    color: gray;
    background-color: white;
    padding: 20px;

    .company-name {
    font-size: 18px;
    font-family: milk-script, sans-serif;
    font-weight: 400;
    font-style: normal;
    }

    .left-container {
        margin-top: 10px;
        text-align: center; 
    
        display: flex;
        justify-content: center;
    }

    .logo {
        font-size: 18px;
        margin-right: 5px;
    }

`;