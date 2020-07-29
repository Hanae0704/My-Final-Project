import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { mg } from '../../common/mediaQueries.js';

/* Component ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';
import Body from './Body/Body.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
            <title>Home :: Blue Pooch</title>
            </Helmet>
            <h1>Welcome to Blue Pooch!</h1>
            <div className="subtitle">We specialize in Japanese Style Dog Grooming in West LA!</div>
            <div className="tab"><Tabbed/></div>
            <Body/>
            &nbsp;&nbsp;
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

        .tab {
            padding: 0px 0px 20px 0px;
        }

        .subtitle {
            font-size: 24px;
            color: white;
            padding: 0px 20px 5px 20px;

            font-family: futura-pt, sans-serif;
            font-weight: 300;
            font-style: normal;
        }

        h1 {
        color: skyblue;
        background-color: white;
        font-size: 25px;
        padding: 200px;
        }

        h3 {
            padding: 0px 50px 0px 50px;
        }

    @media ${mg.phone} {
    
        .tab {
            padding: 0px 50px 20px 50px;
        }

        h1 {
        font-size: 45px;
        }

    }

    @media ${mg.large} {

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