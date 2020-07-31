import React from 'react';
import styled from 'styled-components';
import { mg } from '../../../../common/mediaQueries.js';

const FilterNavButton = ({name, currCategory, currCategorySet}) => {

    const changeCategory = () => {
        currCategorySet(name);
    }
    const theClassName = (name === currCategory) ? 'FilterNavButton active': 'FilterNavButton';


    return (
        <FilterNavButtonStyled 
        className={ theClassName }
        onClick={ changeCategory }>

            { name }
        </FilterNavButtonStyled>
    );
}

export default FilterNavButton;

const FilterNavButtonStyled = styled.div`

        display: inline-block;
        padding: 5px 5px;
        background-color: lightblue; 
        color: white;
        margin: 5px;
        border-radius: 5px;

    @media ${mg.phone} {
        padding: 10px 20px;
        margin: 10px;
    }

    cursor: pointer;

    &:hover {
        background-color: white;
    }

    &.active {
        background-color: lightblue;
        color: gray;
    }
`;