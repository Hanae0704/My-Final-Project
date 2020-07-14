import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Appointment = () => {

    return (
        <AppointmentStyled className='Appointment'>
            <Helmet>
                <title>Appointment :: Blue Pooch</title>
            </Helmet>
            <h1>APPOINTMENT</h1>
        </AppointmentStyled>
    );
}

export default Appointment;

const AppointmentStyled = styled.div`
    padding: 20px;
`;