import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { mg } from '../common/mediaQueries.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, showMenuSet] = useState(false);

    const toggleMenu = () => {
        showMenuSet(!showMenu);
    }

    useEffect(()=> {

        const handleWindowSizeChange = () => {
            const isItMobile = window.matchMedia(`(max-width: 499px)`);
            console.log(isItMobile.matches);

            showMenuSet(!isItMobile.matches);
        }
        
        handleWindowSizeChange();

        window.addEventListener(`resize`, handleWindowSizeChange);

        return () => {
            window.removeEventListener(`resize`, handleWindowSizeChange);
        }
        
    }, []);

return (
<NavStyled>
    <div className="hamburger"
             onClick={ toggleMenu } >
            <FontAwesomeIcon icon={ faBars } />
        </div>
        {
            showMenu&&

        <div className="links">
        <NavLink to="/"exact>HOME</NavLink>
        <NavLink to="/appointment" className='leftline'>APPOINTMENT</NavLink>
        <NavLink to="/services" className='leftline'>SERVICES</NavLink>
        <NavLink to="/contact" className="leftline underline">CONTACT</NavLink> 
        </div>
        }
</NavStyled>
)

}

export default Nav;

const NavStyled = styled.nav`

        margin-top: 20px;
        
        @media ${mg.phone} {
            .leftline {
            border-left: solid 1px white;
            padding-left: 15px;
            }
        }

        @media ${mg.tablet} {
            /*width: 100px;*/
            margin-left: 150px;
        }
            
        @media ${mg.desktop} {
            /*width: 150px;*/
            margin-left: 300px;
        }

        .hamburger {
        position: absolute;
        right: 20px;
        top: 20px;
        
        cursor: pointer;

        svg {
        color: white;
        width: 35px;
        height: auto;
        }
        
        @media ${mg.phone} {
            display: none;
        }
    }

    a {

@media (max-width: 499px) {
    /* float: none;  */
    width: 100%;
    display: inline-block;

    background-color: #4fb3d2;
    /* border-radius: 10px 10px 10px 10px; */
    padding: 15px 0px;

    margin-bottom: 0px;
    margin-left: 0px;

    outline: solid 1px white;

}

        font-family: futura-pt, sans-serif;
                    font-weight: 300;
                    font-style: normal;
                
        font-size: 18px;
        color: white;
        text-decoration: none;
        text-align: center;
        line-height: 10px;
        margin-left: 15px;

        @media ${mg.phone} {
            font-size: 20px;
        }
        @media ${mg.tablet} {
            font-size: 22px;
        }
            
        @media ${mg.desktop} {
            font-size: 22px;
        }
        
        &:hover {
            text-decoration: underline;
            /* background-color: lightblue;
            border-radius: 10px 10px 10px 10px;
            padding: 5px; */
        }
        /* &.active {
            background-color: lightblue;
        } */
}
`;