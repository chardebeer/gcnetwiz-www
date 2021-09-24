import React  from "react";
import styled from "styled-components";
import IndexInvestment from "../molecules/service-card/IndexInvestment";
import RealEstate from "../molecules/service-card/RealEstate";
import DigitalAssets from "../molecules/service-card/DigitalAssets";
import PrivateEquity from "../molecules/service-card/PrivateEquity";
import Bg from "../organisms/prefooter-banner/banner.png"

const GradientAnimation = styled.div`
  min-width: 100vw;
  background: linear-gradient(270deg, #fd749b, #281ac8);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;


@-webkit-keyframes AnimationName {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@keyframes AnimationName {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
`

const Container = styled.div`
  min-width: 100vw;
  max-width: 100%;
  padding: 15vh  7.5vw;
`

const ListWrapper = styled.div`
  max-width: 80vw;
`

   const CardGrid = styled.div
`        display: grid;
        grid-template-columns: repeat(2, minmax(15vw, 1fr));
        grid-template-rows:  25vh 30vh 1fr ;
        gap: 2em 2em;
        grid-template-areas:
        "PrivateEquity PrivateEquity" 
        "RealEstate RealEstate"
        "DigitalAssets Indexes";
        justify-content: stretch;
        align-content: center;
        justify-items: stretch;
        align-items: stretch;
  
  
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        "PrivateEquity" 
        "RealEstate"
        "DigitalAssets" 
        "Indexes" ;
    gap: 1em;

  }
`

const PrivateEquityGrid = styled.div`
  grid-area: PrivateEquity; 
  
`

const RealEstateGrid = styled.div`
  grid-area: RealEstate; `

const DigitalAssetsGrid = styled.div`
  grid-area: DigitalAssets; `

const IndexesGrid = styled.div`
 grid-area: Indexes; `


const CardList = () => {
    return(
<GradientAnimation>
    <Container>
        <ListWrapper>
            <CardGrid>
                <PrivateEquityGrid>
                    <PrivateEquity/>
                </PrivateEquityGrid>
                <RealEstateGrid>
                    <RealEstate/>
                </RealEstateGrid>
                <DigitalAssetsGrid>
                    <DigitalAssets/>
                </DigitalAssetsGrid>
                <IndexesGrid>
                    <IndexInvestment/>
                </IndexesGrid>
            </CardGrid>
        </ListWrapper>
    </Container>
</GradientAnimation>
    )
}

export default CardList