import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { mg } from '../common/mediaQueries.js';

const Nav = () => {

return (
<NavStyled>
<div className='nested-wrapper'>
        <NavLink to="/"exact>HOME</NavLink>
        <NavLink to="/appointment">APPOINTMENT</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink> 
</div>
</NavStyled>
)

}

export default Nav;

const NavStyled = styled.nav`

        

        @media ${mg.tablet} {
            /*width: 100px;*/
            margin-left: 200px;
        }
            
        @media ${mg.desktop} {
            /*width: 150px;*/
            margin-left: 350px;
        }
a {
        font-size: 15px;
        color: white;

        text-align: center;
        line-height: 10px;
        
        vertical-align: center;

        text-decoration: underline;

        width: 120px;
        margin-right: 10px;
        margin-left: 10px;

        @media ${mg.tablet} {
            /*width: 100px;*/
            font-size: 20px;
        }
            
        @media ${mg.desktop} {
            /*width: 150px;*/
            font-size: 20px;
        }

        &:hover {
            background-color: lightblue;
        }

        &:active {
            background-color: gray;
        }
}
`;
