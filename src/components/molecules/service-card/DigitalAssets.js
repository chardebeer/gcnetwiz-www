import React from "react";
import {Box, Card, CardHeader, Heading, CardBody, Paragraph, Image}  from "grommet";
import styled from "styled-components";

const Bold = styled.text`
  font-weight: bold;
  background: -webkit-linear-gradient(270deg, #FD749B 2%, #FD749B 15%, #281AC8 107.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const SCard = styled(Card)`
min-width: 100%;
  min-height: 100%;
  backdrop-filter: blur(20px); 
box-shadow: black;
`
const DigitalAssets = () => {
    return(
        <SCard align="start" direction="row" justify="start" pad="small" fill="vertical" margin="medium" background={{"dark":true,"color":"black","opacity":"medium"}}>
            <Box align="start" justify="start" width="horizontal" pad="small" direction="row-responsive">
                <CardHeader align="start" direction="column" flex={false} justify="start" gap="none" pad="small">
                    <Heading textAlign="start" level="2" truncate={false} margin={{"left":"small","horizontal":"none","vertical":"small","top":"none","bottom":"none","right":"none"}}>
                        Digital <Bold>Assets</Bold>
                    </Heading>
                    <CardBody pad="small">
                        <Paragraph fill>
                            The digital asset sector and its leading constituent, bitcoin,
                            has been one of the fastest growing and highest returning technologies
                            in history. The disruptive potential of the asset class, and the investment
                            opportunities this creates, is a once in a generation phenomenon.
                        </Paragraph>
                    </CardBody>
                </CardHeader>
            </Box>
        </SCard>
    )
}

export default DigitalAssets