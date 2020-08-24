import React from 'react';
import styled from 'styled-components';

const Button = ({children, type}) => {

    return (
        <ButtonStyled 
        className='Button'
        type={type}>

        {children}
        </ButtonStyled>
    );
}

export default Button;

const ButtonStyled = styled.button`

    background-color: skyblue;
    color: white;
    padding: 10px;
    border: solid 1px white;
    outline: none;
    border-radius: 5px;

    &:hover {
        background-color: #78b9d4;
    }

    &:active {
        background-color: #64ccf7;
    }
`;