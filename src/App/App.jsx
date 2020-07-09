import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';


const App = () => {

return (
    
    <AppStyled className='App'>
        {/*In Class SPA App*/}
        <Header/>

        <Nav/>
        <Main/>
        <Footer/>

    </AppStyled>
);
}

export default App;

const AppStyled = styled.div`
    background-color: skyblue;
    width: 100%;
    margin: auto;
    /*border: solid 1px #333;*/
    padding: 20px 100px 30% 100px;
    text-align: center;

    .nested-wrapper {
    max-width:1200px;
    margin: auto;

    outline: solid black 1px;
    padding: 10px;
    }
`;
