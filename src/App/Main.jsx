import React from 'react';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import Appointment from './Pages/Appointment.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';

const Main = () => {

　　　　return (
        <MainStyled>
             <Switch>
                <Route path='/appointment' component={ Appointment }/>
                <Route path='/contact' component={ Contact }/>
                <Route path='/about' component={ About }/>
                <Route path='/' component={ Home }/>
             </Switch>
        </MainStyled>
    );

}

export default Main;

const MainStyled = styled.main`
    text-align: center;
`;