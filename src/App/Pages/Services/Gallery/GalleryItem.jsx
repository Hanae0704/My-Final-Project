import React from 'react';
import styled from 'styled-components';
import { mg } from '../../../../common/mediaQueries.js';


const GalleryItem = ({item}) => {

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div className="category">{ item.category }</div>
            <img src= {item.image} alt={item.title} />
            <div className="title">{ item.title }</div>
        </GalleryItemStyled>
    );
}

export default GalleryItem;

const GalleryItemStyled = styled.div`
    position: relative;

    margin: 5px;

    @media ${mg.phone} {
        margin: 10px;
    }

    @media ${mg.tablet} {
        margin: 20px;
    }

    border: solid 1px white;

    img { display: block; 
        width: 150px;

        @media ${mg.phone} {
        width: 230px;
        }

    }

    .category {
        position: absolute;
        top: 0; right: 0; left: 0;

        background-color: rgba(255,255,255, .5);

        padding: 10px;
        font-size: 12px;
        text-align: right;
    }


    .title {
        position: absolute;
        bottom: 0; right: 0; left: 0;

        background-color: rgba(255,255,255, .7);

        padding: 10px;
        font-size: 15px;
        text-align: left;
    }

`;