import React from 'react';
import styled from 'styled-components';

const Nav = () => {

return (
<NavStyled>
<div className='nested-wrapper'>
&nbsp;
HOME &nbsp;|&nbsp; APPOINTMENT &nbsp;|&nbsp; ABOUT &nbsp;|&nbsp; CONTACT 
</div>
</NavStyled>
)

}

export default Nav;

const NavStyled = styled.nav`

color: white;

`;