import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { mg } from '../../common/mediaQueries.js';

/* Component ---------------------------*/
import Tabbed from './Tabbed/Tabbed.jsx';

const Home = () => {

    return (
        <HomeStyled className='Home'>
            <Helmet>
            <title>Home :: Blue Pooch</title>
            </Helmet>
            <h1>Welcome to Blue Pooch!</h1>
            <div className="subtitle"><h2>We specialize in Japanese Style Dog Grooming in West LA!</h2></div>
            <div className="tab"><Tabbed/></div>
            &nbsp;&nbsp;
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`

        .subtitle {
            color: white;
            padding: 0px 20px 5px 20px;
        }

        h1 {
        color: skyblue;
        background-color: white;
        font-size: 25px;
        padding: 100px;
        }

        h3 {
            padding: 0px 50px 0px 50px;
        }

    @media ${mg.phone} {
    
        .tab {
            padding: 0px 50px 0px 50px;
        }

        h1 {
        font-size: 45px;
        }

    }

    @media ${mg.large} {

        .tab {
            text-align: left;
            padding: 50px;
        }

        .subtitle {
            text-align: right;
            margin-bottom: -100px;
            margin-right: 50px;
            padding: 0px;
        }
    }

`;