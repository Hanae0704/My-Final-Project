import React from 'react';
import styled from 'styled-components';
import { mg } from '../../../common/mediaQueries.js';

const GoogleMap = () => {

    return (
        <GoogleMapStyled className='GoogleMap'>
            <div className="googleMap">
            <iframe title='GoogleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.4865266326865!2d-118.44885538526114!3d34.03138888061164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb0ebedab771%3A0x9926417cd4a970a4!2sBlue%20Pooch%20Dog%20Grooming!5e0!3m2!1sen!2sus!4v1597747987614!5m2!1sen!2sus"></iframe>
            </div>
        </GoogleMapStyled>
    );
}

export default GoogleMap;

const GoogleMapStyled = styled.div`
    margin-top: 15px;
    margin-right: 35px;

    iframe {
        width: 100%;
        height: 270px;
        margin-left: 15px;

        @media ${mg.tablet} {
        height: 180px;
        margin-left: 0px;
        }
    }
`;