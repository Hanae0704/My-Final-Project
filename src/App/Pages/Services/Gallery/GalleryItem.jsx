import React, { useState } from 'react';
import styled from 'styled-components';

import Lightbox from '../../../../common/Lightbox.jsx';

import { mg } from '../../../../common/mediaQueries.js';


const GalleryItem = ({item}) => {

    const [ showLBox, showLBoxUpdate] = useState(false);

    const turnOn = () => {
        showLBoxUpdate(true);
    }
    const turnOff = () => {
        showLBoxUpdate(false);
    }

    return (
        <GalleryItemStyled className='GalleryItem'>
            <div className="category">{ item.category }</div>
            <img 
            src= {item.image} 
            alt={item.title} 
            onClick={turnOn}/>

            <div className="title">{ item.title }</div>
            <Lightbox show = {showLBox} hideAction={turnOff}>
            <img src={item.image} alt={item.title}/>
            <h3> {item.title} </h3>
            <div className="description">{ item.description }</div>
            <div className="cost">${ item.cost }</div>
            </Lightbox>
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

    .Lightbox {
        img {
            max-width: 30%;
        }
        h3 {
            color: skyblue;
        }
    }

`;