import FlightIcn from "./flights-icn.png";
import HotelIcn from "./hotels-icn.png";
import DiningIcn from "./dining-icn.png";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #B16852;
  min-height: 400px;
  padding: calc(1rem + 1vw) 0;
`

const Features = styled.div`
  justify-self: center;
  justify-content: center;
  width: 100%;
  grid-auto-flow: column;
  display: grid;
  grid-template-columns: repeat(auto-fit 3 1fr);
  grid-template-rows:  repeat(auto-fit 2 1fr);
  column-gap: 4vw;
  row-gap: 5vw;
  grid-template-areas: 
    "Flights Hotels Dining"
    ". Signup .";
  @media screen and (max-width: 700px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit 4 1fr);
    row-gap: 10vw;
    grid-template-areas: 
    "Flights"
    "Hotels"
    "Dining"
    "Signup";
  }
`

const FlightsFeature = styled.div `
justify-self: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit 2 1fr);
  grid-template-areas: 
    "Icon"
    "Description";
  grid-area: Flights;


`
/*  @media screen and (max-width: 700px){
    grid-template-columns: repeat(auto-fit 2 1fr);
    grid-template-rows:  1fr;
    grid-template-areas:
    "Icon Description";  }**/

const HotelsFeature = styled.div`
  justify-self: center;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit 2 1fr);
  grid-template-areas: 
    "Icon"
    "Description";
  grid-area: Hotels;


`

const FeatureText = styled.div `
text-align: center;
  font-size: calc(0.75rem + 1vw);
  color: white;
  max-width: calc(1rem + 25vw);
  justify-self: center;
  grid-area: Description;
  @media screen and (max-width: 700px){
    max-width: calc(1rem + 35vw);

  }
`

const DiningFeature = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fit 2 1fr);
  grid-template-areas: 
    "Icon"
    "Description";
  grid-area: Dining; 
  justify-content: center;
  justify-self: center;

`

const Icon = styled.img`
  align-self: center;
  justify-self: center;
  width: calc(1rem + 8vw);
  grid-area: Icon;
  margin: 2vh 5.5vw;
  @media screen and (max-width: 700px){
    width: calc(1rem + 15vw);

  }
  
`

const SignupButton = styled.button `
  align-self: center;
  justify-self: center;
  background: #fff;
  color: #B16852;
  width: calc(1rem + 30vw);
  padding: 1rem 2rem;
  border-radius: 5rem;
  min-width: fit-content;
  font-size: calc(0.5rem + 1vw);
  font-weight: bold;
  border: none;
  grid-area: Signup;
  text-transform: uppercase;
  margin-bottom: 10vh;
  
`

const FeatureCTA = () => {
    return(
        <Wrapper>
            <Features>
                <FlightsFeature>
                    <Icon src={FlightIcn}/>
                    <FeatureText>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Donec nibh
                    </FeatureText>
                </FlightsFeature>
                <HotelsFeature>
                    <Icon src={HotelIcn}/>
                    <FeatureText>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Donec nibh
                    </FeatureText>
                </HotelsFeature>
                <DiningFeature>
                    <Icon src={DiningIcn}/>
                    <FeatureText>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Donec nibh
                    </FeatureText>
                </DiningFeature>
                <SignupButton>
                    Sign Up Here
                </SignupButton>
            </Features>
        </Wrapper>
    )
}

export default FeatureCTA