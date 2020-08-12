import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

/* Component ---------------------------*/
import Deets from './Contact/Deets.jsx';
import GoogleMap from './Contact/GoogleMap.jsx';
import ContactForm from './Contact/ContactForm.jsx';


const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <Helmet>
                <title>Contact :: SPA</title>
            </Helmet>
            <div className="nested-wrapper">
                <div className="column column1"><Deets/></div>
                <div className="column column2"><ContactForm/></div>
            </div>
            <GoogleMap/>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
    .nested-wrapper {
    display: flex;
    
    }

    .column {
        padding: 20px;
    }

    .column1 {
        background-color: white;
        width: 35%;
    }

    .column2 {
        background-color: white;
        width: 60%;
    }
`;