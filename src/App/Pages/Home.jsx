import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { mg } from '../../common/mediaQueries.js';

/* Component ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';
import Body from './Body/Body.jsx';
import Slideshow from './Slideshow/Slideshow.jsx'

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
            <title>Home :: Blue Pooch</title>
            </Helmet>
            <Slideshow/>
            <h1>- WELCOME TO BLUE POOCH -</h1>
            <div className="subtitle">We specialize in Japanese Style Dog Grooming in West LA!</div>
            <div className="tab"><Tabbed/></div>
            <Body/>
            <div className="youtube">
            <iframe src="https://www.youtube.com/embed/tlvUv_aYlFU" title="youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

        .youtube {

            iframe {

                width: 260px;
                height: 195px;

            @media ${mg.phone} {
                width: 420px;
                height: 205px;
            }

            @media ${mg.tablet} {
                width: 560px;
                height: 315px;
            }
        }

            display: inline-block;
            background-color: white;
            padding: 20px 20px 12px 20px;
            outline: solid 1px gray;

            margin-bottom: 30px;
        }

        .tab {
            padding: 0px 0px 20px 0px;
        }

        .subtitle {
            font-size: 15px;
            color: white;
            padding: 0px 30px 20px 30px;

            font-family: futura-pt, sans-serif;
            font-weight: 300;
            font-style: normal;
        }

        h1 {
            color: white;
            font-size: 23px;
            padding: 0px 10px;
        }

        h3 {
            padding: 0px 50px 0px 50px;
        }

    @media ${mg.phone} {
    
        .tab {
            padding: 0px 50px 20px 50px;
        }

        h1 {
            font-size: 30px;
            margin-bottom: 10px;
        }

        .subtitle {
            font-size: 24px;
        }

    }

    @media ${mg.tablet} {

        h1 {
        margin-bottom: 10px;
        }

    }

    @media ${mg.large} {

        h1 {
            font-size: 35px;
            margin-bottom: 30px;
        }

        .tab {
            text-align: left;
            padding: 50px 50px 20px 50px;
        }

        .subtitle {
            text-align: right;
            margin-bottom: -80px;
            margin-right: 50px;
            padding: 0px;
        }
    }

`;