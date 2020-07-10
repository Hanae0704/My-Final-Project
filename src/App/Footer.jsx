import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    
    return (
        <FooterStyled>
            <div className='nested-wrapper'>
                COPYRIGHT 2020 | All RIGHT RESERVED
            </div>
        </FooterStyled>
    )
}
export default Footer;

const FooterStyled = styled.footer`
text-align: center;
font-size:12px;
background-color: white;
padding: 20px;
`;