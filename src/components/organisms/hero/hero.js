import React from 'react'
import styled from "styled-components";
import HeroImg from "./hero-img.png"


const HeroContainer = styled.div`
  width: 100%;
  display: grid;
`

const ImgBg = styled.img`
display: flex;
  
  align-self: center;
  max-width: 25vw;
  max-height: 25vw;
`

const HeroMain = styled.div`
  background: linear-gradient(180deg, #000939 0%, #2D2E54 52.08%, #514AA4 100%);
  min-height: calc(20vw + 30vh);
  min-width: 100vw;
  align-content: center;
  display: inline-flex;
  
  @media screen and (max-width: 600px) {
    background-position: top right;
    min-height: fit-content;

  }
  @media screen and (max-width: 500px) {
    margin-top: 15%;
    background-position: right 46% bottom;
    min-height: fit-content;

  }
  @media screen and (max-width: 300px) {
    margin-top: 20%;
    min-height: fit-content;

  }

`
const Text = styled.div`
  text-overflow: fade;
  max-width: 45%;
  word-wrap: normal;
  color: #fff;
  word-break: normal;
  font-size: calc(1.5rem + 1vw);
  font-style: normal;
  font-weight: normal;
  line-height: calc(2rem + 1vw);
  padding-bottom: 5vw;
  text-align: left;
  margin: calc(15vw + 5vh) 0 calc(10vw + 5vh) 10vw;
  @media screen and (max-width: 930px) {
    max-width: calc(55% + 1vw );
  }
  @media screen and (max-width: 500px) {
    max-width: 70% ;
    margin-top: 15vw;
    margin-bottom: 10vw;
    padding-bottom: 0;

  }
  @media screen and (max-width: 300px) {
    max-width: 80% ;
    padding-bottom: 0;

  }
`

const Bold = styled.text`
font-weight: bold;
`

const Hero = () => {
    return (
<HeroContainer>
<HeroMain>
    <Text>
        <Bold>Transforming</Bold> the investment landscape
         by generating <Bold>  next-level wealth </Bold>
        through  <Bold> cutting-edge </Bold> strategies.
    </ Text>
    <ImgBg src={HeroImg} />
</HeroMain>
        </HeroContainer>
    )
}

export default Hero
