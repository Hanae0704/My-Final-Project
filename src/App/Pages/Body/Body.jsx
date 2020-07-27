import React from 'react';
import styled from 'styled-components';

import Body2 from './Body2.jsx';
import {bodyData} from './bodyitems.js';


const Body = () => {

    const renderBody = () => {
        return bodyData.map((list, idk) =>  {
            return <Body2
            key = {idk}
            list = {list}
            />;
        });
    }

    return (
        <BodyStyled className='Body'>
            <div className="column column0">Why Blue Pooch?</div>
            <div className="column column1">{ renderBody () }</div>
        </BodyStyled>
    );
}

export default Body;

const BodyStyled = styled.div`
    .column0 {
        font-size: 35px;
        text-align: center;
        color: white;
    }

    .column1 {
        flex-wrap: wrap;
    }
`;