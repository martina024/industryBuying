import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>&nbsp;/&nbsp; {title} 
    </Wrapper>
  )
}
const Wrapper = styled.section`
height:3rem;
background-color: rgb(35,47,62);
color:rgb(255,255,255);
display:flex;
justify-content:flex-start;
align-items:center;
font-size:2rem;
padding-left:1.2rem;
a{
    font-size:2rem;
}
`;
export default PageNavigation