import React from 'react';
import styled from 'styled-components';

const Nav = () => {

return (
<NavStyled>
<div className='nested-wrapper'>
        <a href="/">HOME</a>
        <a href="/appointment">APPOINTMENT</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a> 
</div>
</NavStyled>
)

}

export default Nav;

const NavStyled = styled.nav`
        margin-left: 50px;
a {
        text-align: center;
        line-height: 20px;
        font-size: 20px;
        color: white;

        text-decoration: underline;

        width: 120px;
        margin-right: 5px;
        margin-left: 5px;

        &:hover {
            background-color: lightblue;
        }
}
`;
