import React from "react";
import {Box, Card, CardHeader, Heading, CardBody, Paragraph}  from "grommet";
import styled from "styled-components";

const Bold = styled.text`
  font-weight: bold;
  background: -webkit-linear-gradient(270deg, #FD749B 2%, #FD749B 15%, #281AC8 107.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const IndexInvestment = () => {
    return(
        <Card align="start" direction="row" justify="start" pad="small" fill="true" margin="medium" background={{"dark":true,"color":"black","opacity":"medium"}}>
            <Box align="start" justify="start" width="horizontal" pad="small" direction="row-responsive">
                <CardHeader align="start" direction="column" flex={false} justify="start" gap="none" pad="small">
                    <Heading textAlign="start" level="2" truncate={false} margin={{"left":"small","horizontal":"none","vertical":"small","top":"none","bottom":"none","right":"none"}}>
                        Index <Bold> Funds</Bold>
                    </Heading>
                    <CardBody pad="small">
                        <Paragraph fill>
                            Index funds and ETFs are extremely similar –
                            an index. The fundamental difference is ETFs
                            can be bought and sold throughout the day on
                            a stock exchange, whereas index funds trade
                            at a single valuation point. Investors can
                            choose what kind of flexibility they require
                            from an index fund, and decide which type is
                            more appropriate for their needs.
                        </Paragraph>
                    </CardBody>
                </CardHeader>
            </Box>
        </Card>
    )
}

export default IndexInvestment