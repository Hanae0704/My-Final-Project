import React from 'react';
import styled from 'styled-components';
import { mg } from '../../../common/mediaQueries.js';

const Section = ({chosenTab}) => {

    return (
        <SectionStyled>
            <div className="section">
            <img src={chosenTab.image} alt={chosenTab.title}/>
            <div className="paragraphs"><h2>{ chosenTab.title }</h2>
            <div dangerouslySetInnerHTML={ {__html: chosenTab.text } } /></div></div>
        </SectionStyled>
    );
}

export default Section;

const SectionStyled = styled.div`

    background-color: white;
    padding: 20px;

    img {
        width: 250px;
    }

    .paragraphs {
        color: gray;
        font-family: futura-pt, sans-serif;
        font-weight: 300;
        font-style: normal;
    }

    @media ${mg.phone} {

    img {
        width: 360px;   
        height: auto;
    }
    }

    @media ${mg.tablet} {

        img {
            width: auto;   
        }
    }

    @media ${mg.desktop} {

        .section {
            display: flex;
        }

        .paragraphs {
        display: inline-block;
        padding: 0px 0px 0px 20px;
    }

    }

`;
