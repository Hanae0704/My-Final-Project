import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { mg } from '../../common/mediaQueries.js';

import ServicesContainer from './Services/ServicesContainer.jsx';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <Helmet>
                <title>Services :: Blue Pooch</title>
            </Helmet>
            <hr/>
            <ServicesContainer/>
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`

    margin-top: 25px;   

    hr {
        display: none;
        
        @media ${mg.phone} {
        display: block;
        width: 100%; 
        border: solid 1px white; 
        margin-bottom: 20px;
        }
    }

`;