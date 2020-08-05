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
        console.log("You clicked the hamburger", showMenu);
        showMenuSet(!showMenu);
    }

    useEffect(()=> {
        console.log("I Have mounted");

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
<div className='nested-wrapper'>
    <div className="hamburger"
             onClick={ toggleMenu }
        >
            <FontAwesomeIcon icon={ faBars } />
        </div>
        {
            showMenu&&

        <div className="links">
        <NavLink to="/"exact>HOME</NavLink>
        <NavLink to="/appointment">APPOINTMENT</NavLink>
        <NavLink to="/services">SERVICES</NavLink>
        <NavLink to="/contact">CONTACT</NavLink> 
        </div>
        }
</div>
</NavStyled>
)

}

export default Nav;

const NavStyled = styled.nav`

       

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

        display: block;

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

        text-align: center;
        line-height: 10px;
        
        vertical-align: bottom;

        width: 120px;
        margin-right: 10px;
        margin-left: 10px;

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
            background-color: lightblue;
        }

        /* &.active {
            background-color: lightblue;
        } */
}
`;
