import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { mg } from '../../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBone, faMapMarkerAlt, faPhone, faEnvelope, faParking
} from '@fortawesome/free-solid-svg-icons';


import ContactForm from './Contact/ContactForm.jsx';
import GoogleMap from './Contact/GoogleMap.jsx';


const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <Helmet>
                <title>Contact :: Blue Pooch</title>
            </Helmet>
            <hr/>
            <div className="contactForm"><ContactForm/></div>
            <div className="message">
                <FontAwesomeIcon icon={ faBone }/>
                If you would like to make an appointment, you can also request from here.<br></br>
                For any questions, please leave us a detail message and someone will get back with you within 24 - 48 hours. <br></br>
                If you need an urgent assistance, please call us at xxx-xxx-xxx. Thank you!</div>
            <div className="nestedwrapper">
            <div className="message info">
            <FontAwesomeIcon icon={ faMapMarkerAlt }/>
            11737 W. Pico Blvd, Los Angeles, CA 90064
            <br></br>
            <FontAwesomeIcon icon={ faPhone }/>
            111-222-3344
            <br></br>
            <FontAwesomeIcon icon={ faEnvelope }/>
            info@bluepooch.com
            <br></br>
            <div className="message parking">
            <FontAwesomeIcon icon={ faParking }/>
            Small parking lot in the backside of the building.<br>
            </br>There's also a lot of meter parking on Pico.<br>
            </br>We leave coins for our customers who parked on the<br>
            </br>meter parking available at our front desk counter.<br>
            </br>Please ask our receptionist. </div>
            </div>
            <GoogleMap/></div>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

    .nestedwrapper {

        display: inline-block;
        background-color: white;
        margin: 30px;
        padding-bottom: 10px;

        @media ${mg.tablet} {
        display: flex;
        justify-content: center;
        }
    }

    margin: 25px 0px;

    hr {
        display: none;

        @media ${mg.phone} {
        display: block;
        width: 100%; 
        border: solid 1px white; 
        margin-bottom: 25px;
        }
    }

    .contactForm {
        background-color: white;
        border-radius: 10px;
        display: inline-block;
        padding: 20px;
        width: 80%;

        @media ${mg.tablet} {
        padding: 30px;
        width: 40%;
        }
    }

    .message {
        font-family: futura-pt, sans-serif;
        font-weight: 500;
        font-style: normal;
    
        color: white;

        margin-top: 20px;
        padding: 0px 40px;

        @media ${mg.phone} {
        padding: 0px 40px;
        }

        @media ${mg.desktop} {
        padding: 0px 70px;
        }

        svg {
        margin-right: 5px;
        }
    }

    .info {
        color: gray;
        font-size: 12px;
        text-align: center;
        /* margin-right: 30px; */

        @media ${mg.phone} {
        font-size: 15px;
        }

        @media ${mg.tablet} {
        text-align: left;
        font-size: 20px;
        }
    }

    .parking {
        color: gray;
        font-size: 10px;
        padding: 0px;

        @media ${mg.phone} {
        font-size: 12px;
        }

        @media ${mg.tablet} {
        font-size: 15px;
        }
    }
`;