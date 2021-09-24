import React from "react";
import styled from "styled-components";
import PfIcon from "./finance.png"
import BgImg from "./banner.png"
import {Button } from "grommet"
import {ChatOption} from "grommet-icons"

const Banner = styled.section `
  background: url("${BgImg}"), #333;
  background-blend-mode: overlay;
  width: 100vw;
height: 80vh;`
const Content = styled.div `
  padding: 15vh 10vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;`

const Heading = styled.text `
  font-size: calc(1rem + 2vw);
  font-style: normal;
  font-weight: 700;
  color: #fff;
  line-height: calc(1rem + 2.5vw);
  text-align: center;
`

const Text = styled.text `
  font-size: calc(1rem + 1vw);;
  padding: 2vh 5vw 5vh 5vw;
  font-style: normal;
  color: #fff;
  font-weight: 400;
  line-height:calc(1rem + 1.5vw);
  text-align: center;
  @media screen and (max-width: 700px){
    padding: 2vh 2vw 5vh 2vw;
    font-size: calc(1rem + 1.5vw);;

  }
  @media screen and (max-width: 450px){
    padding: 2vh 1vw;
    font-size: calc(0.76rem + 1.5vw);;


  }
  
  

`

const StyledBtn = styled(Button)`
  background: rgba(225, 225, 225, 0.46);
  backdrop-filter: blur(4);
  width: calc(10rem + 5vw);
  font-weight: 600;
  border: none;
 margin:  1em 30vw;
  align-self: center;

`
const BannerIcon = styled.img `
  align-self: center;
  margin-bottom: 5vh;
  width: calc(5rem + 1vw);
  
`


const PrefooterBanner = () => {
    return(
        <Banner>
            <Content>
                <BannerIcon src={PfIcon}/>
                <Heading>
                    Contact us to f ind out more
                </Heading>
                <Text>
                    We pursue opportunities to effect positive change through transformation, economic growth and job creation.

                </Text>
                <StyledBtn label="CONTACT US" icon={<ChatOption />} primary size="large" justify="center"
                />
            </Content>
        </Banner>
    )
}

export default PrefooterBanner