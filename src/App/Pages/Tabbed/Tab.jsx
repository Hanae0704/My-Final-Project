import React from 'react';
import styled from 'styled-components';
import { mg } from '../../../common/mediaQueries.js';

const Tab = ({tabItem, chosenTabset, chosenTab}) => {

    const handleClick = () => {
        chosenTabset(tabItem);
    }
    
    const theClassName = (tabItem.title === chosenTab.title) ? 'Tab active':'Tab';

    return (
        <TabStyled 
        className= { theClassName }
        onClick={ handleClick }>

            { tabItem.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`

    font-size: 12px;
    color: gray;

    display: inline-block;

    background-color: #cfdfe4;

    width: 70px;
    line-height: 30px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;

    margin: 0px 5px 0px 5px;

    cursor: pointer;
    
    @media ${mg.phone} {

    width: 90px;
    line-height: 40px;

    font-size: 15px;

    }

    &.active {
        background-color: white;
    }
`;