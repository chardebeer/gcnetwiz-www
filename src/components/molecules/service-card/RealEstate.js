import React from "react";
import {Box, Card, CardHeader, Heading, CardBody, Paragraph}  from "grommet";
import styled from "styled-components";

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
                        Real <Bold>Estate</Bold>
                    </Heading>
                    <CardBody pad="small">
                        <Paragraph fill>
                            Real estate covers a number of property types
                            – from residential to industrial – and is part
                            of the real assets category of investment.
                            Real estate investments are physical assets with
                            clearly defined earnings and income – in the form
                            of rent – that is paid as part of a contract.
                            Real assets represent one of the fastest growing
                            segments of the alternative-investments market,
                            which includes hedge funds and private equity.
                        </Paragraph>
                    </CardBody>
                </CardHeader>
            </Box>
        </Card>
    )
}

export default PrivateEquity