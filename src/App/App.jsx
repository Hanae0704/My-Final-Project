import React from 'react';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';


const App = () => {

return (
    
    <AppStyled className='App'>
        <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
        </BrowserRouter>
    </AppStyled>
);
}

export default App;

const AppStyled = styled.div`

    background-color: skyblue;
    width: 100%;
    margin: auto;

    /* .nested-wrapper {
    max-width:1200px;
    margin: auto;
    } */
`;
