import React from "react";
import {Box, Card, CardHeader, Heading, CardBody, Paragraph, Image}  from "grommet";
import styled from "styled-components";
import CardImg from "./equity.png"

const Bold = styled.text`
  font-weight: bold;
  background: -webkit-linear-gradient(270deg, #FD749B 2%, #FD749B 15%, #281AC8 107.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const PrivateEquity = () => {
    return(
        <Card align="start" direction="row" justify="start" pad="small" fill="true" margin="medium" background={{"dark":true,"color":"black","opacity":"medium"}}>
            <Box align="start" justify="start" width="horizontal" pad="small" direction="row-responsive">
                <CardHeader align="start" direction="column" flex={false} justify="start" gap="none" pad="small">
                    <Heading textAlign="start" level="2" truncate={false} margin={{"left":"small","horizontal":"none","vertical":"small","top":"none","bottom":"none","right":"none"}}>
                       Private <Bold>Equity</Bold>
                    </Heading>
                    <CardBody pad="small">
                        <Paragraph fill>
                            Our private equity funds specialise in an active investment strategy that focuses
                            on the provision of growth and replacement capital, preferably in control positions.

                        </Paragraph>
                    </CardBody>
                </CardHeader>
            </Box>
        </Card>
    )
}

export default PrivateEquity