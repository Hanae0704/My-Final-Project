import React from 'react';
import styled from 'styled-components';

const Main = () => {

　　　　return (
        <MainStyled>
            <h1>Welcome to Blue Pooch!</h1>
            <h2>We specialize in Japanese Style Dog Grooming in West LA!</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            &nbsp;&nbsp;
        </MainStyled>
    );

}

export default Main;

const MainStyled = styled.main`
h1 {
    color: skyblue;
    background-color: white;
    font-size: 45px;
    padding: 100px;
}
h2 {
    padding: 10px;
}
h3 {
}

`;