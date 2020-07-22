import React from 'react';
import styled from 'styled-components';

const Tab = ({tabItem, chosenTabset}) => {

    const handleClick = () => {
        chosenTabset(tabItem);
    }

    return (
        <TabStyled className='Tab'
                   onClick={ handleClick }>

            { tabItem.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`

    display: inline-block;

    background-color: white;
    width: 70px;
    line-height: 30px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    font-size: 12px;

    margin: 0px 5px 0px 5px;

    
    @media(min-width:500px) {

    display: inline-block;

    background-color: white;
    width: 90px;
    line-height: 40px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    font-size: 15px;

    margin: 0px 5px 0px 5px;

    }
`;