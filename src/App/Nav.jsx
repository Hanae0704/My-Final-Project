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
             onClick={ toggleMenu }
        >
            <FontAwesomeIcon icon={ faBars } />
        </div>
        {
            showMenu&&

        <div className="links">
        <NavLink to="/"exact>HOME</NavLink>
        <NavLink to="/appointment" class='leftline'>APPOINTMENT</NavLink>
        <NavLink to="/services" class='leftline'>SERVICES</NavLink>
        <NavLink to="/contact" class='leftline'>CONTACT</NavLink> 
        </div>
        }
</NavStyled>
)

}

export default Nav;

const NavStyled = styled.nav`

        .leftline {
            border-left: solid 1px white;
            padding-left: 15px;
        }

        margin-top: 20px;

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

        font-family: futura-pt, sans-serif;
                font-weight: 300;
                font-style: normal;
                
        font-size: 15px;
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
