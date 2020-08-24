import React from 'react';
import styled from 'styled-components';
import { mg } from '../../../common/mediaQueries.js';
import { slides } from './slidesData.js';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slideshow = () => {

    const renderSlides = () => {
        return slides.map((slide,idx) => {

            return (
            <div key={ idx }>
                <img src={ slide.image } alt={ slide.title }/>
                {/* <h1 className="legend">{slide.title}</h1> */}
            </div>
            );
        });
    }

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
            showThumbs={false}
            showIndicators={true}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            transitionTime={1000}>
            
            { renderSlides() }
            </Carousel>
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`

    margin-top: 20px;

    @media ${mg.tablet} {
        margin-top: 30px;
    }
    
    @media ${mg.desktop} {
        margin-top: 50px;
    }

    /* .carousel .slide .legend {

        background-color: white;
        color: skyblue;

        font-size: 20px;

        position: absolute;

        bottom: 5px;

        border-radius: 0px;
        
    } */

`;