import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const About = () => {

    return (
        <AboutStyled className='About'>
            <Helmet>
                <title>About :: Blue Pooch</title>
            </Helmet>
            <h1>ABOUT</h1>
        </AboutStyled>
    );
}

export default About;

const AboutStyled = styled.div`

padding: 20px;
    
`;