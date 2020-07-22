import React from 'react';
import styled from 'styled-components';

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
    }

    @media(min-width: 500px) {

    img {
        width: 360px;   
        height: auto;
    }
    }

    @media(min-width: 850px) {

        img {
            width: auto;   
        }
    }

    @media(min-width: 1000px) {

        .section {
            display: flex;
        }

        .paragraphs {
        display: inline-block;
        padding: 0px 0px 0px 20px;
    }

    }

`;
