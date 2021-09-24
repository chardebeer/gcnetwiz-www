import React from 'react'
import { Root } from 'react-static'
import {Link} from "@reach/router";
import styled from "styled-components";
import logo from "./logo.svg"
import UserIcon from "./user-circle-regular.svg"
import MenuIcn from "./menu.svg"

/*TODO: Clean up Styling :)
*    box-shadow: 0 2px 10px rgba(57, 63, 72, 0.3);
*/

const Nav = styled.div`
  width: 100%;
  min-width: 100vw;
  overflow: hidden;
  display: grid;
  background: rgba(255, 255, 255, 0);
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-template-areas:
"logo menu";
  justify-content: space-between;
  align-content: space-evenly;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 2vh 5vw;

  @media screen and (max-width: 950px) {

    column-gap: 0;
    padding: 2%;
    max-height: 20%;
    width: 100%;
    display: inline-flex;

  }

  @media screen and (max-width: 500px) {

    column-gap: 0;
    padding: 5%;
    max-height: 20%;
    display: inline-flex;

  }
`

const MobileMenu = styled.div`
  svg {
    transform: translate(5vw, 0px);
  }
  @media screen and (max-width: 280px)
  {  justify-self: flex-end;
    transform: translate(-20px, 0px);
  }
  @media screen and (min-width: 500px)
  {  justify-self: flex-end;
    svg {
      transform: translate(20vw, 0px);
    }
  }
  @media screen and (min-width: 560px)
  {  justify-self: flex-end;
    svg {
      transform: translate(25vw, 0px);
    }
  }
  @media screen and (min-width: 950px)
  {
    display: none;
  }
`

const HamburgerIcon = styled(MenuIcn)`
width: 100%;

  @media screen and (min-width: 950px)
  {
    display: none;
  }
`

const StyledLogo = styled(logo)`
    width: 100% ;

  @media screen and (max-width: 280px)
  {
   
      width: 150px;
    
  }
  
`

const NavMenu = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: menu;
  


`

const MenuWrapper = styled.div `
  display: inline-flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: 600;


  a {
    padding: 1rem;
    width: 5.75rem;
    align-self: center;
    color: #e0e0e0;
    display: inline-block;
  }

  span {
    padding: 0.7rem 0.25rem;
    text-decoration: none;
    color: #5b4f75;
    font-size: 1.35rem;
    font-weight: 600;
    display: inline-block;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }

`

const Wrapper = styled.div`
  justify-content: flex-start;
  pointer-events: none;
  display: inline-block;
  justify-self: start;
  align-self: center;
  grid-area: logo;
    
`
const IconWrapper = styled(UserIcon)`
  max-width: 2rem;
    max-height:2rem;
  padding: 10px;
  

`
const LinkStyle = styled(Link)`
  color: #e0e0e0;
  padding: 0.5em 1em;
`


const Header = () => {

  return (
      <Root>
        <Nav>
            <Wrapper>
                <StyledLogo/>
            </Wrapper>
            <MobileMenu>
                <HamburgerIcon/>
            </MobileMenu>
            <NavMenu>
                <MenuWrapper>
          <Link to="/"> About us </Link>
          <span> | </span>
          <Link to="/"> Apply here</Link>
          <span> | </span>
          <Link to="/"> Rewards</Link>
          <span> | </span>
          <Link to="/"> Sign in
      </Link>
                <IconWrapper src={UserIcon}/>

                </MenuWrapper>
            </NavMenu>
        </Nav>
      </Root>
  )
}

export default Header
