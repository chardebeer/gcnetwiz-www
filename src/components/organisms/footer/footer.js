import React from 'react'
import styled from "styled-components";
import FooterLogo from "./logo.png";




const FooterContainer = styled.footer `
  width: 100%;
  min-width: 100vw;
  background: #333333;
  color: #808080;
  padding: 15vh 10vw;

`

const MenuHeading = styled.div`
  font-size: calc(0.7rem + 0.7vw);
  font-style: normal;
  font-weight: 500;
  padding: 1rem 0;
  line-height: calc(0.5rem + 0.75vw);
  text-align: left;
  grid-column-start: 2;
  grid-column-end: 6;
  border-bottom: 2px solid  #808080;
  width: 100%;
`

const MenuList = styled.ul `
list-style: none;
  margin: 2vh 0;
  padding: 0;

`
const ListItem = styled.li `
  font-size: calc(0.5rem + 0.5vw);
  font-style: normal;
  font-weight: 400;
  line-height: calc(0.5rem + 0.7vw);
  text-align: left;
  color: #808080;



`

 const FooterGrid = styled.div `
   width: 80vw;
    display: grid;
   column-gap: 5vw;
    grid-template-columns: 1.5fr 2.5fr;
    grid-template-rows: 1fr;
    grid-auto-flow: row;
    grid-template-areas:
    "SiteInfo FooterMenu";
   @media screen and (max-width: 700px) {
     grid-template-columns: 1fr;
     grid-template-rows: 1.5fr 2.5fr;
     grid-template-areas:
    "SiteInfo" 
    "FooterMenu";
   }`

     const SiteInfo = styled.div`
       grid-area: SiteInfo;
       align-self: center;
       justify-content: left;
       display: flex;
       
       flex-direction: column;
       p {
         font-size: 0.75vw;
         
       }
     
         @media screen and (max-width: 600px) {
         justify-self: center;
         font-size: 1rem;
       }

     `



const FooterMenu = styled.div
`    display: grid;
    grid-template-columns: repeat(autofit 3, 1fr);
    grid-template-rows: 1fr ;
    grid-auto-flow: row;
    grid-template-areas:
    "MoreMenu LegalMenu MoreMenu2";
    grid-area: FooterMenu;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(autofit 3, 1fr);
    grid-template-areas:
    "MoreMenu" 
    "LegalMenu" 
    "MoreMenu2";
  }
\`
`

const MoreMenu = styled.div `
      grid-area: MoreMenu;
    `
const MoreMenu2 = styled.div `
      grid-area: MoreMenu2;
    `
const LegalMenu = styled.div `
      grid-area: LegalMenu;
    `


const Logo = styled.img`
  width: calc(1rem + 15vw);
  margin-bottom: 3vh;
  @media screen and (max-width: 600px) {
    width: calc(1rem + 60vw);
    justify-self: center;
    margin-bottom: 1vh;

  }

`



const Footer = () => {
    return (
        <FooterContainer>
            <FooterGrid>
                <SiteInfo>
                    <Logo src={FooterLogo}/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh erat, tempus vestibulum sapien eu, maximus tincidunt e
                   </p>  </SiteInfo>
                <FooterMenu>
                    <MoreMenu>
                        <MenuHeading>
                            More
                        </MenuHeading>
                        <MenuList>
                            <ListItem><a> Security </a></ListItem>
                            <ListItem><a> FAQ´s</a></ListItem>
                            <ListItem><a> Support (Check Source)</a></ListItem>
                        </MenuList>
                    </MoreMenu>
                    <LegalMenu>
                        <MenuHeading>
                            Legal
                        </MenuHeading>
                        <MenuList>
                            <ListItem><a> Terms and conditions TBD</a></ListItem>
                            <ListItem><a> Cookie policy</a></ListItem>
                            <ListItem><a> Privacy policy </a></ListItem>
                        </MenuList>
                    </LegalMenu>
                    <MoreMenu2>
                        <MenuHeading>
                            More
                        </MenuHeading>
                        <MenuList>
                            <ListItem><a> Security </a></ListItem>
                            <ListItem><a> FAQ´s</a></ListItem>
                            <ListItem><a> Support (Check Source)</a></ListItem>
                        </MenuList>
                    </MoreMenu2>
                </FooterMenu>
            </FooterGrid>
        </FooterContainer>
    )
}

export default Footer