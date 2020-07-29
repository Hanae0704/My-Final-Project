import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import ServicesContainer from './Services/ServicesContainer.jsx';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <Helmet>
                <title>Services :: Blue Pooch</title>
            </Helmet>
            <ServicesContainer/>
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`

padding: 20px;
    
`;