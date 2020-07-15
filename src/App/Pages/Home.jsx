import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';


const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
            <title>Home :: Blue Pooch</title>
            </Helmet>
            <h1>Welcome to Blue Pooch!</h1>
            <h2>We specialize in Japanese Style Dog Grooming in West LA!</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            &nbsp;&nbsp;
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    h1 {
        color: skyblue;
        background-color: white;
        font-size: 45px;
        padding: 100px;
    }

    h2 {
        padding: 0px 100px 0px 100px;
    }

    h3 {
        padding: 0px 100px 0px 100px;
    }
`;