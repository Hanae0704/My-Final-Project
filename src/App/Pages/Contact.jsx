import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <Helmet>
                <title>Contact :: Blue Pooch</title>
            </Helmet>
            <h1>CONTACT</h1>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    padding: 20px;
`;