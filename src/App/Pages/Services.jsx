import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <Helmet>
                <title>Services :: Blue Pooch</title>
            </Helmet>
            <h1>SERVICES</h1>
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`

padding: 20px;
    
`;